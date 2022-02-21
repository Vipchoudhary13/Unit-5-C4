import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link, useParams} from "react-router-dom";
import { getQueries } from "../redux/action";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const { queries } = useSelector((state) => ({
    queries: state.queryState.queries
  }));

  useEffect (() => {
    dispatch(getQueries())
  }, []);

  
  return <div>
     <div id="navbar">
     <img src="https://s.abcnews.com/images/Technology/ht_google_lb_150901_16x9_992.jpg" />
     <input className="search-box search1" onChange={() => {
       
     }} type="text" placeholder="Search google..." />
     <button onClick={() => {

     }}>Search</button>
     </div>
     <hr/>

     <div id="search-result">
       {queries.map((e) => {
         return <>
         <p>{e.url}</p>
         <div className="flex">
           <a href="#">{e.title}</a>
           <p>{e.author}</p>
         </div>
         <p>{e.description}</p>
         <h3>creation_date: {e.creation_date}</h3>
         <div className="flex">
           <h3>explicit: {e.explicit}</h3>
           <h3>quality %: {e.quality}</h3>
         </div> 
         <hr/>
         </>
       })}
     </div>
  </div>
}