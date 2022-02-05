import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "react-use-cart";
import RedBadge from "../../badge/red-badge";

import "./product-card-styles.sass";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // _id
  //   productName: productName,
  //   productImage: productImage,
  //   numberOfStocks: numberOfStocks,
  //   countriesDeliveredTo: countriesDeliveredTo,
  //   daysForDelivery: daysForDelivery,
  //   onSale: onSale,
  //   composition: composition,
  //   originCountry: originCountry,
  //   brand: brand,
  //   price: price,
  //   discountedPrice: discountedPrice,
  //   measurement: measurement
  //   measurementUnit: measurementUnit,
  //   description: description,
  //   badges: badges,
  //   nutritionalValue: {
  //     value: nutritionalValue,
  const { items, addItem, removeItem } = useCart();
  const isProductAdded = items.find(({ id }) => id === product.id);

  return (
    <div className="">
      {/* the empty container for the image to be shifted towards top */}
      <div className="empty-container p-4"></div>
      {/* the actual card */}
      <div
        className="container-fluid shadow pb-md-4 product-main-card bg-white px-md-4"
      >
        <div className="row">
          <div className="col-6 image-container">
            <Link to={`/product-description/${product._id}`}>
              <img
                src={product.productImage}
                alt={product.productName}
                className="product-image"
              />
            </Link>
          </div>
          <div className="rating-sale-container">
            <div className="col-6 d-flex flex-column flex-md-row justify-content-end pt-2 px-2 align-items-end rating">
              <div className="col-auto align-self-center icon px-md-1">
                <FontAwesomeIcon icon={faStar} className="fa fa-star" />
              </div>
              <span className="col-auto align-self-center">
                <strong>{product.ratings["rating"]}/5</strong>
              </span>
            </div>
          </div>
          <RedBadge onSale={product.onSale} />
        </div>
        <div className="row">
          <h5 className="col-auto title font-130">
            <Link
              className="text-decoration-none product-name"
              to={`/product-description/${product._id}`}
            >
              {product.productName}
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
              isProductAdded ? removeItem(product.id) : addItem(product);
            }}
          >
            <div className="d-flex justify-content-center align-content-center">
              {isProductAdded ? (
                <motion.div initial={{ y: -50 }} animate={{ y: 0 }}>
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
                  ${product.price}
                </motion.span>
                <span className="px-1 px-md-0 sale-price">
                  <strong>${product.discountedPrice}</strong>
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
                  <strong>${product.price}</strong>
                </span>
              </span>
            )}
            <span className="px-1 px-md-0 light-text">
              /{product.measurementValue==="" ? "500": product.measurementValue}
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
