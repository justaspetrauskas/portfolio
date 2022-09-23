import React from "react";
import style from "../../styles/imageContainer.module.css";

interface ImageWrapperProps {
  imageUrl: string;
}

const ImageWrapper = ({ imageUrl }: ImageWrapperProps) => {
  console.log(imageUrl);
  return (
    <div className={style["image-wrapper"]}>
      <img src={imageUrl} alt="profile" loading="lazy" />
    </div>
  );
};

export default ImageWrapper;
