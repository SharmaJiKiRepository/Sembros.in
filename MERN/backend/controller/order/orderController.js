const Order = require('../../models/orderModel');
const Product = require('../../models/productModel');

const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await Order.find({ userId });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching user orders', error });
  }
};

const placeOrder = async (req, res) => {
  const { shippingAddress, cartItems } = req.body;

  try {
    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ success: false, message: 'Cart is empty' });
    }

    let totalAmount = 0;

    // Fetch product details and calculate total amount
    const updatedCartItems = await Promise.all(
      cartItems.map(async (item) => {
        const product = await Product.findById(item.productId);
        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found.`);
        }
        if (product.stock < item.quantity) {
          throw new Error(`Not enough stock for product: ${product.name}`);
        }

        totalAmount += product.sellingPrice * item.quantity;

        return {
          productId: product._id,
          quantity: item.quantity,
          imageUrl: product.imageUrl, // Add image URL to each cart item
        };
      })
    );

    const newOrder = new Order({
      userId: req.userId,
      shippingAddress,
      cartItems: updatedCartItems,
      totalAmount,
      status: 'Pending',
    });

    // Decrement stock for each product
    for (const item of updatedCartItems) {
      await Product.updateOne({ _id: item.productId }, { $inc: { stock: -item.quantity } });
    }

    await newOrder.save();
    res.status(201).json({ success: true, message: 'Order placed successfully', order: newOrder });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const cancelOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const updatedOrder = await Order.findByIdAndUpdate(orderId, { status: 'Cancelled' }, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    // Restore stock for each product in the cancelled order
    for (const item of updatedOrder.cartItems) {
      await Product.updateOne({ _id: item.productId }, { $inc: { stock: item.quantity } });
    }

    res.status(200).json({ success: true, message: 'Order cancelled successfully', order: updatedOrder });
  } catch (error) {
    console.error('Error cancelling order:', error.message);
    res.status(500).json({ success: false, message: 'Error cancelling order', error: error.message });
  }
};

// New function to handle deleting order history
const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;

    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    console.error('Error deleting order:', error.message);
    res.status(500).json({ success: false, message: 'Error deleting order', error: error.message });
  }
};

module.exports = {
  getUserOrders,
  placeOrder,
  cancelOrder,
  deleteOrder,
};
