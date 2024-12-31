import React, { useContext } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import myContext from '../../../context/data/myContext';
import { MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { FaUser, FaCartPlus } from 'react-icons/fa';
import { AiFillShopping, AiFillDelete, AiFillPlusCircle } from 'react-icons/ai'; // Importing AiFillPlusCircle
import { Link } from 'react-router-dom';

function DashboardTab() {
    const context = useContext(myContext);
    const { mode, productList, edithandle, deleteProduct } = context;

    const goToAdd = () => {
        window.location.href = '/addproduct';
    };

    return (
        <div>
            <div className="container mx-auto">
                <div className="tab container mx-auto">
                    <Tabs defaultIndex={0}>
                        <TabList className="md:flex md:space-x-8 bg-grid grid-cols-2 text-center gap-4 md:justify-center mb-10">
                            <Tab>
                                <button type="button" className="font-medium border-b-2 hover:shadow-purple-700 border-purple-500 text-purple-500 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center bg-[#605d5d12]">
                                    <div className="flex gap-2 items-center">
                                        <MdOutlineProductionQuantityLimits /> Products
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-pink-500 bg-[#605d5d12] text-pink-500 hover:shadow-pink-700 rounded-lg text-xl shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center">
                                    <div className="flex gap-2 items-center">
                                        <AiFillShopping /> Order
                                    </div>
                                </button>
                            </Tab>
                            <Tab>
                                <button type="button" className="font-medium border-b-2 border-green-500 bg-[#605d5d12] text-green-500 rounded-lg text-xl hover:shadow-green-700 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)] px-5 py-1.5 text-center">
                                    <div className="flex gap-2 items-center">
                                        <FaUser /> Users
                                    </div>
                                </button>
                            </Tab>
                        </TabList>

                        {/* Product Tab */}
                        <TabPanel>
                            <div className='px-4 md:px-0 mb-16'>
                                <h1 className='text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Product Details</h1>
                                <div className="flex justify-end">
                                    <div onClick={goToAdd}>
                                        <button
                                            type="button"
                                            className="focus:outline-none text-white bg-pink-600 shadow-[inset_0_0_10px_rgba(0,0,0,0.6)] border hover:bg-pink-700 outline-0 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
                                            style={{ backgroundColor: mode === 'dark' ? 'rgb(46 49 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <div className="flex gap-2 items-center">
                                                Add Product <FaCartPlus size={20} />
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="relative overflow-x-auto">
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs border border-gray-600 text-black uppercase bg-gray-200 shadow-[inset_0_0_8px_rgba(0,0,0,0.6)]" style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <tr>
                                                <th scope="col" className="px-6 py-3">S.No</th>
                                                <th scope="col" className="px-6 py-3">Image</th>
                                                <th scope="col" className="px-6 py-3">Title</th>
                                                <th scope="col" className="px-6 py-3">Price</th>
                                                <th scope="col" className="px-6 py-3">Category</th>
                                                <th scope="col" className="px-6 py-3">Date</th>
                                                <th scope="col" className="px-6 py-3">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {productList.map((item, index) => {
                                                const { title, price, imageUrl, category, date, id } = item; // Assuming 'id' is the unique identifier
                                                return (
                                                    <tr key={id} className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                                        <td className="px-6 py-4 text-black">{index + 1}.</td>
                                                        <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                            <img className='w-16' src={imageUrl} alt="img" />
                                                        </th>
                                                        <td className="px-6 py-4 text-black">{title}</td>
                                                        <td className="px-6 py-4 text-black">₹{price}</td>
                                                        <td className="px-6 py-4 text-black">{category}</td>
                                                        <td className="px-6 py-4 text-black">{date}</td>
                                                        <td className="px-6 py-4">
                                                            <div className="flex gap-2">
                                                                <div className="flex gap-2 cursor-pointer text-black" style={{ color: mode === 'dark' ? 'white' : '' }}>
                                                                    <div onClick={() => deleteProduct(item)}>
                                                                        <AiFillDelete className="w-6 h-6" />
                                                                    </div>
                                                                    <div>
                                                                        <Link to={'/updateproduct'} onClick={() => edithandle(item)}>
                                                                            <AiFillPlusCircle className="w-6 h-6" />
                                                                        </Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </TabPanel>

                        {/* Order Tab */}
                        <TabPanel>
                            <div className="relative overflow-x-auto mb-16">
                                <h1 className='text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>Order Details</h1>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-black uppercase bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                        <tr>
                                            <th scope="col" className="px-6 py-3">Payment Id</th>
                                            <th scope="col" className="px-6 py-3">Image</th>
                                            <th scope="col" className="px-6 py-3">Title</th>
                                            <th scope="col" className="px-6 py-3">Price</th>
                                            <th scope="col" className="px-6 py-3">Category</th>
                                            <th scope="col" className="px-6 py-3">Name</th>
                                            <th scope="col" className="px-6 py-3">Address</th>
                                            <th scope="col" className="px-6 py-3">Pincode</th>
                                            <th scope="col" className="px-6 py-3">Phone Number</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <td className="px-6 py-4 text-black">3393939</td>
                                            <th scope="row" className="px-6 py-4 font-medium text-black whitespace-nowrap">
                                                <img className='w-16' src="https://dummyimage.com/720x400" alt="img" />
                                            </th>
                                            <td className="px-6 py-4 text-black">Title</td>
                                            <td className="px-6 py-4 text-black">₹100</td>
                                            <td className="px-6 py-4 text-black">pots</td>
                                            <td className="px-6 py-4 text-black">name</td>
                                            <td className="px-6 py-4 text-black">india</td>
                                            <td className="px-6 py-4 text-black">82828</td>
                                            <td className="px-6 py-4 text-black">929929929929</td>
                                            <td className="px-6 py-4 text-black">kkakka@gmail.com</td>
                                            <td className="px-6 py-4 text-black">12 Aug 2019</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>

                        {/* User Tab */}
                        <TabPanel>
                            <div className="relative overflow-x-auto mb-10">
                                <h1 className='text-center mb-5 text-3xl font-semibold underline' style={{ color: mode === 'dark' ? 'white' : '' }}>User Details</h1>
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-black uppercase bg-gray-200" style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                        <tr>
                                            <th scope="col" className="px-6 py-3">S.No</th>
                                            <th scope="col" className="px-6 py-3">Name</th>
                                            <th scope="col" className="px-6 py-3">Address</th>
                                            <th scope="col" className="px-6 py-3">Pincode</th>
                                            <th scope="col" className="px-6 py-3">Phone Number</th>
                                            <th scope="col" className="px-6 py-3">Email</th>
                                            <th scope="col" className="px-6 py-3">Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-gray-50 border-b dark:border-gray-700" style={{ backgroundColor: mode === 'dark' ? 'rgb(46, 49, 55)' : '', color: mode === 'dark' ? 'white' : '' }}>
                                            <td className="px-6 py-4 text-black">1.</td>
                                            <td className="px-6 py-4 text-black">Name</td>
                                            <td className="px-6 py-4 text-black">Address</td>
                                            <td className="px-6 py-4 text-black">181919</td>
                                            <td className="px-6 py-4 text-black">1991818818</td>
                                            <td className="px-6 py-4 text-black">kkk@gmail.com</td>
                                            <td className="px-6 py-4 text-black">12 Aug 2019</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}

export default DashboardTab;