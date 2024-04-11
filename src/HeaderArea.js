
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faStamp, faDownload } from '@fortawesome/free-solid-svg-icons';



function HeaderArea() {
    return (<div className="container-fluid  p-4 bginfo">
        <div className="row mt-5">

            <div className="col-md-4 ml-5">
                <a href="index-2.html">

                    <img src="https://i.imghippo.com/files/a9Dq01711886902.png" style={{ width: 300, height: 100 }} alt="Awesome Logo" />
                </a>
            </div>

            <FontAwesomeIcon className="mt-3 icon" icon={faStamp} />
            <div className="col-md">

                <h4>An ISO 9001:2015</h4>
                <span> Certified Company</span>
            </div>

            <FontAwesomeIcon className="mt-3 icon" icon={faTrophy} />
            <div classNameName="col-md">
                <h4>The Best Industrial</h4>
                <span>Solution Provider</span>
            </div>

            <div className="col-md ml-5">
                <a href="/path/to/GVPBrouchure.pdf" className="download-btn  mt-3 text-danger">
                    <FontAwesomeIcon className="downloadicon" icon={faDownload} />
                    Download
                </a>
            </div>
        </div>
    </div>)
}



export default HeaderArea;