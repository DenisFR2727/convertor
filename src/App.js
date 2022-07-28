import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header";
import Rate from "./components/Rate/Rate";



function App() {
  return (
    <div className="App">
     <Header/>
  <div className="container">
    <main>
     <Rate />
     
    </main>
  </div>
    <div className="container" id="cookie_info">
      <div className="site-content">
        <div className="well">
          На нашем сайте мы используем cookie для сбора информации технического
          характера.
          <br />В частности, для персонифицированной работы сайта мы обрабатываем
          IP-адрес региона вашего местоположения.&nbsp;
          <a className="btn btn-primary btn-sm">OK</a>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default App;
