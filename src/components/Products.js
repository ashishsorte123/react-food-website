import Product from './Product';
import { useEffect, useState } from 'react';


const Products = () => {
    // const {name} = useContext(CartContext);
    const [ products, setProducts] = useState([]);
    useEffect(() => {
        // console.log('Component mounted....');
        fetch('/api/products')
        .then(response => response.json())
        // .then(response => {
        //     console.log(response);
        //     return response.json();
        // })
        .then(products => {
            setProducts(products);
            // console.log(products);
        });
    }, []);
    return (
        <div className="container mx-auto pd-24">
            <h1 className="text-lg font-bold my-8">Products</h1>  
            <div className="grid grid-cols-5 gap-24">
                {
                    products.map(product => <Product key={product._id} product={product}/>)
                }
            </div>          
        </div>
    )
};

export default Products;
