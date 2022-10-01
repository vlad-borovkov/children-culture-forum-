import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Header from "./components/header/Header";
import EventDetails from "./components/event-detail/EventDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="page">
        <Header />
        <EventDetails />
      </div>
    </BrowserRouter>
  );
}

export default App;
