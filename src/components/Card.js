import React from 'react'
import MapMarker from '../images/map-marker.png'

const Card = (props) => {
  const capitalize = (string) => {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
  }

  return (
    <div className="row py-5 card--outline ">
      <div className="col-sm-12 col-md-6 my-auto mx-auto">
        <img
          src={props.imageUrl}
          alt=""
          class="card--image"
        />
      </div>
      <div className="col-sm-12 col-md-6 my-auto mx-auto">
        <img src={MapMarker} alt="" className="icon"/>
        <span>{props.country.toUpperCase()} | {capitalize(props.city)} | <a href={props.googleMapsUrl} target="_blank">See Map</a></span>
        <h4>{props.title}</h4>
        <h6>{props.startDate} - {props.endDate}</h6>
        <p className="text-justify">{props.description}</p>
      </div>
    </div>
  )
}

export default Card
