import styles from "../styles/Home.module.css";
import Topnav from "./Components/Topnav";
import Landing from "./Components/Landing";
import Record from "./Components/Record";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import axios from "axios";

import { useEffect, useState } from "react";


export default function Home() {
 
  var response;
  const [sent,dataSent] = useState(false);

 


  

  const [getQuery, setQuery] = useState([])
  const pull_data =(dat)=>{
    setQuery(dat)
    console.log(dat)
  }

  // getQuery.forEach((query)=>{
  //   console.log(query.attributes.name)
  // })
  return (
    <div className="font-Roboto">
      <Topnav />
      <Landing />
      <Record func={pull_data}/>
      <Cards results={getQuery}/>
      <Footer />
    </div>
  );
}