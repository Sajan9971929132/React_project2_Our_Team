import React from 'react'
import "./Card.css"


function card(props) {
  return (
    <div>
      <div className="profile-card"> 
        <div className="image">
          
          <img src={props.imgsrc} alt=""  class="profile-image"/>
        </div>
        <div className="text-data">
          <span className="name">{props.name} </span>

          <span className="job">{props.work}</span>
        </div>
        <div className="media-button">
          <a href="#" style={{backgroundColor :"#4267b2"}} className="link">
          <i class='bx bxl-facebook' ></i>
          </a>

          <a href="#" style={{backgroundColor :"#1da1f2"}}className="link">
          <i class='bx bxl-twitter'></i>
          </a>

          <a href="#" style={{backgroundColor :"#e1306c"}}className="link">
          <i class='bx bxl-instagram'></i>
          </a>

          <a href="#" style={{backgroundColor :"#ff0000"}}className="link">
          <i class='bx bxl-google'></i>
          </a>
        </div>
        <div className="button">
          <button className="btn1">Subscribe</button>
          <button className="btn1">message</button>
        </div>
        <div className="analytics">
          <div className="data">
          <i class='bx bx-heart'></i>
            <spam className="number">60k</spam>
          </div>
        

        
          <div className="data">
          <i class='bx bx-message-rounded-dots'></i>
            <spam className="number">60k</spam>
          </div>
        

        
          <div className="data">
          <i class='bx bx-share'></i>
            <spam className="number">60k</spam>
          </div>
        </div>
      </div>
    </div>
  )
}

export default card
