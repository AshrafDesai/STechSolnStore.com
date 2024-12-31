import React, { useContext } from 'react';
import MyContext from '../../context/data/myContext';

const AllProducts = () => {
  const { products, setproducts, addProduct } = useContext(MyContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setproducts((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={products.title} // This will now be an empty string instead of null
        onChange={handleChange}
        placeholder="Product Title"
        required
      />
      <input
        type="number"
        name="price"
        value={products.price} // This will now be an empty string instead of null
        onChange={handleChange}
        placeholder="Product Price"
        required
      />
      <input
        type="text"
        name="imageUrl"
        value={products.imageUrl} // This will now be an empty string instead of null
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        type="text"
        name="category"
        value={products.category} // This will now be an empty string instead of null
        onChange={handleChange}
        placeholder="Product Category"
        required
      />
      <textarea
        name="description"
        value={products.description} // This will now be an empty string instead of null
        onChange={handleChange}
        placeholder="Product Description"
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default AllProducts;