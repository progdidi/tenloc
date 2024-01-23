import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import AboutPage from "./pages/aboutPage/AboutPage";
import BlogArticlePage from "./pages/blogArticlePage/BlogArticlePage";
import BlogPage from "./pages/blogPage/BlogPage";
import CityPage from "./pages/cityPage/CityPage";
import ExcursionPage from "./pages/excursionPage/ExcursionPage";
import GuidePage from "./pages/guidePage/GuidePage";
import MainPage from "./pages/mainPage/MainPage";
import ProfilePage from "./pages/profilePage/ProfilePage";
import ThanksPage from "./pages/thanksPage/ThanksPage";


function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>

        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage/>} />
            <Route path="/city" element={<CityPage/>} />
            <Route path="/excursion" element={<ExcursionPage/>} />
            <Route path="/thanks" element={<ThanksPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/profile" element={<ProfilePage/>} />
            <Route path="/blog" element={<BlogPage/>} />
            <Route path="/article" element={<BlogArticlePage/>} />
            <Route path="/guide" element={<GuidePage/>} />

          </Routes>
        </main>
        
        <Footer></Footer>
      </div>
    </Router>
    
  );
}

export default App;
