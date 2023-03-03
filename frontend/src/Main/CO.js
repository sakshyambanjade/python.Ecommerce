import React, { Component } from 'react';
import Navbar from '../Reuseable/Navbar/Nav'

class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://i.pinimg.com/originals/63/61/e0/6361e03592d73286dc8c882c28d8e74d.jpg')",
        height:'100vh',
        marginTop:'10px',
        fontSize:'50px',
        backgroundSize: 'center',
        backgroundRepeat: 'no-repeat',
    };
    

    return (
        <>
        <div>
        <div className='navbar'> <Navbar/> </div>
        </div>
      <div style={myStyle}>
      </div>
      </>
    );
  }
}
   
export default App;