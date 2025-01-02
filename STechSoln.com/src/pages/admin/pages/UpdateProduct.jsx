import React, { useEffect, useContext, useState } from 'react';
import MyContext from '../../../context/data/myContext';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateProduct() {
    const { updateProduct, productList } = useContext(MyContext);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        imageUrl: '',
        category: '',
        description: '',
    });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const productToEdit = productList.find(product => product.id === id);
        if (productToEdit) {
            setFormData({
                title: productToEdit.title,
                price: productToEdit.price,
                imageUrl: productToEdit.imageUrl,
                category: productToEdit.category,
                description: productToEdit.description,
            });
        }
    }, [id, productList]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Object.values(formData).some(field => field === '')) {
            return alert('Please fill all fields');
        }

        // Call the updateProduct function with the product ID
        await updateProduct(id, formData); // Pass the product ID and updated data
        navigate('/dashboard'); // Redirect to the dashboard after updating
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='bg-gray-800 px-10 py-10 rounded-xl'>
                <h1 className='text-center text-white text-xl mb-4 font-bold'>Update Product</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name='title'
                            value={formData.title}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product title'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='price'
                            value={formData.price}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product price'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='imageUrl'
                            value={formData.imageUrl}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product imageUrl'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            name='category'
                            value={formData.category}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product category'
                        />
                    </div>
                    <div>
                        <textarea
                            cols="30"
                            rows="5"
                            name='description'
                            value={formData.description}
                            onChange={handleChange}
                            className='bg-gray-600 mb-4 px-2 py-2 w-full lg:w-[20em] rounded-lg text-white placeholder:text-gray-200 outline-none'
                            placeholder='Product description'
                        />
                    </div>
                    <div className='flex justify-center mb-3'>
                        <button
                            type="submit"
                            className='bg-yellow-500 w-full text-black font-bold px-2 py-2 rounded-lg'>
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateProduct;