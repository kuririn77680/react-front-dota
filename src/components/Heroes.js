import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Heroes = () => {
  const [data, setData] = useState([]);

  useEffect(()=>{
    axios
      .get(
        'https://api.opendota.com/api/heroes'
      )
      .then((res)=> {
        setData(res.data);
      });
  }, []);

  return (
    <div className="heroes">
      <ul className="heroes-list">
        {data.map((hero)=>(
          <Card hero={hero} key={hero.id}/>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
