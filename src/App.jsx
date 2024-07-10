import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
//import Load from "./components/load/Load";
//import Tools from "./components/tools/Tools.jsx";
s;
import ImageGallery from "./components/displayed/ImageGallery.jsx";

function App() {
  console.log("key", import.meta.env.VITE_KEY);
  return (
    <>
      <Header />

      <ImageGallery />

      <Footer />
    </>
  );
}

export default App;
