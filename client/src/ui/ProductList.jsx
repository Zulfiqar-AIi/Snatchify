import { Link } from "react-router-dom";
import Container from "./Container";
import Title from "./Title";
import Pagination from "./Pagination";

const ProductList = () => {
  return (
    <Container>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <Title text="Top Selling Products" />
          <Link
            to={"/product"}
            className="font-medium relative group overflow-hidden"
          >
            View All Products
            <span className="absolute bottom-0 left-0 w-full block h-px bg-gray-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
          </Link>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-3" />
      </div>
      {/* Pagination */}
      <Pagination />
    </Container>
  );
};

export default ProductList;