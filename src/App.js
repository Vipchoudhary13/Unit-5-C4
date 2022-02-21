import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Result } from "./components/Result";
import { SearchPage } from "./components/SearchPage";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}></Route>  
        <Route path="/search/:query" element={<SearchPage/>}></Route>
        <Route path="/search/:result" element={<Result/>}></Route>
      </Routes>
    </div>
  );
}
