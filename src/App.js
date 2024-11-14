import Gifts from "./components/gifts/Gifts";
import Head from "./components/head/Head";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <div className="page">
        <Header />

        <main>
          <Head />
          <Gifts />
        </main>
      </div>
    </div>
  );
}

export default App;
