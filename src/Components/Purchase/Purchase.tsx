import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import './Purchase.css';

const Purchase = () => {
  const {meal} = useSelector((state: any) => state.checkout);
  const navigate = useNavigate();
  useEffect(() => {
    if(!meal.length) {
      navigate('/home');
    }
  }, [navigate, meal]);
  return (
    <>
      <Header searchBar = {false}/>
      <div className="PurchaseContentContainer">
        <div className="PurchasedDetails">
            <div className="SuccessMsg">
                <span className='Tick'>&#10003;</span> Hi {meal[0]?.name?.trim()}. Your order, {meal[0]?.strMeal} has been successfully purchased.
            </div>

        </div>
      </div>
    </>
  );
}

export default Purchase;