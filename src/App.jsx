import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Frontpage from "pages/frontpage/frontpage";
import Launch from "pages/launch/launch";
import LifeOnMars from "pages/lifeonmars/lifeonmars";
import Timeline from "pages/timeline/timeline";
import NotFound from "pages/not-found/not-found";
import Header from "components/header/header";
import Footer from "components/footer/footer";

import "./App.scss";

const renderTarget = document.querySelector("#render");

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" index element={<Frontpage />} />
            <Route path="launch" element={<Launch />} />
            <Route path="lifeonmars" element={<LifeOnMars />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
};

const root = createRoot(renderTarget);
root.render(<App />);
