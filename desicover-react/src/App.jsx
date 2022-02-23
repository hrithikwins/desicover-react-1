// import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Navbar from "./components/navbar";
import SwiperCarousel from "./components/header-carousel";
import ProductCarousel from "./components/index-components/product-carousel";
import Categories from "./components/index-components/categories";
import NewArrivals from "./components/index-components/new-arrivals";
export default function App() {
    return (
        <>
            <Navbar />
            {/* <SwiperCarousel /> */}
            {/* <NewArrivals /> */}
            {/* <Categories /> */}
            {/* <div className="w-100"><ProductCarousel /></div> */}

            {/* <footer className={styles.footer}></footer> */}
            {/* <div className="py-5"></div> */}
        </>
    );
}
