import React from "react";
import data from '../../Data/Data'
import Info from '../Info/info';

const InfoCard = (props) => {

  const id = window.location.pathname.split('/')
  const num = id[id.length-1]

  return (
    <div>
      <Info userInfo={data[num-1]}/>
    </div>
  )
  


};

export default InfoCard;
