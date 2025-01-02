import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import myContext from '../../context/data/myContext';
import { addToCart } from '../../redux/cartSlice';

function ProductCard() {
    const context = useContext(myContext);
    const { mode, productList } = context; // Get productList from context
    const dispatch = useDispatch(); // Get the dispatch function

    const handleAddToCart = (product) => {
        // Convert the Timestamp to a serializable format if it exists
        const serializableProduct = {
            ...product,
            time: product.time ? product.time.seconds * 1000 : null, // Convert to milliseconds if time exists
            quantity: 1 // Set initial quantity to 1
        };
        dispatch(addToCart(serializableProduct)); // Dispatch the action to add the product to the cart
    };

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-8 md:py-16 mx-auto">
                <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900" style={{ color: mode === 'dark' ? 'white' : '' }}>New Products</h1>
                    <div className="h-1 w-20 bg-blue-600 rounded"></div>
                </div>

                <div className="flex flex-wrap -m-4">
                    {productList.length > 0 ? (
                        productList.map((item) => {
                            const { id, title, price, imageUrl } = item; // Destructure item properties
                            return (
                                <div className="p-4 md:w-1/4 drop-shadow-lg" key={id}>
                                    <div className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out border-gray-200 border-opacity-60 rounded-2xl overflow-hidden" style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                        <div className="flex justify-center cursor-pointer">
                                            <img className="rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110 duration-300 ease-in-out" src={imageUrl || "https://dummyimage.com/720x400"} alt={title || "Product Image"} />
                                        </div>
                                        <div className="p-5 border-t-2">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1" style={{ color: mode === 'dark' ? 'white' : '' }}>STechSolnStore</h2>
                                            <h1 className="title-font text-lg font-medium text-gray-900 mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>{title || "This is title"}</h1>
                                            <p className="leading-relaxed mb-3" style={{ color: mode === 'dark' ? 'white' : '' }}>₹ {price || "500"}</p>
                                            <div className="flex justify-center">
                                                <button 
                                                    type="button" 
                                                    className="focus:outline-none text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full py-2" 
                                                    onClick={() => handleAddToCart(item)} // Call the function with the product
                                                >
                                                    Add To Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    ) : (
                        <div className="w-full text-center py-4">No products available</div>
                    )}
                </div>
            </div>
        </section>
    );
}

export default ProductCard;