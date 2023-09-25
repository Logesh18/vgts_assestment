import axios from "axios";
import {fetchDataRequest, fetchDataFailure, fetchDataSuccess} from "../Actions/detailsAction"

export const fetchData = (url, type) => {
    return (dispatch) => {
    dispatch(fetchDataRequest());
    const minPrice = 200;
    const maxPrice = 500;
    const options = {
        method: 'GET',
        url: url,
        headers: {
            accept: 'application/json',   
        }
    };
    axios.request(options)
        .then((response) => {
            response = response.data;
            let data;
            if (type === 'id') {
                data = response.meals;
                let ingredients = [];
                const totalCount = data.reduce((count, obj) => {
                    return count + Object.keys(obj).filter(key => key.startsWith('strIngredient')).length;
                }, 0);
                for(let i = 0; i < totalCount; i++) {
                    let name = Object.entries(data[0]).find(([k,v]) => k.startsWith('strIngredient'));
                    let measure = Object.entries(data[0]).find(([k,v]) => k.startsWith('strMeasure'));
                    if(name[1].trim().length && measure[1].trim().length) {
                        ingredients.push([name[1], measure[1]]);
                    }
                    delete data[0][name[0]];
                    delete data[0][measure[0]];
                }
                data[0].price = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
                data[0].ingredients = ingredients;
            } else {
                data = response.meals ? response.meals.length > 10 ? response.meals.slice(0,10) : response.meals : [];
            }
            dispatch(fetchDataSuccess(data));
        })
        .catch((error) => {
            dispatch(fetchDataFailure(error));
        });
    };
};