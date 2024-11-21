import { useEffect, useRef, useState } from "react";
import BestLoto from "./components/best_loto/BestLoto";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Gifts from "./components/gifts/Gifts";
import Head from "./components/head/Head";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Winners from "./components/winners/Winners";

function App() {
  const myRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const scrollToElement = () => {
    if (myRef.current) {
      myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  return (
    <div className="App">
      <div className="page">
        <Header />

        <main>
          <Head scrollToElement={scrollToElement} />
          <Gifts />
          <BestLoto myRef={myRef} />
          <Winners />
          <Faq />
          <News scrollToElement={scrollToElement} />
        </main>

        <Footer />

        {isVisible && (
          <div className="banner">
            <p>
              Мы используем cookie для улучшения работы сайта. Нажмите
              "Принять", если согласны.
            </p>
            <button onClick={handleAccept}>Принять</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
