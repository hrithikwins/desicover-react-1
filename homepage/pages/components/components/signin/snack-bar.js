import React, { useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Signin from "./signin";
export default function SnackBar() {
    const [state, setState] = React.useState({
        open: false,
        vertical: "top",
        horizontal: "center",
    });
    const { vertical, horizontal, open } = state;

    useEffect(() => {
        setState({ open: true });
    }, []);
    return (
        <div>
            <Snackbar
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                }}
                message="Signin with Google"
                open={open}
                key={vertical + horizontal}
            >
                <Signin />
            </Snackbar>
        </div>
    );
}
