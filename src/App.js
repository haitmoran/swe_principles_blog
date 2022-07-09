import "./App.css";
import Header from "./containers/header/Header";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <div className="top">
        <NavBar />
        <Header />
      </div>
    </div>
  );
}

export default App;
