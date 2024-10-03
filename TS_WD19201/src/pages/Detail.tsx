import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../type/product";
import axios from "axios";
import './styles.css';
import { Link } from "react-router-dom";


function Detail () {
    const { id } = useParams(); 
    const [product, setProduct] = useState<Product | undefined>();
    
    
    const getDetail = async(id: string) => {
        try {
           
            const response = await axios.get(`http://localhost:3000/products/${id}`);
           
            if (response.status == 200) { 
                setProduct(response.data); 
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => { 
        if (!id) return;
        getDetail(id);
    }, [id])

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
      
       <div className="container mx-auto p-6 mt-8 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6">Chi Tiết Sản Phẩm</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <img 
                        className="w-full h-72 object-contain rounded-lg shadow-md" 
                        src={product?.image} 
                        alt={product?.name} 
                    />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="mb-4">
                        <p className="text-lg font-semibold"><strong>ID:</strong> {product?.id}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold"><strong>Name:</strong> {product?.name}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold"><strong>Price:</strong> ${product?.price.toFixed(2)}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold"><strong>Brand:</strong> {product?.brand}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold"><strong>Description:</strong> {product?.description}</p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-6">
                <Link 
                    to="/" 
                    className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition duration-300"
                >
                    Trở Về Trang Chủ
                </Link>
            </div>
        </div>
        <footer className="bg-gray-800 p-4 mt-8">
            <div className="container mx-auto text-center">
                <p className="text-white text-sm">© Vương Ngọc Trọng.</p>
            </div>
        </footer>
        </>
    )
}

export default Detail;