import React, { Component } from 'react';
import Navbar from '../Reuseable/Navbar/Nav'

class App extends Component {
  render() {
    const myStyle={
        backgroundImage: 
 "url('https://th.bing.com/th/id/R.2b5029cf0d274c83251353aabf041378?rik=aYXJrJiocIvHKw&riu=http%3a%2f%2fblog.footaction.com%2fwp-content%2fuploads%2f2014%2f02%2fJORDANWALLPAPER-1024x713.jpg&ehk=qgl5pS%2fCTxcV3RQIGdePi8WzQN6E5cAJLvPiyowkgDM%3d&risl=&pid=ImgRaw&r=0')",
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