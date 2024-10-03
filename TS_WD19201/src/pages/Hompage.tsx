import axios from "axios";
import { useState, useEffect } from "react";
import { Product } from "../type/product";
import './styles.css';

function Homepage() {
    const [products, setProducts ] = useState<Product[]>([]);
    const getProducts = async () => {
        try {
            const { data } = await axios.get("http://localhost:3000/products");
            setProducts(data);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error)
        { /* empty */ }
    }
    useEffect(() => {
        getProducts();
    }, []);
    return (
        <>
       

       <header className="flex justify-between items-center p-4 bg-black text-white">
        <h1 className="text-2xl">ASM</h1>
        <nav className="flex space-x-4">
          <a className="hover:underline" href="/">Home</a>
          <a className="hover:underline" href="/products">Products</a>
          <a className="hover:underline" href="/about">About</a>
          <a className="hover:underline" href="/contact">Contact</a>
        </nav>
      </header>
      <div className="w-full h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://as1.ftcdn.net/v2/jpg/09/70/50/80/1000_F_970508013_wmv1pEimUZjrR5vZqfmfRcS1pg7om6PP.jpg')" }}>
        {/* Thay thế bằng URL của banner */}
      </div>
           

            <table className="min-w-full bg-white border border-gray-300 shadow-md">
    <thead className="bg-gray-900 text-white">
        <tr>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Name</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Price</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Description</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Brand</th>
            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Action</th>
        </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
        {products.map((product, index) => (
            <tr key={index} className="hover:bg-gray-100 transition-colors duration-200">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"><strong>{product.id}</strong></td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">${product.price.toFixed(2)}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.description}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img className="h-20 w-20 object-cover rounded" src={product.image} alt={product.name} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{product.brand}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <a href={'/products/' + product.id} className="text-indigo-600 hover:text-indigo-900 font-bold">Chi tiết</a>
                </td>
            </tr>
        ))}
    </tbody>
</table>

<footer className="bg-gray-800 p-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-white text-sm">© Vương Ngọc Trọng.</p>
            </div>
        </footer>
        </>
    );
}

export default Homepage