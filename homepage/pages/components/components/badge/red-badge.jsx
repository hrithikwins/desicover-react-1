import "./red-badge-styles.sass";
const RedBadge = ({ text = "ON SALE", onSale }) => {
  return (
    <div className={onSale ? "" : "invisible "}>
      <div className="d-flex row justify-content-start justify-content-md-end offset-1 offset-md-0 px-2 ">
        <p className="bg-danger border rounded align-self-center col-auto mt-1 p-1 py-md-2 badge-text rounded-3">
          <strong className="px-md-2  ">{text}</strong>
        </p>
      </div>
    </div>
  );
};

export default RedBadge;
