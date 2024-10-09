// Importing React is not necessary here if this file does not contain any React components.
const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`;

const uploadImage = async (image) => {
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset","sembros_products");

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error uploading image:', error);
        return null;  // Handle errors as needed
    }
}

export default uploadImage;
