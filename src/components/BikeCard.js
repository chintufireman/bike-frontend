"use client";
import { useEffect, useState } from "react";
import styles from "./BikeCard.module.css";
import Image from "next/image";
const BikeCard = ({ imageBlob }) => {
  const [imageUrl, setImageUrl] = useState([]);

  // Convert the image blob to a data URL
  const convertBlobToDataURL = (bike) => {
    const byteCharacters = atob(bike.Image.Data);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const newblob = new Blob([byteArray], { type: "image/jpeg" });
    console.log(newblob);
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl((prevImageUrls) => [...prevImageUrls, reader.result]);
    };
    reader.readAsDataURL(newblob);
    // console.log(reader);
  };

  useEffect(() => {
    if (imageBlob) {
      imageBlob.forEach((bikedata) => {
        convertBlobToDataURL(bikedata);
      });
    }
  }, [imageBlob]);

  return (
    <div className={`${styles.container}`}>
      {imageUrl.map((url, index) => (
        <div className={`${styles.card}`} key={index}>
          <Image src={url} alt={`Bike ${index + 1}`} width="350" height="200" />
          <div className={`${styles.title}`}>
            <b>Duke 390 2024 new gen</b>
          </div>
          <div className={`${styles.price}`}>
            <b>₹ 97,054</b> <span>Onwards</span>
          </div>
          <div className={`${styles.button}`}>
            <button> More Details </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BikeCard;
