import "./App.css";
import Header from "./components/header/Header";
import Table from "./components/table/Table";

function App() {
  return (
    <div className="app-container">
      <div className="container">
        <Header />
        <Table />
      </div>
    </div>
  );
}

export default App;
