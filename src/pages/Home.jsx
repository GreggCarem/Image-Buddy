import Footer from "../components/footer/Footer.jsx";
import Header from "../components/header/Header.jsx";
//import Load from "./components/load/Load";
//import Tools from "./components/tools/Tools.jsx";
import ImageGallery from "../components/displayed/ImageGallery.jsx";

function Home() {
  return (
    <>
      <Header />

      <ImageGallery />

      <Footer />
    </>
  );
}

export { Home };
