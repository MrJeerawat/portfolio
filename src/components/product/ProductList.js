import "./ProductList.css";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import MoodIcon from '@material-ui/icons/Mood';
import { useEffect, useState } from "react";
import AccessibleIcon from '@material-ui/icons/Accessible';

const Productlist = () => {
  // const data = {case,casestoday}
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://static.easysunday.com/covid-19/getTodayCases.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="pl">
        <div className="pl-text">
          <h1 className="pl-title">Covid in Thailand</h1>
          <p className="pl-desc">
            COVID-19 cases in Thailand are updated every 10 minutes. to keep
            track of real-time status ({items.UpdateDate})
          </p>
        </div>
        <div className="pl-list">
          <div className="p">
          <p className="title">Cases</p>
            <p className='data'>{items.cases}</p>
            <PeopleAltOutlinedIcon style={{ fontSize: 60 }}/>
          </div>
          <div className="p">
          <p className="title">Today Cases</p>
            <p className='data'>{items.todayCases}</p>
            <PermIdentityIcon style={{ fontSize: 60 }}/>
          </div>
          <div className="p">
          <p className="title">Deaths</p>
            <p className='data'>{items.deaths}</p>
            <SentimentVeryDissatisfiedIcon style={{ fontSize: 60 }}/>
          </div>
          <div className="p">
          <p className="title">Today Deaths</p>
            <p className='data'>{items.todayDeaths}</p>
            <SentimentVeryDissatisfiedIcon style={{ fontSize: 60 }}/>
          </div>
          <div className="p">
          <p className="title">Recovered</p>
            <p className='data'>{items.recovered}</p>
            <MoodIcon style={{ fontSize: 60 }}/>
          </div>
          <div className="p">
          <p className="title">Today Recovered</p>
            <p className='data'>{items.todayRecovered}</p>
            <MoodIcon style={{ fontSize: 60 }}/>
          </div>
          <div className="p">
          <p className="title">Active</p>
            <p className='data'>{items.active}</p>
            <AccessibilityIcon style={{ fontSize: 60 }}/>
          </div>
          <div className="p">
          
            <p className="title">Critical</p>
            <p className='data'>{items.critical}</p>
            <AccessibleIcon style={{ fontSize: 60 }}/>
        
          </div>
        </div>
      </div>
    );
  }
};

export default Productlist;
