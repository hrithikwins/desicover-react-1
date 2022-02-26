import Navbar from "./../components/navbar";
import SwiperCarousel from "./../components/header-carousel";
import ProductCarousel from "./../components/index-components/product-carousel";
import Categories from "./../components/index-components/categories";
import NewArrivals from "./../components/index-components/new-arrivals";
import AllProducts from "./../components/index-components/all-products";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <SwiperCarousel />
                {/* <NewArrivals /> */}
                <Categories />
                <AllProducts />
            </main>
            {/* <div className="w-100"><ProductCarousel /></div> */}

            {/* <footer className={styles.footer}></footer> */}
            {/* <div className="py-5"></div> */}
        </>
    );
}
