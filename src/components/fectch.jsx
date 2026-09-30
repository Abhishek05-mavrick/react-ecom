// import { useEffect, useState } from 'react';

// export default function ProductsFetch({ url = 'https://fakestoreapi.com/products' }) {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         let isMounted = true;

//         async function loadProducts() {
//             try {
//                 const response = await fetch(url);
//                 if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
//                 const products = await response.json();
//                 if (isMounted) setData(products);
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         }

//         loadProducts();
//         return () => { isMounted = false; };
//     }, [url]);

//     return data;
// }
export default function products(){
    useEffect(()=>{

        const getProducts = async () => {
            try{
                setLoading(true);
                setError("");
                const response = await fetch("https://fakestoreapi.com/products");
                if(!response.ok) throw new Error(`Request failed with status ${response.status}`);
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        getProducts();
    }, []);
}