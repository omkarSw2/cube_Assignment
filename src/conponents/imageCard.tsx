import { Imageprops } from "../../types";

const ImageCard = (props: Imageprops) => {
  // console.log("props", props);
  return (
    <div className="w-56 h-64  ">
      <img
        src={props.src.medium}
        alt={props.alt}
        className="w-56 h-64 rounded-xl"
      />
    </div>
  );
};

export default ImageCard;
