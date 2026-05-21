import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, reduceQuantityCart, removeCartItem, emptyCart } from "../redux/slices/CartSlice";


const Cart = () => {
  const dispatch = useDispatch();

  const { cart } = useSelector((state) => state.cartReducer);
  const[totalAmount,setTotalAmount]= useState(0)

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr)=> acc + curr['totalPrice'],0))
  }, [cart])

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-blue-600 text-4xl font-bold mb-10">User Cart Summary</h1>
      {/* main container */}
      {
        cart.length>0 ?
          <div className="grid grid-cols-[3fr_1fr] gap-8">
            {/* left side */}
            <div className="bg-white rounded-xl  border-slate-200  shadow-sm">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-100 text-slate-700 text-sm font-semibold  border border-slate-200">
                    <th className="p-4">#</th>
                    <th className="p-4">Name</th>
                    <th className="p-4">Image</th>
                    <th className="p-4">Quantity</th>
                    <th className="p-4">Price</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600 text-sm">
                  {cart?.map((eachCart, index) => (
                    <tr key={eachCart.id ?? index} className="">
                      <td className="p-4 font-medium">{index + 1}</td>
                      <td className="p-4 font-semibold text-slate-800">{eachCart.title}</td>
                      <td className="p-4">
                        <div className="w-12 h-12 rounded-lg bg-slate-100  border border-slate-200">
                          <img src={eachCart.thumbnail} alt={eachCart.title} className="w-full h-full object-cover" />
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex gap-3 text-3xl align-middle">
                          <button disabled={eachCart.quantity == 1} onClick={() => dispatch(reduceQuantityCart(eachCart.id))} className="p-2 border border-slate-200">-</button>
                          <input value={eachCart.quantity} className="w-10 text-center" type="text" readOnly />
                          <button onClick={() => dispatch(addToCart(eachCart))} className="p-2 border border-slate-200">+</button>
                        </div>
                      </td>
                      <td className="p-4 font-medium text-slate-900">${(eachCart.price * eachCart.quantity).toFixed(2)}</td>
                      <td className="p-4 text-center">
                        <button onClick={() => dispatch(removeCartItem(eachCart.id))} className="text-red-500 font-semibold">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button onClick={() => dispatch(emptyCart())} className="py-2 px-4 bg-red-500 text-white font-medium rounded-xl hover:bg-red-600">
                Empty Cart
              </button>
            </div>

            {/* right side  */}
            <div className="border border-slate-200 rounded-xl bg-white p-6 ">
              <h2 className="text-lg font-bold text-slate-800 mb-4 border-b pb-2">Order Summary</h2>

              <div className="flex justify-between items-center mb-3">
                <span className="text-slate-500 text-sm">Total Items:</span>
                <span className="font-semibold text-slate-800">{cart.reduce((total, item) => total + item.quantity, 0)}</span>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-slate-500 text-sm">Total Amount:</span>
                <span className="text-xl font-bold text-slate-900">${cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2)}</span>
              </div>

              <button className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl ">Proceed to Checkout</button>
            </div>
          </div> :
          <div className="text-center py-[5rem]">
            <h2 className="text-xl font-bold text-slate-800">Your cart is empty</h2>
            <p className="text-slate-500 mt-2">Looks like you haven't added anything to your cart yet</p>
            <Link to="/products" className="inline-block mt-4 py-2 px-6 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700">
              Continue Shopping
            </Link>
          </div>
        }
      </div>
  );
};

export default Cart;
