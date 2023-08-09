import {useState, useEffect, useMemo} from 'react';
import './main-page.css';
import Header from './header';

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
    <div className="Container">
      <Header subtitle="Providing houses all over the world"/>
    </div>
  );
}

export default App;
