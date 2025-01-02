import React, { useEffect, useState } from 'react';
import MyContext from './myContext';
import { fireDB } from '../../firebase/firebaseConfig';
import { Timestamp, addDoc, collection, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

function MyState(props) {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: '',
    price: '',
    imageUrl: '',
    category: '',
    description: '',
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });
  const [productList, setProductList] = useState([]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    document.body.style.backgroundColor = mode === 'light' ? 'rgb(17, 24, 39)' : 'white';
  };

  const addProduct = async () => {
    if (Object.values(products).some((field) => field === '')) {
      return toast.error('Please fill all fields');
    }
    const productRef = collection(fireDB, "products");
    setLoading(true);
    try {
      await addDoc(productRef, products);
      toast.success("Product added successfully");
      await getProductData(); // Fetch updated product data
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
      resetProductState();
    }
  };

  const updateProduct = async (id, updatedData) => {
    const productRef = doc(fireDB, "products", id);
    setLoading(true);
    try {
      await updateDoc(productRef, {
        ...updatedData,
        time: Timestamp.now(),
      });
      toast.success("Product updated successfully");
      await getProductData(); // Fetch updated product data
    } catch (error) {
      console.error("Error updating product:", error);
      toast.error("Failed to update product: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const deleteProduct = async (id) => {
    const productRef = doc(fireDB, "products", id);
    setLoading(true);
    try {
      await deleteDoc(productRef);
      toast.success("Product deleted successfully");
      await getProductData(); // Fetch updated product data
    } catch (error) {
      console.error("Error deleting product:", error);
      toast.error("Failed to delete product");
    } finally {
      setLoading(false);
    }
  };

  const getProductData = () => {
    const productRef = collection(fireDB, "products");
    onSnapshot(productRef, (snapshot) => {
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setProductList(products); // Update productList with fetched products
    });
  };

  const resetProductState = () => {
    setProducts({
      title: '',
      price: '',
      imageUrl: '',
      category: '',
      description: '',
      time: Timestamp.now(),
      date: new Date().toLocaleString("en-US", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }),
    });
  };

  useEffect(() => {
    getProductData(); // Fetch products when the component mounts
  }, []);

  return (
    <MyContext.Provider value={{ mode, toggleMode, loading, setLoading, products, setProducts, addProduct, updateProduct, deleteProduct, productList }}>
      {props.children}
    </MyContext.Provider>
  );
}

export default MyState;