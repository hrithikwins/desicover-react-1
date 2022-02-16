import { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ProductContext = createContext();

const ProductProvider = (props) => {
    const [productData, setProductData] = useState([]);
    async function getAllProducts() {
        const result = await axios.get(
            // "https://desicover.herokuapp.com/get-all-products"
            "https://daanapaani.herokuapp.com/get-all-products"
        );
        setProductData(result.data);
        console.log(result.data);
    }
    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <ProductContext.Provider value={[productData, getAllProducts]}>
            {props.children}
        </ProductContext.Provider>
    );
};
export default ProductProvider;
