import {useState, useEffect, useMemo} from 'react';
import './main-page.css';
import Header from './header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [allHouses, setAllHouses] = useState([]);
useEffect(()=>{
  const fetchHouse = async () => {
    const rsp =await fetch("./houses.json");
    const houses = await rsp.json;
    setAllHouses();
  };fetchHouse();
},[])

 const featuredHouse = useMemo(()=>{
  if(allHouses.length){
    const randomIndex = Math.floor(Math.random() * allHouses.length);
    return allHouses[randomIndex]
  }
}, [allHouses])

  return (
    <Router>
      <div className="Container">
      <Header subtitle="Providing houses all over the world"/>

      <Switch>
        <Route path='/'>

        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
