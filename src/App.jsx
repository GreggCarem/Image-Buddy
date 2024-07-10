import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
//import Load from "./components/load/Load";
import Tools from "./components/tools/Tools.jsx";
import Displayed from "./components/displayed/Displayed";
//import { useDispatch, useSelecto, Provider } from "react-redux";

function App() {
  console.log("key", import.meta.env.VITE_KEY);
  return (
    <>
      <Header />
      <Tools />
      <Displayed />

      <Footer />
    </>
  );
}

export default App;
