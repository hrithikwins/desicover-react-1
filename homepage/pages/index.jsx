import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ResponsiveAppBar from "./components/navbar";
import { SwiperCarousel } from "./components/header-carousel";
import ProductCarousel from "./components/index-components/product-carousel";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Desicovers Home</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
            </Head>

            <main>
                <ResponsiveAppBar />
                <SwiperCarousel />
                {/* <Products */}
                <div className="px-md-4">
                    <ProductCarousel />
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    );
}
