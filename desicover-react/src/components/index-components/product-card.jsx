import { useCart } from "react-use-cart";

import { motion } from "framer-motion";
// import Link from "next/link";

// [
//     {
//         _id: "61fae2f031199ab0e1ba3733",
//         id: "1",
//         name: "First Product",
//         brandId: "1",
//         categoryName: "mobileCovers",
//         subCategoryName: "backCoveer",
//         tagsArray: ["mobile", "covers", "back", "red", "black", "blue"],
//         featureObject: { material: "fiber", warranty: "none" },
//         image:
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
    const isProductAdded = items.find(({ id }) => id === product._id);
    console.log(product);

    return (
        <div className="px-2">
            {/* the empty container for the image to be shifted towards top */}
            <div className="empty-container p-5"></div>
            {/* the actual card */}
            <div className="container-fluid shadow product-main-card bg-white px-md-4">
                <div className="row">
                    <div className="col-6 image-container">
                        <a
                            href={`/product-description/${product._id}`}
                            passHref
                        >
                            <img
                                // src={product.productData.image}
                                src={
                                    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fn3.sdlcdn.com%2Fimgs%2Ff%2Fl%2Fb%2FXiaomi-Redmi-3s-Prime-Flip-SDL618840124-3-88c94.jpg&f=1&nofb=1"
                                }
                                alt={product.productData.name}
                                className="product-image"
                            />
                        </a>
                    </div>
                    <div className="rating-sale-container">
                        <div className="col-6 d-flex flex-column flex-md-row justify-content-end pt-2 px-2 align-items-end rating">
                            <div className="col-auto align-self-center icon px-md-1"></div>
                            <span className="col-auto align-self-center">
                                {/* <strong>{product.ratings["rating"]}/5</strong> */}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="row pt-3">
                    <h5 className="col-auto title font-130">
                        <a
                            className="text-decoration-none product-name"
                            href={`/product-description/${product._id}`}
                        >
                            {product.productData.name}
                        </a>
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
                                ? removeItem(product._id)
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
                                    ₹{product.productData.price}
                                </motion.span>
                                <span className="px-1 px-md-0 sale-price">
                                    <strong>₹{product[0].price}</strong>
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
                                    <strong>
                                        ₹{product.productData.price}
                                    </strong>
                                </span>
                            </span>
                        )}
                        {/* <span className="px-1 px-md-0 light-text">
                            /
                            {product.measurementValue === ""
                                ? "500"
                                : product.measurementValue}
                            {product.measurementUnit}
                        </span> */}
                        <div className="py-2 py-md-0"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
