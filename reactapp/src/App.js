import "./App.css";
import Navbar from "./components/Navbar";
import User from "./components/User";

function App() {
  return (
    <div className="container">
      <Navbar title="User App" />
      <hr />
      <User name="Yakup Çiftçi" department="Bilişim" salary="5500" />
      <User name="İsmail Çiftçi" department="Bilişim" salary="11000" />
    </div>
  );
}

export default App;
