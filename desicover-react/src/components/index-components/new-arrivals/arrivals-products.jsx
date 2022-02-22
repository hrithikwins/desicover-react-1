const ArrivalProducts = (props) => {
    return (
        <>
            <section>
                <div class="pb-3">
                    {/* <div class="row justify-content-center p-0"> */}
                    {/* <div class="col-md-8 col-lg-6 col-xl-4"> */}
                    <div class="card text-black">
                        <i class="fab fa-apple fa-lg pt-3 pb-1 px-3"></i>
                        <img
                            src="/anurag.jpeg"
                            class="card-img-top"
                            alt="..."
                        />
                        <div class="card-body">
                            <div class="text-center">
                                {/* <p class="card-title">Believing is seeing</p> */}
                                <p class="text-muted mb-4">Product Name</p>
                            </div>
                            <div class="d-flex justify-content-between total font-weight-bold mt-4">
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
