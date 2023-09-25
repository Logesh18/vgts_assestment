import "./Counter.css";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, intializeItem } from "../../Redux/Actions/purchaseCountAction";
import { Button } from "antd";
import { useEffect } from "react";
const Counter = () => {
  const state = useSelector((state: any) => state.counter);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(intializeItem());
  }, [dispatch]);
  return (
    <div className="App Cart">
      <p>Number of items in Cart: {state.items}</p>
      <div className="App ButtonContainer">
        <Button className = "Green"  size="large" 
          onClick={() => {
            dispatch(addItem());
          }}
        >
          +
        </Button>
        <Button className = "Red"  size="large" 
          disabled={state.items > 0 ? false : true}
          onClick={() => {
            dispatch(deleteItem());
          }}
        >
          -
        </Button>
      </div>
    </div>
  );
};

export default Counter;