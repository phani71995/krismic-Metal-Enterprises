function NavBar() {
    return (<>

        <nav className=" mainbar navbar navbar-expand-lg navbar-light bg-light ">

            <ul className="navbar-nav">

                <li className="nav-item active">
                    <a className="nav-link" href="#">Home </a>
                </li>


                <li className="nav-item  ">
                    <a className="nav-link" href="#">ABOUT US</a>
                    <div className="submenu">
                        <ul >
                            <li ><a href="about.html">About Organisation</a></li>
                        </ul>
                    </div>
                </li>

                <li className=" nav-item ">
                    <a className="nav-link" href="Solutions.html">Solutions</a>
                    <div className="submenu">
                        <ul >
                            <li><a href="Elastomer Shaft Seals.html">Elastomer Shaft Seals</a></li>
                            <li><a href="Split Seals.html">Split Seals</a></li>
                            <li><a href="Solid Oil Seals.html">Solid Oil Seals</a></li>
                            <li><a href="General Sealing Products.html">General Sealing Products</a></li>
                            <li><a href="Trunnion Shaft Bushings and Cutless Rubber Bearing Bushes.html">Trunnion Shaft Bushings and Cutless Rubber Bearing Bushes</a></li>
                            <li><a href="In House Facility.html">In House Facility</a></li>
                        </ul>
                    </div>
                </li>


                <li className=" nav-item ">
                    <a className="nav-link" href="Gallery.html">Gallery</a>
                    <div className="submenu">
                        <ul >

                            <li><a href="Gallery.html">Our Gallery</a></li>
                        </ul>
                    </div>
                </li>


                <li><a className="nav-link" href="contact.html">Contact Us</a></li>


            </ul>

        </nav >




    </>);
}



export default NavBar