import React, { useEffect } from "react";
import { FiHeart, FiArrowRight } from "react-icons/fi";
import { getProductData } from "../redux/slices/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductData());
  }, []);

  const { products, loading, error } = useSelector((state) => state.productReducer);
  console.log('Home state:', { products, loading, error });

  return (
    <>
      <div className="grid grid-cols-4 mt-5 gap-5">
        {loading ? (
          <div className="col-span-4 text-center text-xl text-slate-700">Loading products...</div>
        ) : error ? (
          <div className="col-span-4 text-center text-xl text-red-600">{error}</div>
        ) : products?.length > 0 ? (
          products.map((eachProduct) => (
            <div key={eachProduct.id} className="max-w-sm bg-white rounded-2xl overflow-hidden border border-slate-400 relative">
              {/* wishlist button*/}
              <button className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full text-slate-600 hover:text-red-500 hover:bg-white transition-colors shadow-sm">
                <FiHeart size={18} />
              </button>
              {/* product img */}
              <div className="relative aspect-square overflow-hidden bg-slate-50">
                <img src={eachProduct.thumbnail} alt="Wireless Headphones" className="w-full h-full object-cover" />
              </div>
              {/* product details */}
              <div className="p-5">
                {/* category and price */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-semibold text-blue-600">{eachProduct.category}</span>
                  <span className="text-lg font-bold text-slate-900">{eachProduct.price}</span>
                </div>
                {/* product title*/}
                <h3 className="text-xl font-bold text-slate-800 mb-2 truncate"> {eachProduct.title}</h3>
                {/* description */}
                <p className="text-sm text-slate-500 line-clamp-2 mb-5">{eachProduct.description}</p>

                {/* learn more button */}
                <Link to={`viewSingle/${eachProduct.id}`} className="w-full py-3 px-4 bg-slate-900 hover:bg-blue-600 text-white font-medium rounded-xl flex items-center justify-center gap-2 ">
                  <span>Learn More</span>
                  <FiArrowRight size={16} className="" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-4 text-center text-xl text-slate-700">No products available.</div>
        )}
      </div>
    </>
  );
};

export default Home;
