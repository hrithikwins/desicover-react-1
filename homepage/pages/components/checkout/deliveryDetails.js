import React from "react";
import FieldWithLabel from "../../components/inputs/field-with-label";

function deliveryDetails() {
  return (
    <div className="p-md-2 px-md-0">
      <h5 className="text-center text-md-start">Delivery details:</h5>
      <div className="d-md-flex">
        <FieldWithLabel type="text" label="Country/Region" id="" />
        <FieldWithLabel type="text" label="Town/City" id="" />
      </div>
      <div className="d-md-flex">
        <FieldWithLabel type="text" label="Street" id="" />
        <FieldWithLabel type="text" label="Postcode" id="" />
      </div>
      <div className="d-md-flex">
        <FieldWithLabel type="text" label="Packing type" id="" />
        <FieldWithLabel type="text" label="Shipping options" id="" />
      </div>
    </div>
  );
}

export default deliveryDetails;
