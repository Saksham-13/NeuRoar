import React, { useState } from 'react';
import ProgressBar from 'react-progressbar';
import Avatar from '../public/avtaar.jpeg';
import Image from 'next/image';
import Image1 from "../public/image1.jpeg"
import Image2 from "../public/image2.jpeg"
import Image3 from "../public/image3.jpeg"
import Image4 from "../public/image4.jpeg"
import Image5 from "../public/image5.jpeg"
import Image6 from "../public/image6.jpeg"

const Profile = (points,expp) => {

  const [showImageOptions, setShowImageOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(Avatar);
  const images = [ Image1,Avatar, Image6, Image3, Image4, Image5, Image2];
  console.log("expp",expp);
  console.log("poinegqets",points);
  const handleImageChange = (image) => {
    setSelectedImage(image);
    setShowImageOptions(false);
  };

  return (
    <div className="flex gap-4 items-center font-mono text-white  mx-auto w-2/3 my-10">
      <div className="relative">
        <button
          className="absolute inset-0 bg-black bg-opacity-50  w-full h-full z-10"
          onClick={() => setShowImageOptions(true)}
          style={{ display: showImageOptions ? 'block' : 'none' }}
        />
        <div className="absolute top-full left-0 bg-white rounded-lg shadow-lg overflow-hidden w-40 z-20" style={{ display: showImageOptions ? 'block' : 'none' }}>
          {images.map((image) => (
            <Image
              key={image}
              src={image}
              alt={image}
              className="w-full h-8 object-cover cursor-pointer hover:bg-gray-200"
              onClick={() => handleImageChange(image)}
            />
          ))}
        </div>
        <Image
          className="w-20 h-20 rounded-full cursor-pointer"
          src={selectedImage}
          alt={selectedImage}
          onClick={() => setShowImageOptions(true)}
          width={200}
          height={200}
        />

      </div>
      <div className="w-full">
        <p className="font-bold text-xl">Username</p>
        
        <div className="flex items-center space-x-4">
          <p className="text-lg">Experience:</p>
          <div className="bg-gray-300 rounded-full h-2 flex-grow">
            <ProgressBar completed={points.expp} color={'#FBBF24'} textForPercentage={(pct) => `${Math.round(pct)}%`} />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <p className="text-lg">Points  &nbsp; :</p>
          <div className="bg-gray-300 rounded-full h-2 flex-grow">
            <ProgressBar completed={points.points%100} color={'#3B82F6'} textForPercentage={(pct) => `${Math.round(pct)}%`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;