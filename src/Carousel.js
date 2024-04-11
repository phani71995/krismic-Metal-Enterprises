function Carousel() {
    return (<>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://i.imghippo.com/files/K5Zsw1711887752.jpg" alt="First slide" />
                    <div class="carousel-caption d-none d-md-block mt-2">
                        <h1>
                            MANUFACTURERS OF PRECISION INJECTION MOULDS, DIE CASTING DIES & PRESS TOOLS and  Other Related Products</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.gvpolytek.com/images/slides/2.jpg" alt="Second slide" />

                    <div class="carousel-caption d-none d-md-block">
                        <h1>KrismicMetal Enterprises. is Is Manufacturer, Suppliers & Exporters Of Web Offset Machinery, Oil And Gas Products, High Precision Products, Aero Space Products.</h1>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.gvpolytek.com/images/slides/3.jpg" alt="Third slide" />

                    <div class="carousel-caption d-none d-md-block">
                        <h1>Defence & Aerospace Manufacturing</h1>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    </>)
}
export default Carousel