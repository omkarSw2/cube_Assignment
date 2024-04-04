import loading from "../images/loader-icon.png";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <img className="h-8" src={loading} alt="Loading" />
        <h1 className="text-3xl mt-4">Loading...</h1>
      </div>
    </div>
  );
};

export default Loading;
