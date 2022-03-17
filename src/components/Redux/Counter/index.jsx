import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementWithCheckingAction, increment } from "../../../app/features/Counter/actions";
import "./index.css";

const imgProduct = "https://source.unsplash.com/collection/190727/400x300";

const Counter = () => {
  let {count} = useSelector(state => state.counter);
  const dispatch = useDispatch();


  return (
    <div className="container" style={{ marginTop: 80 }}>
      <div className="card-con">
        <img className="img-pro" src={imgProduct} alt="img" />
        <div className="card-body">
          <h1 className="heading">Tittle Card</h1>
          <p className="price">$19.99</p>
          <p className="description">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            ducimus est animi incidunt similique quia ipsa.
          </p>
        </div>

        <div className="counter-con">
          <button className="btn-counter" onClick={() => dispatch(decrementWithCheckingAction(1))}>-</button>
          <p className="qty">{count}</p>
          <button className="btn-counter" onClick={() => dispatch(increment(1))}>+</button>
        </div>

      </div>
    </div>
  );
};

export default Counter;
