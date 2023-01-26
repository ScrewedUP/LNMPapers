import React from "react";
import Form from "./components/Form";
import Navbar from "./components/Navbar.jsx";
import image from "./assets/left_png.png";
import LoadingContext from "./store/loading-context";

function App() {
  const subjectSubmitHandler = (data) => {
    console.log();
  };

  return (
    <div className='h-[calc(100vh-40px)]'>
      <Navbar />
      <div className='flex justify-evenly h-[calc(100vh-200px)] items-center'>
        <img src={image} alt='test' className='md:hidden' />
        <div className='flex flex-col justify-center items-center gap-y-6'>
          <div className='text-blue-gray-100 font-bold text-4xl my-5 text-center w-96 drop-shadow-4xl z-1000'>
            All exam resources at your fingertips
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
