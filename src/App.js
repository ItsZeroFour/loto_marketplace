import React, { useEffect, useRef, useState } from "react";
import BestLoto from "./components/best_loto/BestLoto";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import Gifts from "./components/gifts/Gifts";
import Head from "./components/head/Head";
import Header from "./components/header/Header";
import News from "./components/news/News";
import Winners from "./components/winners/Winners";
import axios from "./utils/axios";
import { useSearchParams } from "react-router-dom";
import Banner from "./components/banner/Banner";

function App() {
  const myRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState(null);

  const [searchParams] = useSearchParams();

  const [externalId, setExternalId] = useState("");
  const [utmCampaign, setUtmCampaign] = useState("");
  const [gbid, setGbid] = useState("");
  const [utmCreative, setUtmCreative] = useState("");
  const [utmTerm, setUtmTerm] = useState("");
  const [utmSource, setUtmSource] = useState("");

  const [os, setOs] = useState("");

  useEffect(() => {
    function setUtmToLocalstorage() {
      localStorage.setItem("external_id", searchParams.get("external_id"));
      localStorage.setItem("utm_campaign", searchParams.get("utm_campaign"));
      localStorage.setItem("gbid", searchParams.get("gbid"));
      localStorage.setItem("utm_creative", searchParams.get("utm_creative"));
      localStorage.setItem("utm_term", searchParams.get("utm_term"));
      localStorage.setItem("utm_source", searchParams.get("utm_source"));
    }

    if (
      searchParams.get("external_id") &&
      searchParams.get("utm_campaign") &&
      searchParams.get("gbid") &&
      searchParams.get("utm_creative") &&
      searchParams.get("utm_term") &&
      searchParams.get("utm_source")
    ) {
      console.log(123);

      setUtmToLocalstorage();
    }

    setExternalId(
      searchParams.get("external_id") !== null
        ? searchParams.get("external_id")
        : localStorage.getItem("external_id")
    );
    setUtmCampaign(
      searchParams.get("utm_campaign") !== null
        ? searchParams.get("utm_campaign")
        : localStorage.getItem("utm_campaign")
    );
    setGbid(
      searchParams.get("gbid") !== null
        ? searchParams.get("gbid")
        : localStorage.getItem("gbid")
    );
    setUtmCreative(
      searchParams.get("utm_creative") !== null
        ? searchParams.get("utm_creative")
        : localStorage.getItem("utm_creative")
    );
    setUtmTerm(
      searchParams.get("utm_term") !== null
        ? searchParams.get("utm_term")
        : localStorage.getItem("utm_term")
    );
    setUtmSource(
      searchParams.get("utm_source") !== null
        ? searchParams.get("utm_source")
        : localStorage.getItem("utm_source")
    );
  }, [searchParams]);

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

  const getData = async () => {
    try {
      const { data } = await axios.get("/api/marketplejs1?populate=*");

      setData(data.data.attributes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const checkOs = (agent) => {
      if (agent.indexOf("Android") > 0) {
        setOs("Android");
      }
    };

    checkOs(navigator.userAgent);
  }, []);

  console.log(navigator.userAgent.indexOf("Android"));

  return (
    <div className="App">
      {os === "Android" && <Banner />}

      <div className="page">
        {!data ? (
          <div class="preloader">
            <div class="circle circle_green"></div>
            <div class="circle circle_red"></div>
          </div>
        ) : (
          <React.Fragment>
            <Header />

            <main>
              <Head scrollToElement={scrollToElement} />
              <Gifts />
              <BestLoto
                externalId={externalId}
                utmCampaign={utmCampaign}
                gbid={gbid}
                utmCreative={utmCreative}
                utmTerm={utmTerm}
                utmSource={utmSource}
                myRef={myRef}
                item1_list1_text={data.item1_list1_text}
                item1_list1_title={data.item1_list1_title}
                item1_list2_text={data.item1_list2_text}
                item1_list2_title={data.item1_list2_title}
                item1_list3_text={data.item1_list3_text}
                item1_list3_title={data.item1_list3_title}
                item1_list4_text={data.item1_list4_text}
                item1_list4_title={data.item1_list4_title}
                // 2
                item2_list1_text={data.item2_list1_text}
                item2_list1_title={data.item2_list1_title}
                item2_list2_text={data.item2_list2_text}
                item2_list2_title={data.item2_list2_title}
                item2_list3_text={data.item2_list3_text}
                item2_list3_title={data.item2_list3_title}
                item2_list4_text={data.item2_list4_text}
                item2_list4_title={data.item2_list4_title}
                // 3
                item3_list1_text={data.item3_list1_text}
                item3_list1_title={data.item3_list1_title}
                item3_list2_text={data.item3_list2_text}
                item3_list2_title={data.item3_list2_title}
                item3_list3_text={data.item3_list3_text}
                item3_list3_title={data.item3_list3_title}
                item3_list4_text={data.item3_list4_text}
                item3_list4_title={data.item3_list4_title}
                // 4
                item4_list1_text={data.item4_list1_text}
                item4_list1_title={data.item4_list1_title}
                item4_list2_text={data.item4_list2_text}
                item4_list2_title={data.item4_list2_title}
                item4_list3_text={data.item4_list3_text}
                item4_list3_title={data.item4_list3_title}
                item4_list4_text={data.item4_list4_text}
                item4_list4_title={data.item4_list4_title}
                // 5
                item5_list1_text={data.item5_list1_text}
                item5_list1_title={data.item5_list1_title}
                item5_list2_text={data.item5_list2_text}
                item5_list2_title={data.item5_list2_title}
                item5_list3_text={data.item5_list3_text}
                item5_list3_title={data.item5_list3_title}
                item5_list4_text={data.item5_list4_text}
                item5_list4_title={data.item5_list4_title}
                // 6
                item6_list1_text={data.item6_list1_text}
                item6_list1_title={data.item6_list1_title}
                item6_list2_text={data.item6_list2_text}
                item6_list2_title={data.item6_list2_title}
                item6_list3_text={data.item6_list3_text}
                item6_list3_title={data.item6_list3_title}
                item6_list4_text={data.item6_list4_text}
                item6_list4_title={data.item6_list4_title}
                // logo
                item1_logo={data.item1_logo.data.attributes.url}
                item2_logo={data.item2_logo.data.attributes.url}
                item3_logo={data.item3_logo.data.attributes.url}
                item4_logo={data.item4_logo.data.attributes.url}
                item5_logo={data.item5_logo.data.attributes.url}
                item6_logo={data.item6_logo.data.attributes.url}
                // titles
                item1_title={data.item1_title}
                item2_title={data.item2_title}
                item3_title={data.item3_title}
                item4_title={data.item4_title}
                item5_title={data.item5_title}
                item6_title={data.item6_title}
                // links
                item1_button_link={data.item1_button_link}
                item2_button_link={data.item2_button_link}
                item3_button_link={data.item3_button_link}
                item4_button_link={data.item4_button_link}
                item5_button_link={data.item5_button_link}
                item6_button_link={data.item6_button_link}
              />
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
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default App;
