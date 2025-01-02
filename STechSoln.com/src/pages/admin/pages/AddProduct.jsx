import React, { useContext } from 'react';
import myContext from '../../../context/data/myContext';

function AddProduct() {
    const context = useContext(myContext);
    const { products, setProducts, addProduct } = context; // Ensure correct casing

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducts({ ...products, [name]: value }); // Use setProducts with correct casing
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission
        await addProduct(); // Call the addProduct function to add the product
        window.location.href = '/dashboard'; // Redirect to the dashboard after adding the product
    };

    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                    <h1 className='text-center text-white text-xl mb-4 font-bold'>Add Product</h1>
                    <form onSubmit={handleSubmit}> {/* Use form for better semantics */}
                        <div>
                            <input
                                type="text"
                                name='title'
                                onChange={handleChange}
                                value={products.title}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product title'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name='price'
                                onChange={handleChange}
                                value={products.price}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product price'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name='imageUrl'
                                onChange={handleChange}
                                value={products.imageUrl}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product image URL'
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name='category'
                                onChange={handleChange}
                                value={products.category}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product category'
                                required
                            />
                        </div>
                        <div>
                            <textarea
                                cols="30"
                                rows="10"
                                name='description'
                                onChange={handleChange}
                                value={products.description}
                                className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                                placeholder='Product description'
                                required
                            />
                        </div>
                        <div className='flex justify-center mb-3'>
                            <button
                                type="submit" // Ensure this is a submit button
                                className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
                                Add Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddProduct;