import { useCart } from "react-use-cart";

import { motion } from "framer-motion";
import Link from "next/link";

// [
//     {
//         _id: "61fae2f031199ab0e1ba3733",
//         id: "1",
//         productName: "First Product",
//         brandId: "1",
//         categoryName: "mobileCovers",
//         subCategoryName: "backCoveer",
//         tagsArray: ["mobile", "covers", "back", "red", "black", "blue"],
//         featureObject: { material: "fiber", warranty: "none" },
//         productImage:
//             "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi5.walmartimages.com%2Fasr%2Fbde96f22-3935-4d2f-a029-0221def91588.aa86f1c547294846c050321462d6c970.jpeg%3FodnWidth%3D1000%26odnHeight%3D1000%26odnBg%3Dffffff&f=1&nofb=1",
//         productDescription:
//             "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa aperiam veniam tempore rerum sunt ducimus numquam quos ad temporibus iure! Soluta, id sapiente! Sequi minima inventore eligendi assumenda, nihil ipsa, non repellendus sapiente nisi reiciendis consequuntur corporis quidem omnis eum dolores rerum repellat itaque repudiandae adipisci veniam, quod soluta deserunt? Modi, quasi ex delectus aperiam id quisquam eum tempore odio dolores architecto deserunt minus enim corporis, quae non? Porro repellendus commodi nemo eum ratione rem amet iste quas veniam perspiciatis.",
//         numberOfStocks: "40",
//         countriesDeliveredTo: ["India", "nepal"],
//         daysForDelivery: "4",
//         onSale: "true",
//         originCountry: "India",
//         brand: "Desicovers",
//         price: "200",
//         discountedPrice: "180",
//         reviews: { name: "sudip", review: "Great product" },
//         ratings: { noOfRatings: "200", averageRating: "4.5" },
//         createdAt: "2022-02-02T20:00:48.620Z",
//         updatedAt: "2022-02-02T20:00:48.620Z",
//         __v: 0,
//     },
// ];
const ProductCard = ({ product }) => {
    const { items, addItem, removeItem } = useCart();
    const isProductAdded = items.find(({ id }) => id === product.id);

    return (
        <div className="">
            {/* the empty container for the image to be shifted towards top */}
            <div className="empty-container"></div>
            {/* the actual card */}
            <div className="container-fluid shadow pb-md-4 product-main-card bg-white px-md-4">
                <div className="row">
                    <div className="col-6 image-container">
                        <Link href={`/product-description/${product._id}`}>
                            <img
                                src={product.productImage}
                                alt={product.productName}
                                className="product-image"
                            />
                        </Link>
                    </div>
                    <div className="rating-sale-container">
                        <div className="col-6 d-flex flex-column flex-md-row justify-content-end pt-2 px-2 align-items-end rating">
                            <div className="col-auto align-self-center icon px-md-1"></div>
                            <span className="col-auto align-self-center">
                                <strong>{product.ratings["rating"]}/5</strong>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row pt-4">
                    <h5 className="col-auto title font-130">
                        <Link
                            className="text-decoration-none product-name"
                            href={`/product-description/${product._id}`}
                        >
                            <div className="text-decoration-none">
                                {product.productName}
                            </div>
                        </Link>
                    </h5>
                </div>
                <div className="p-4 p-md-0"></div>
                <div className="row px-md-1 my-auto">
                    <button
                        className={
                            isProductAdded
                                ? "col-12 btn d-none  d-md-block feeble-border col-md-4 align-self-md-end custom-button-selected"
                                : "col-12 btn d-none  d-md-block feeble-border col-md-4 align-self-md-end custom-button"
                        }
                        // className={isProductAdded ? "feeble-border" : ""}
                        onClick={() => {
                            isProductAdded
                                ? removeItem(product.id)
                                : addItem(product, 1);
                        }}
                    >
                        <div className="d-flex justify-content-center align-content-center">
                            {isProductAdded ? (
                                <motion.div
                                    initial={{ y: -50 }}
                                    animate={{ y: 0 }}
                                >
                                    Added -
                                </motion.div>
                            ) : (
                                "Add +"
                            )}
                        </div>
                    </button>
                    <div
                        className="
            flex-wrap
            col-12
            d-md-flex
            flex-md-column
            col-md-7
            gap-md-0
            justify-content-md-end
            align-items-md-end
            mb-md-1
            price-container"
                    >
                        {product.onSale ? (
                            <span className="d-flex flex-md-column align-items-md-end">
                                <motion.span
                                    className=" align-self-center px-1 px-md-0 light-text striked-text"
                                    animate={{ x: 0 }}
                                    initial={{ x: 20 }}
                                >
                                    ₹{product.price}
                                </motion.span>
                                <span className="px-1 px-md-0 sale-price">
                                    <strong>₹{product.discountedPrice}</strong>
                                </span>
                            </span>
                        ) : (
                            <span className="d-flex flex-md-column align-items-md-end">
                                {/* <motion.span
                  className=" align-self-center px-1 px-md-0 light-text striked-text invisible"
                  animate={{ x: 0 }}
                  initial={{ x: 20 }}
                >
                  $00
                </motion.span> */}
                                <span className="px-1 px-md-0">
                                    <strong>₹{product.price}</strong>
                                </span>
                            </span>
                        )}
                        <span className="px-1 px-md-0 light-text">
                            /
                            {product.measurementValue === ""
                                ? "500"
                                : product.measurementValue}
                            {product.measurementUnit}
                        </span>
                        <div className="py-2 py-md-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
