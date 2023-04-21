import React from 'react';
import house from '../../assets/house.jpg'
import Card from '../card/card'
import './Landingpage.css'

function LandingPage() {
  return (
   
      
      <div className="card-container">
        <Card 
          imageSrc="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
          title="2.5 eth"
          subtitle="ernakulam"
        />
        <Card 
          imageSrc={house}
          title="2.5 eth"
          subtitle="ernakulam"
        />
        <Card 
          imageSrc="https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg"
          title="2.5 eth"
          subtitle="ernakulam"
        />
        <Card 
          imageSrc={house}
          title="2.5 eth"
          subtitle="ernakulam"
        />
      </div>
      
      

      
  

  
  )
}

export default LandingPage;