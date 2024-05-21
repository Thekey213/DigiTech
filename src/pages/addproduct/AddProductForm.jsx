import React, { useState } from 'react';
import { db } from '../../firebase/firebase';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { doc, setDoc } from "firebase/firestore";
import './AddProductForm.css';

const AddProductForm = () => {

  const memoryOptions = ["4", "8", "16", "32", "64"]; 

  const [product, setProduct] = useState({
    image: null,
    title: '',
    price: '',
    description: '',
    OperatingSystem: '',
    Display: '',
    Memory: '',
    Storage: '',
    Processor: '',
    Graphics: '',
    Keyboard: '',
    Audio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setProduct({ ...product, image });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.image) {
      alert('Please select an image.');
      return;
    }

    const storage = getStorage();
    const storageRef = ref(storage, `product_images/${product.image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, product.image);

    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error(error);
        alert('Error uploading image. Please try again later.');
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          await setDoc(doc(db, 'products', Date.now().toString()), {
            ...product,
            image: downloadURL
          });
          setProduct({
            image: null,
            title: '',
            price: '',
            description: '',
            OperatingSystem: '',
            Display: '',
            Memory: '',
            Storage: '',
            Processor: '',
            Graphics: '',
            Keyboard: '',
            Audio: ''
          });
          alert('Product added successfully!');
        } catch (error) {
          console.error("Error adding document: ", error);
          alert('Error adding product. Please try again later.');
        }
      }
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" name="title" value={product.title} onChange={handleChange} required />
      </div>
      <div>
        <label>Price:</label>
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
      </div>
      <div>
        <label>Description:</label>
        <textarea name="description" value={product.description} onChange={handleChange} required></textarea>
      </div>
      <div>
        <label>Operating System:</label>
        <input type="text" name="OperatingSystem" value={product.OperatingSystem} onChange={handleChange} required />
      </div>
      <div>
        <label>Display:</label>
        <input type="text" name="Display" value={product.Display} onChange={handleChange} required />
      </div>
      <div>
      <label>Memory:</label>
      <select name="Memory" value={product.Memory} onChange={handleChange} required>
        {memoryOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
      <div>
        <label>Storage:</label>
        <input type="text" name="Storage" value={product.Storage} onChange={handleChange} required />
      </div>
      <div>
        <label>Processor:</label>
        <input type="text" name="Processor" value={product.Processor} onChange={handleChange} required />
      </div>
      <div>
        <label>Graphics:</label>
        <input type="text" name="Graphics" value={product.Graphics} onChange={handleChange} required />
      </div>
      <div>
        <label>Keyboard:</label>
        <input type="text" name="Keyboard" value={product.Keyboard} onChange={handleChange} required />
      </div>
      <div>
        <label>Audio:</label>
        <input type="text" name="Audio" value={product.Audio} onChange={handleChange} required />
      </div>
      <div className="image-upload-container">
     <label>Image:</label>
       <input type="file" onChange={handleImageChange} required />
    </div>

      <button type="submit">Start</button>
    </form>
  );
};

export default AddProductForm;
