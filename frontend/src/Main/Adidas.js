import React, { Component } from 'react';
import Navbar from '../Reuseable/Navbar/Nav'

class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://content.invisioncic.com/r224567/monthly_2016_11/583b43e60aaf2_AdidasGlobalTemplateBanner.png.dd4a877c5d278f4fbf9c226405d33e43.png')",
        height:'100vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    
    return (
        <>
        <div>
        <div className='navbar'> <Navbar/> </div>
        </div>
      <div style={myStyle}>
        <h1> geeksforgeeks </h1>
      </div>
      </>
    );
  }
}
   
export default App;