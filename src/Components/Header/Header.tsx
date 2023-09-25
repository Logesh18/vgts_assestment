import { memo, useState } from "react";
import { SearchOutlined, HomeFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import '../../App.css';
import './Header.css';
import { useDispatch} from "react-redux";
import { fetchData } from "../../Redux/Api/api";

function Header({
  searchBar, setQuery}:
  {searchBar?: boolean, setQuery?: any}
) {
    const navigate = useNavigate();
    const [previousQuery, setPreviousQuery] = useState<string>("");
    const dispatch: any = useDispatch();
    let url: any;
    const handleNavigation = () => {
        navigate('/home');
    };

    const Search = (event: any) => {
      if (event.key === 'Enter' && event.target.value !== previousQuery) {
        setPreviousQuery(event.target.value);
        setQuery(event.target.value);
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${event.target.value}`;
        dispatch(fetchData(url));
      }    
    };

    return (
      <>
          <div className="App HeaderContainer">
            <div className = "SearchContainer TitleContent">
                  <strong className = "Title TitleContent">Loki Meals</strong>
                  { 
                    searchBar &&
                      <span className = "SearchBarContainer">
                        <span className = "SearchIcon">
                          <SearchOutlined />
                        </span>
                        <input className = "SearchBar" type="text" placeholder="Search"
                            onKeyDown = {(event) => Search(event)}
                        />
                      </span> 
                  }
            </div>

            <div className = "HomeIconContainer TitleContent">
              <HomeFilled className = "HomeIcon" onClick = {handleNavigation}/>
            </div>
          </div>
      </>
    );
  }

export default memo(Header);