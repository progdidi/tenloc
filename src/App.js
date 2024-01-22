import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutPage from "./pages/aboutPage/AboutPage";
import CityPage from "./pages/cityPage/CityPage";
import ExcursionPage from "./pages/excursionPage/ExcursionPage";
import MainPage from "./pages/mainPage/MainPage";
import ThanksPage from "./pages/thanksPage/ThanksPage";



function App() {
  return (
    <div className="App">
      <Header></Header>
      {/* <MainPage></MainPage> */}
      {/* <CityPage></CityPage> */}
      {/* <ExcursionPage></ExcursionPage> */}
      {/* <ThanksPage></ThanksPage> */}
      <AboutPage></AboutPage>
      <Footer></Footer>
    </div>
  );
}

export default App;
