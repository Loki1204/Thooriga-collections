import React, { useState, useRef, useEffect } from "react";
import "./productGallery.css";
import * as api from "../../adapters/index";

const ProductGallery = (props) => {
  const [product, setProduct] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [err, setErr] = useState(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        setIsLoaded(false);
        const res = await api.getProductDetails(props.id);
        setProduct(res.data.data);
        setIsLoaded(true);
      } catch (error) {
        console.log(error.response);
        setErr(error.response);
        setIsLoaded(true);
      }
    };
    getProductDetails(props.id);
  }, [props.id]);

  const imageItemRef = useRef();
  const imgShowRef = useRef();
  const [imageId, setImageId] = useState(1);

  const handleClick = (imgId) => {
    imageItemRef.current.id = imgId;
    let numberedRefId = parseInt(imageItemRef.current.id);
    setImageId(numberedRefId);
    slideImage();
  };

  const slideImage = () => {
    const displayWidth = imgShowRef.current.firstChild.clientWidth;
    imgShowRef.current.style.transform = `translateX(${
      -(imageId - 1) * displayWidth
    }px)`;
  };

  if (err) {
    return <div>Something went wrong... Please Reload </div>;
  } else if (!isLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <div className="product__gallery">
        <div className="img__display">
          <div className="img__showcase" ref={imgShowRef}>
            {product.imagesArray.map((imagesData) => (
              <img src={imagesData.image} alt="saree" key={imagesData.id} />
            ))}
          </div>
        </div>
        <div className="img__select">
          {product.imagesArray.map((imagesData) => (
            <div
              className="img__item"
              key={imagesData.id}
              ref={imageItemRef}
              onClick={() => handleClick(imagesData.id)}
            >
              <img src={imagesData.image} alt="saree" />
            </div>
          ))}
        </div>
      </div>
    );
  }
};

export default ProductGallery;
