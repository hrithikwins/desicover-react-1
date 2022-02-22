const Categories = (props) => {
    return (
        <>
            <div className="container">
                <div className="pb-2"></div>
                <div className="text-center">
                    <h5>CATEGORIES</h5>
                </div>
                {/* <!-- Gallery --> */}
                <div class="row">
                    <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                        <img
                            src="/anurag.jpeg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />

                        <img
                            src="/girl.jpeg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Wintry Mountain Landscape"
                        />
                    </div>

                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="/shivin.png"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Mountains in the Clouds"
                        />

                        <img
                            src="/jacket-girl.jpeg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Boat on Calm Water"
                        />
                    </div>
                    {/*
                    <div class="col-lg-4 mb-4 mb-lg-0">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(18).webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Waves at Sea"
                        />

                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Vertical/mountain3.webp"
                            class="w-100 shadow-1-strong rounded mb-4"
                            alt="Yosemite National Park"
                        />
                    </div> */}
                </div>
                {/* <!-- Gallery --> */}
            </div>
        </>
    );
};
export default Categories;
