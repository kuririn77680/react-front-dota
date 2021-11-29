import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
          <li>{hero.localized_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Heroes;
