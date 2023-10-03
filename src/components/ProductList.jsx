import React, { useEffect, useState } from 'react'
import Pagination from './Pagination';
import ProductCard from './ProductCard';

const ProductList = () => {
    const [product, setProduct] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const productParPage = 6;


    const getProducts = async () => {
        try {
            const response = await fetch('http://localhost:8080/products');
            const data = await response.json();
            console.log(data);
            setProduct(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    const lastProductIdx = currentPage * productParPage;
    const firstProductIdx = lastProductIdx - productParPage;
    const products = product.slice(firstProductIdx, lastProductIdx)



    return (
        <div className='my-8 mx-36'>
            <input className='rounded-md border border-[#e4e4e4] mb-4
        relative overflow-hidden text-sm px-2 py-1 ' type="text" placeholder='Search...' 
             onChange={(e) => setSearch(e.target.value)} />

            <section>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
                    gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">

                        {
                            products.filter((item) => {
                                if (search === " " || item.title.toLowerCase().includes(search.toLowerCase())) return item; 
                            })
                                .map((item) => (
                                   <div>
                                    <ProductCard {...item} key={item.id}/>
                                   </div>
                                ))
                        }
                    </div>
                </div>
            </section>


            <Pagination totalProduct={product.length} productParPage={productParPage} setCurrentPage={setCurrentPage} />
        </div>
    )
}

export default ProductList