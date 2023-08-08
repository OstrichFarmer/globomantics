import { useEffect } from 'react';
import './main-page.css';
import Header from './header';

function App() {
useEffect(()=>{
  const fetchHouse = async () => {
    const rsp =await fetch("./houses.json");
    const houses = await rsp.json;
  };fetchHouse();
})
  return (
    <div className="Container">
      <Header subtitle="Providing houses all over the world"/>
    </div>
  );
}

export default App;
