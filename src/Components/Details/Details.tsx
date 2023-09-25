import './Details.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { fetchData } from '../../Redux/Api/api';
import { useParams } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Header from '../Header/Header';
import NoImage from '../../assets/icon-no-image.jpg';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { checkoutMeal } from '../../Redux/Actions/checkoutAction';
import NoVideo from '../../assets/no-video.jpg';

const Details = () => {
  const {id} = useParams<string>();
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const {data, loading} = useSelector((state: any) => state.detail);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  
  useEffect(() => {
    dispatch(fetchData(url, 'id'));

  }, [dispatch, url]);

  const checkOut = () => {
    dispatch(checkoutMeal(data));
    navigate('/checkout');
  };
  return (
    <>
      <Header searchBar = {false}/>
      {
        loading ? <Loader /> :
          <div className="MealsDetailContainer">
            <div className="MealsImageContainer">
              <img className = "MealsImageTag" 
                src={ data[0]?.strMealThumb ? data[0].strMealThumb : NoImage} 
                alt={ data[0]?.strMeal } 
              />
            </div>
            <div className="MealsContentContainer">
              <div className="TitleContainer">
                <span className="MealsTitleTag">
                  { data[0]?.strMeal } 
                </span>
                <span className="MealsAreaTag">
                  ({ data[0]?.strArea })
                </span>
              </div>
              <div className="FontStyle DescriptionContainer">
                <span className="MealsTitleTag">Category:</span> 
                <div>{ data[0]?.strCategory }</div>
              </div>
              <div className="FontStyle DescriptionContainer">
                <span className="MealsTitleTag">Description:</span> 
                <div>{ data[0]?.strInstructions }</div>
              </div>

              <div className="FontStyle DescriptionContainer">
                <span className="MealsTitleTag">Ingredients:</span> 
                <ol className = "ListStyle">
                  {
                    data[0]?.ingredients?.map((each: any) => {
                      return (
                        <li key = {each[0]+id}>
                          {each[0]} - {each[1]}
                        </li>
                      )
                    })
                  }
                </ol>
              </div>
            </div>
            <div className="MealsImageContainer">
              {
                  data[0]?.strYoutube ? <iframe 
                      title = "MealsVideo"
                      className = "MealsImageTag" 
                      src={data[0]?.strYoutube?.replace('watch?v=', "/embed/")}
                  ></iframe> :
                  <img className = "MealsImage" 
                      src={ NoVideo}
                      alt = "No Video Available"
                  />
              } 
                  
            </div>
            <div className="MealsImageContainer DescriptionContainer">
                  <span className="MealsTitleTag TitleContainer">Price:</span> 
                  <div className="Price TitleContainer">&#8377; { data[0]?.price }</div>
              </div>
            <div className="MealsImageContainer">
              <Button className = "CheckoutButton" type="primary" size="large" onClick = {checkOut}>
                Checkout
              </Button>
            </div>
          </div>
      }
    </>
  );
}


export default Details;