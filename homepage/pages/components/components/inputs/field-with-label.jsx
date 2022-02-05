import TextField from "@mui/material/TextField";
import "./field-with-label.sass";
const FieldWithLabel = ({ label, type, id, color }) => {
    return (
        <>
            <div className="d-flex mt-md-2 h6 m-md-5 ms-md-0 w-100 flex-column px-5 px-md-5">
                <label className="py-2 muted py-md-1 small">{label}</label>
                <TextField
                    className="bg-white custom-textfield rounded"
                    id={id}
                    color={color != null ? color : "primary"}
                />
            </div>
        </>
    );
};
export default FieldWithLabel;
