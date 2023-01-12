import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navbar } from "../../components";
import "./Upload.css";

const Upload = () => {
  return (
    <>
      <Navbar />
      <section className="uploadSection">
        <div className="uploadIcon">
          <FontAwesomeIcon icon={faCloudArrowUp} />
        </div>
        <p className="uploadTitle">Select the images to upload</p>
        <p className="uploadText">
          You can also <span>browse from your device, take a picture</span> or{" "}
          <span>add image URLs.</span>
        </p>
        <p className="uploadInfo">jpg png bmp gif webp heic pdf 32mb</p>
      </section>
    </>
  );
};

export default Upload;
