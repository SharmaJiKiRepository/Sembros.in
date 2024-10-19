const Order = require('../../models/orderModel');
const Product = require('../../models/productModel');

// Get all orders for a specific user
const getUserOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const orders = await Order.find({ userId });
    res.status(200).json({ success: true, orders });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching user orders', error });
  }
};

// Place a new order
const placeOrder = async (req, res) => {
  const { shippingAddress, cartItems } = req.body;

  // Log the incoming request to verify its structure
  console.log("Received order request:", req.body);

  if (!cartItems || cartItems.length === 0) {
    return res.status(400).json({ success: false, message: 'Cart is empty' });
  }

  try {
    let totalAmount = 0;

    const updatedCartItems = await Promise.all(
      cartItems.map(async (item) => {
        // Log each item to see if imageUrl is present
        console.log("Processing cart item:", item);

        const product = await Product.findById(item.productId);
        if (!product) {
          throw new Error(`Product with ID ${item.productId} not found.`);
        }
        if (product.stock < item.quantity) {
          throw new Error(`Not enough stock for product: ${product.name}`);
        }

        totalAmount += product.sellingPrice * item.quantity;

        // Ensure imageUrl is present, fallback to a default if missing
        return {
          productId: product._id,
          quantity: item.quantity,
          imageUrl: item.imageUrl || product.imageUrl || '/default-product-image.jpg',
        };
      })
    );

    console.log("Updated cart items for order:", updatedCartItems);

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
    console.error("Error while placing order:", error);
    res.status(500).json({ success: false, message: error.message });
  }
};

// Cancel an order
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
    res.status(500).json({ success: false, message: 'Error cancelling order', error: error.message });
  }
};

// Delete an order (admin functionality)
const deleteOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ success: false, message: 'Order not found' });
    }

    res.status(200).json({ success: true, message: 'Order deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error deleting order', error: error.message });
  }
};

module.exports = {
  getUserOrders,
  placeOrder,
  cancelOrder,
  deleteOrder,
};
