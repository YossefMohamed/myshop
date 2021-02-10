import React from "react";
import { useDispatch } from "react-redux";
import { addReviewToProduct } from "../actions/productAction";
import Message from "../message/message";
import BeautyStars from "beauty-stars";

function Review({ user, product, location }) {
  const dispatch = useDispatch();
  const [rating, setRating] = React.useState(5);

  const [message, setMessage] = React.useState({
    text: "",
    error: false,
  });
  const [postedBefore, setPostedBefore] = React.useState(false);
  const [placeHolder, setPlaceHolder] = React.useState("Add Your Review !!");

  React.useEffect(() => {
    setPlaceHolder("Add Your Review !!");
    setPostedBefore(false);
    product.reviews.map((e) => {
      if (e._id === user._id) {
        setPostedBefore(true);
        setReviewText("");
        setPlaceHolder("You Have Posted Your Review Thanks :) ");
      }
    });
    if (!!!user) {
      setPlaceHolder("Please Login To add A Review !!");
    }
  });
  const [reviewText, setReviewText] = React.useState("");
  return (
    <div>
      {/* {console.table({ postedBefore, placeHolder, reviewText, message })} */}
      {message.text && (
        <Message variant={`${message.error ? "danger" : "success"}`}>
          {message.text}
        </Message>
      )}

      <div>
        <form>
          <div class="form-group col-md-7 px-0 mt-5">
            <label>Add Your Review :</label>
            <textarea
              class="form-control"
              disabled={!!user && !postedBefore ? 0 : 1}
              placeholder={placeHolder}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
          </div>
          <div className="col my-4">
            <BeautyStars
              value={rating}
              onChange={(value) => setRating(value)}
              size="25px"
            />
          </div>
          <div class="form-group">
            <button
              class="btn btn-my-shop btn-sm"
              type="button"
              disabled={!!user && !postedBefore ? 0 : 1}
              onClick={(e) => {
                if (reviewText.trim()) {
                  e.preventDefault();
                  // console.table({
                  //   user: user.user,
                  //   product: product._id,
                  //   reviewText,
                  //   rating,
                  // });
                  dispatch(
                    addReviewToProduct(
                      user.user,
                      product._id,
                      reviewText,
                      rating
                    )
                  );
                  setReviewText("");
                  setMessage({
                    text: "Review Posted !!",
                    error: false,
                  });
                } else {
                  setMessage({
                    text: "The Review Is Empty !",
                    error: true,
                  });
                }
              }}
            >
              Submit Review
            </button>
          </div>
        </form>
      </div>

      {product.reviews.map((e, index) => (
        <div class="card card-inner my-2 col-12 col-md-7" key={e._id}>
          <div class="card-body">
            <div class="row">
              <div class="col-5 col-md-2 mx-auto my-auto my-md-0">
                <img
                  src={`http://localhost:5000/${e.user.img}`}
                  class="img img-rounded img-fluid"
                />
              </div>
              <div class="col-md-10 my-auto">
                <h4 className="my-4 my-md-0">{e.user.name}</h4>
                <p>{e.review}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Review;
