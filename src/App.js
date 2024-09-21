import React from 'react';
import "./App.css";
import Navigation from "./Components/Navigation/navigation";
import Header from "./Components/Header/header";
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/footer";
import ErrorBoundary from "./Components/Error_boundaries/Error_boundaries";

function App() {
  return (
    <div className="App">
      <React.StrictMode>
        <ErrorBoundary>
        <Navigation />
        </ErrorBoundary>
      </React.StrictMode>
      <Header />
      <div className="Main">
      <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
