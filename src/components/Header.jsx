import React from "react";
// Import the specific icons you need
import { FiShoppingBag, FiHeart, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const {cart} =useSelector((state)=>state.cartReducer)

  const {wishlist}= useSelector((state)=>state.wishlistReducer)
  return (
    <>
      {/* main container */}
      <div className="bg-blue-500 flex text-xl font-medium justify-between p-7 text-white items-center">
        {/* left side (Brand) */}
        <div className="flex items-center gap-2">
          <FiShoppingBag className="text-2xl" />
          <Link to={"/"}>E-kart</Link>
        </div>

        {/* right side */}
        <div className="flex gap-6 pe-4 items-center">
          <div className="flex items-center gap-2 ">
            <FiHeart className="text-xl" />
            <Link to={"/wishlist"}>Wishlist <span className="bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">{wishlist.length}</span></Link>
          </div>

          <div className="flex items-center gap-2 ">
            <FiShoppingCart className="text-xl" />
            <Link to={"/cart"}>Cart <span className="bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">{cart.length}</span></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
