import React from "react";
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import BrowserRouter and Routes
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/movie/:imdbId" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
