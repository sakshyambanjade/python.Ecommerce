import React, { Component } from 'react';
  
class Background extends Component {
  render() {
    const myStyle={
        backgroundImage: 
        "url('https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701927387.jpg')",
        height:'150vh',
        marginTop:'-500px',
        backgroundSize: 'cover',
    };
    return (
      <div style={myStyle}>
        
      </div>
    );
  }
}
   
export default Background;