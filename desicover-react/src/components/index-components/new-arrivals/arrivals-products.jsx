const ArrivalProducts = (props) => {
    return (
        <>
            <section>
                <div className="pb-3">
                    {/* <div className="row justify-content-center p-0"> */}
                    {/* <div className="col-md-8 col-lg-6 col-xl-4"> */}
                    <div className="card text-black">
                        <i className="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                        <img
                            src="/anurag.jpeg"
                            className="card-img-top"
                            alt="..."
                        />
                        <div className="card-body">
                            <div className="text-center">
                                {/* <p className="card-title">Believing is seeing</p> */}
                                <p className="text-muted mb-4">Product Name</p>
                            </div>
                            <div className="d-flex justify-content-between total font-weight-bold mt-4">
                                <span>Model</span>
                                <span>Price</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
                {/* </div> */}
            </section>
        </>
    );
};
export default ArrivalProducts;
