import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate()


  function handleSubmit(){
    navigate(`/search/${query}`)
  }
  return (
    <div className="home">
      <img
        className="logo"
        src="https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg"
      />
      <form onSubmit={handleSubmit}>
      <input onChange={(e) => setQuery(e.target.value)}
        className="search-box"
        type="text"
        placeholder="Search google..."
      />
      </form>
    </div>
  );
};
