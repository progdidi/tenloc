import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import CityPage from "./pages/cityPage/CityPage";
import MainPage from "./pages/mainPage/MainPage";



function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <MainPage></MainPage> */}
      <CityPage></CityPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
