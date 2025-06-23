import React, { useContext, useEffect, useState } from "react";
import { LogInContext } from "./Context";
import img1 from "./blogging-7308532_1920.png";
import img2 from "./vecteezy_content-creator-png-graphic-clipart-design_20047227.png";
import img3 from "./work-4997565_1920.png";

const Home = () => {
 
  const { currentuser } = useContext(LogInContext);
  const randomImg = [img1, img2, img3];
  const [images, setImages] = useState(null);

  useEffect(() => {
    const i = Math.floor(Math.random() * randomImg.length);
    setImages(randomImg[i]);
  }, []);

  const getMessage = () => {
    if (!currentuser) {
      return "PLEASE LOG IN";
    }
    if (currentuser.identity === "admin"){
      return `WELCOME ${currentuser.firstName.toUpperCase()}-Start writing content.`
    }
    else{
      return `WELCOME ${currentuser.firstName.toUpperCase()} - Start exploring blogs.`
    }  
  }

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 p-10 bg-gray-100 items-center">
      <div className="flex justify-center">
        <img
          src={images}
          alt="Vlog Editor"
          className="w-full max-w-md rounded-xl shadow-md"
        />
      </div>
      <div className="text-center md:text-left space-y-4">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800">
          {getMessage()}
        </h1>
        {currentuser && (
          <p className="text-lg text-gray-600">
            {currentuser.identity === "admin"
              ? "Ready to blog? Open the editor and begin sharing your thoughts"
              : "Enjoy browsing blogs created by our admins"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
