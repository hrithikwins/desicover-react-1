import "../styles/globals.css";
import "../styles/product-card-styles.sass";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css";
import ProductProvider from "../pages/context/product-context";
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps }) {
    return (
        <CartProvider>
            <ProductProvider>
                <Component {...pageProps} />
            </ProductProvider>
        </CartProvider>
    );
}

export default MyApp;
