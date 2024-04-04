import { useEffect, useState } from "react";
import ImageCard from "./imageCard";
import axios from "axios";
import { Imageprops } from "../../types";
import ImageCardSkeleton from "./ImageCardSkeleton";

const fetchData = async (num: number) => {
  //   console.log("nums", num, `${import.meta.env.VITE_PIXEL_HEDDER}`);
  try {
    const response = await axios.get(
      `https://api.pexels.com/v1/search?query=people&page=${num}&per_page=9`,
      {
        headers: {
          Authorization: `${import.meta.env.VITE_PIXEL_HEDDER}`,
        },
      }
    );
    // console.log("from fetch", response.data.photos);
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error; // Rethrow the error so that the caller can handle it appropriately
  }
};

const DisplayImage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState([]);
  const i = Array(9).fill(1);
  const [seconds, setSeconds] = useState(11);
  //   console.log("seconds", seconds);

  useEffect(() => {
    setIsLoading(true);
    const num = Math.floor(Math.random() * 9);
    fetchData(num)
      .then((res) => {
        setImages(res.photos);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds === 1) {
        setIsLoading(true);
        const num = Math.floor(Math.random() * 9);
        fetchData(num)
          .then((res) => {
            setImages(res.photos);
            setIsLoading(false);
            setSeconds(11);
          })
          .catch((error) => {
            console.error("Error fetching data:", error);
            setIsLoading(false);
          });
      }
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  if (isLoading) {
    return (
      <>
        {i?.map((_, ind: number) => (
          <ImageCardSkeleton key={ind} />
        ))}
      </>
    );
  }

  return (
    <>
      {images?.map((item: Imageprops, ind: number) => (
        <ImageCard key={ind} {...item} />
      ))}
    </>
  );
};

export default DisplayImage;
