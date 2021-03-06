import { React, useState, useEffect } from "react";
import MeiliSearch from "meilisearch";
import axios from "axios";

function Record(props) {

  useEffect(() => {
    handlesearch()
  },[])

  const [initialValue, setInitialValue] = useState("");
  
  const client = new MeiliSearch({
    host: "http://meilisearch:7700/",
    apiKey: "",
  });
  
  const index = client.index("food-and-drink");

  

  const handlesearch = async () => {
    const search = await index.search(initialValue);
    console.log(search);
    console.log(search.hits);
    props.func(search.hits)
  };

  
  return (
    <div>
      <section className=" bg-gray-100 py-20 mt-20 lg:mt-60" id="Search">
        <div className="sm:w-3/4 lg:w-5/12 mx-auto">
          <h2 className=" text-3xl text-blue-600 text-center font-bold">
            Cari Makanan dan Minuman Halal Yuk...
          </h2>
          <p className=" text-gray-600 text-center mt-4">
            Masukkan nama makanan atau restoran
          </p>
          <div className=" flex flex-col sm:flex-row gap-6 mt-8">
            <input
              type="text"
              placeholder="Enter here"
              className=" focus:outline-none flex-1 px-2 py-3 rounded-md text-black border-2 border-blue-600"
              value={initialValue}
              onChange={(e) => {
                setInitialValue(e.target.value);
                handlesearch();
              }}
            ></input>
            <button className=" btn flex-1 border-2 hover:bg-white hover:text-blue-600 hover:border-blue-600 hover:border-2">
              Cari
            </button>
            {/* grid collection */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Record;