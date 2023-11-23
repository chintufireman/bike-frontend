"use client";
import { useEffect, useState } from "react";
import styles from "./BikeCard.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
const BikeCard = ({ imageBlob }) => {
  const [imageUrl, setImageUrl] = useState([]);
  const router = useRouter();

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
    // if (imageBlob) {
    //   imageBlob.forEach((bikedata) => {
    //     convertBlobToDataURL(bikedata);
    //   });
    // }
  }, [imageBlob]);



  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.card}`}>
        <Image src={"/duke_390.jpg"} alt="me" width="350" height="200" />
        <div className={`${styles.title}`}>
          <b>Duke 390 2024 new gen</b>
        </div>
        <div className={`${styles.price}`}>
          <b>₹ 97,054</b> <span>Onwards</span>
        </div>
        <div className={`${styles.button}`}>
          <button onClick={() => {router.push("/bike-info")}}> More Details </button>
        </div>
      </div>
    </div>
  );
};

export default BikeCard;
