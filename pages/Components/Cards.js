import { React, useState } from "react";
import Data from "./Data";

function Cards({ results }) {
  const [data, moreData] = useState(false);
  const [fullData, getFullData] = useState([]);
  const pull_data = (dat) => {
    moreData(dat);
    console.log(dat);
  };

//   console.log(fullData)

//   console.log(results);
  return (
    <div className="mb-2 relative">
      <div className=" container  md:grid-cols-2 lg:grid-cols-6 gap-16 max-w-screen-lg mt-8 py-12">
        {results.map((item, index) => (

<div className=' flex flex-col rounded-md shadow-2xl' key={index}>
          <div className=' p-6 flex flex-col items-center'>
          <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.Image} alt=""/> 
          
              <h3 className=' mt-6 mb-2 text-xl'>{item.Name}</h3>
              <h3 className=' mt-6 mb-2 text-xl'>{item.Status}</h3>
              <h3 className=' mt-1 mb-2 text-xl'>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                {item.Certificate}
                </span>
              </h3>
              <hr className=' w-2/5 border-b border-blue-600'></hr>
              
              <div className=' flex p-6'>
                        <div className="p-4 max-w-md   ">
                                <div className="flex justify-between items-center mb-4">
                                        <h5 className="text-xl font-bold leading-none text-gray-900 ">Address</h5>
                                </div>

                               

                                <div className="flow-root">
                                <p className="text-md text-gray-500 truncate dark:text-gray-400">
                                {item.Address}
                                        </p>
                                       
                                </div>
                                 
                        </div>

                     
              </div>

                            <div className=' flex p-6'>
                                        <div className="p-4 max-w-md  ">
                                                <div className="flex justify-between items-center mb-4">
                                                        <h5 className="text-xl font-bold leading-none text-gray-900 ">Note</h5>
                                                </div>

                                                <div className="flow-root">
                                                <p className="text-md text-gray-500 truncate dark:text-gray-400">
                                                {item.Note}
                                                        </p>
                                                    
                                                </div>

                                                
                                        </div>

                                    
                            </div>
              
          </div>
      </div>

          
        ))}
      
      </div>
   
      <Data open={data} func={pull_data} info={fullData}/>
    </div>
  );
}

export default Cards;