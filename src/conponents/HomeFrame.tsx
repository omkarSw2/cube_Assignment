import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import ProductList from "./ProductList";
import { ProductProps } from "../../types";

const fetchData = async (page) => {
  const response = await axios.get(
    `https://winter-accurate-attempt.glitch.me/users?_page=${page}`
  );
  return response.data;
};

const HomeFrame = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData().then((res) => setData([...data, ...res]));
  }, [page]);
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-2 ">
        <div className="flex flex-col space-y-4 max-h-screen overflow-y-auto pb-32">
          {data.length > 0 &&
            data.map((item: ProductProps, ind: number) => (
              <ProductList key={ind} {...item} />
            ))}
          <div className="flex justify-center pt-10">
            {data.length !== 0 && (
              <button
                onClick={() => {
                  setPage((prev) => prev + 1);
                }}
                className="inline-block w-3/4  rounded-lg bg-indigo-500 px-5 py-3 text-center text-sm font-semibold text-white ">
                Load More...
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeFrame;
