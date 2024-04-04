import { Link } from "react-router-dom";
import { ProductProps } from "../../types";
const ProductList = (item: ProductProps) => {
  return (
    <Link to={`/singlepage/${item.id}`}>
      <div className="mx-auto max-w-lg rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8">
        <div className="flex items-center gap-4">
          <p className="font-medium sm:text-lg text-emerald-600">
            {item.title}
          </p>
        </div>

        <p className="mt-4 text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore?
        </p>
      </div>
    </Link>
  );
};

export default ProductList;
