import { useState } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";
import Page3 from "./Page3";

function App() {

  const [currentPage , setCurrentPage] = useState(1);
  const totalPages=3;

  const handlePrevClick = () => {
    if(currentPage > 1){
      setCurrentPage(currentPage -1);
    }
  }

const handleNextClick = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};


const renderPage= () => {
  switch (currentPage) {
    case 1:
      return <Page1 />;
    case 2:
      return <Page2 />;
    case 3:
      return <Page3 />;
    default:
      return null;
  }
}  

const array = [1,2,3];
  

  return (
    <div className="flex items-center justify-center h-screen flex-col bg-slate-500 w-full ">
      <div className=" pt-10 text-center bg-purple-100 w-[60%] h-[40%] rounded-lg mb-4">
        {
          currentPage  === 1 ? <Page1/> : renderPage(currentPage) 
        }
      </div>

      <div className="flex w-[60%] justify-around text-white">
        <button
          className=" bg-slate-900 px-2 py-1  rounded-md"
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        <ul className="flex px-4 py-1 justify-around ">
          {array.map((item,index) => (
            <li className={index+1===currentPage? 'bg-black px-2 rounded-md' : 'px-4'} key={index}>{item}
            </li>
          ))}
        </ul>

        <button
          className=" bg-slate-900 px-2 py-1  rounded-md"
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}










export default App;


