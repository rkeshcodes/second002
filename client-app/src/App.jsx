import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <>
    <ToastContainer />
      <Header />
      <Container />
      <Footer />
    </>
  );
}

export default App;
