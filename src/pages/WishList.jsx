import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "../redux/slices/WishList";
import { addToCart } from "../redux/slices/CartSlice";

const WishList = () => {
  const { wishlist } = useSelector((state) => state.wishlistReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-center p-10 text-3xl font-bold">WishList</h1>
      <div className="grid grid-cols-3 m-5">
        {wishlist.map((eachProduct) => (
          <div className="max-w-sm bg-white text-center rounded-2xl overflow-hidden border border-slate-400 relative">
            {/* wishlist button*/}

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
            </div>
            <div className="flex gap-3 p-3">
              <button onClick={() => dispatch(removeFromWishlist(eachProduct.id))} className="p-3 bg-red-600 rounded-2xl text-white font-semibold">
                Remove from wishlist
              </button>
              <button onClick={()=>dispatch(addToCart(eachProduct))} className="p-3 bg-green-600 rounded-2xl text-white font-semibold">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
