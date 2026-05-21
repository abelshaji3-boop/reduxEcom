import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinleProductData } from "../redux/slices/ProductSlice";
import { addToWishlist } from "../redux/slices/WishList";
import { addToCart } from "../redux/slices/CartSlice";

const SingleProduct = () => {
  let { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSinleProductData(id));
  }, [id]);

  const { single_product } = useSelector((state) => state.productReducer);
  console.log(single_product);
  let reviews = single_product.reviews;

  return (
    <section className="grid grid-cols-2 px-20 h-170 justify-center items-center">
      <div className="flex flex-col justify-center h-130 items-center gap-15">
        <img className="w-100" src={single_product?.thumbnail} alt="product Image" />
        <div>
          <button
            onClick={() => {
              dispatch(addToWishlist(single_product));
            }}
            className="bg-blue-600 text-white p-2 mr-25"
          >
            ADD TO WISHLIST
          </button>
          <button onClick={() => dispatch(addToCart(single_product))} className="bg-green-600 text-white p-2">
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="p-3 grid gap-3">
        <h1 className="text-5xl">{single_product?.title}</h1>
        <h2 className="text-4xl text-red-600">{single_product?.price}</h2>
        <h3 className="text-2xl font-semibold">{single_product?.brand}y</h3>
        <h3 className="text-2xl font-semibold">{single_product?.category}</h3>
        <p>
          <span className="text-2xl font-semibold">Description :</span> {single_product?.description}
        </p>
        <h3 className="text-2xl font-semibold">Client Reviews</h3>

        <div className="grid gap-4">
          {reviews?.map((eachReview) => (
            <div className="shadow-md shadow-black p-3">
              <h4>
                <span className="text-1xl font-semibold">{eachReview.reviewerName} :</span> {eachReview.comment}
              </h4>
              <h6>Rating : {eachReview.rating} ⭐️</h6>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
