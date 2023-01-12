import { useNavigate } from "react-router-dom";
import { AccountCard, Button, Footer, Navbar } from "../../components";
import "./Home.css";

const Home = () => {
  const navigator = useNavigate();

  const moveToUpload = () => {
    navigator("/upload");
  };

  return (
    <>
      <Navbar />
      <header className="header">
        <h1>Upload and share your images</h1>
        <p>
          Drag and drop anywhere you want and start uploading your images now.
          32 MB limit. Direct image links, BBCode and HTML thumbnails.
        </p>
        <div className="bigBtn" onClick={moveToUpload}>
          <Button size="big" type="primary" text="start uploading" />
        </div>
        <div className="smallBtn">
          <Button size="md" type="primary" text="start uploading" />
        </div>
      </header>

      <section className="accountSection">
        <h1>ImgBB Pro account</h1>
        <p>
          ImgBB is a free image hosting service. Upgrade to unlock all the
          features.
        </p>

        <div className="accountSectionCards">
          <AccountCard
            year="3 year pro"
            fprice="3.99"
            sprice="143.64"
            color="danger"
            offer="69% OFF"
          />
          <AccountCard
            year="annual plan"
            fprice="7.99"
            sprice="95.88"
            color="primary"
            offer="38% 0FF"
          />
          <AccountCard year="monthly plan" fprice="12.99" color="secondary" />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
