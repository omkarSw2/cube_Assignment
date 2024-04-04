import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";
import { ProductProps } from "../../types";
import Loading from "../conponents/Loading";
import DisplayImage from "../conponents/DisplayImage";

const fetchData = async (id: string) => {
  try {
    const response = await axios.get(
      `https://winter-accurate-attempt.glitch.me/users?id=${id}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const SinglePage = () => {
  const { id } = useParams<{ id: string }>();
  const [userData, setUserData] = useState<ProductProps | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (id)
      fetchData(id).then((res) => {
        // console.log(res[0]);
        setUserData(res[0]);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mt-8">
      <div>
        <div className="text-start space-y-2 space-x-4 bg-green-100 rounded-xl m-5 text-2xl">
          <h1>Title :{userData?.title} </h1>
          <h1>Company Name:{userData?.company_Name} </h1>
          <h3>Price:{userData?.price}</h3>
          <h3>prescription:{userData?.prescription}</h3>
          <h3>Price:{userData?.set_Of}</h3>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <DisplayImage />
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
