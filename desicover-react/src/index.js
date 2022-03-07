import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./scss/style.scss";
import "./css/style.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import "bootstrap/dist/css/bootstrap.css";
import "./product-card-styles.sass";

import "swiper/css";
import ProductProvider from "./context/product-context";
import { CartProvider } from "react-use-cart";
import routes from "./routes";
import { indigo } from "@mui/material/colors";

const darkTheme = createTheme({
    palette: {
        primary: {
            main: indigo[800],
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CartProvider>
                <ProductProvider>
                    <Router>
                        {/* <AbsoluteAppbar /> */}
                        {/* <hr /> */}
                        <Suspense
                            fallback={
                                <div
                                    className="text-center vh-100 vw-100 bg-white text-danger d-flex justify-content-center align-items-center"
                                    style={{ fontSize: "200%" }}
                                >
                                    Please Wait Desicovers page is Loading....
                                </div>
                            }
                        >
                            {routes.map((element, index) => (
                                <div key={index}> {element}</div>
                            ))}
                        </Suspense>
                        {/* <Footer /> */}
                    </Router>
                </ProductProvider>
            </CartProvider>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
