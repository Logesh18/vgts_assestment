import { useNavigate } from "react-router-dom";
import './MealsCard.css';
import '../../App.css'
import NoImage from '../../assets/icon-no-image.jpg';

function MealsCard(props: any) {
  const navigate = useNavigate();
  const handleNavigation = (id: number) => {
      navigate(`/detail/${id}`);
  };

  return (
    <>
        <div className="App CardLayout" onClick = {() => handleNavigation(props.meal.idMeal)}>

            <img className = "MealsImage" 
              src={ props.meal?.strMealThumb ? props.meal.strMealThumb : NoImage} 
              alt={props.meal.strMeal} 
            />
            <div className = "DetailContainer">
              <div className = "App MealsTitleContainer" >
                <span className = "MealsTitle">{props.meal.strMeal}</span>
                <span className = "MealsArea">({props.meal.strArea})</span>
              </div>
              <div className = "MealsDescription">{props.meal.strInstructions}</div>
            </div>
        </div>
    </>
  );
}

export default MealsCard;