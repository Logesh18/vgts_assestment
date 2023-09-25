import './Home.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react';
import { fetchData } from '../../Redux/Api/api';
import Header from '../Header/Header';
import MealsCard from '../MealsCard/MealsCard';
import Loader from '../Loader/Loader';

const Home = () => {
  const dispatch: any = useDispatch();
  const {data, loading} = useSelector((state: any) => state.detail);
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=chicken`;
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
      if(!query.trim().length) {
        dispatch(fetchData(url));
      }
  }, [dispatch, query, url]);

  return (
      <>
          <Header searchBar = {true} setQuery = {setQuery}/>
          {
            loading ? <Loader /> : 
            <div className = "App MealsCardContainer">
              {
                data.length ? data.map((meal:any)=>{
                  return (
                    <MealsCard key = {meal.idMeal} meal = {meal}/>
                  )
                }) : <p>No Results Found</p>
              }
            </div>
          }
      </>
  );
}

export default Home;