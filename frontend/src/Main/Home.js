import Navbar from '../Reuseable/Navbar/Nav'
import Carou from '../Reuseable/Carousel/Carousel'
import AppCard from '../Reuseable/Card/Card'
import Appstep from '../Reuseable/banner/steps'
import Timer from '../Reuseable/Timer/timer'
import Adcard from '../Reuseable/Adcard/adcard'
const myStyle={
  backgroundImage: 
"url('https://th.bing.com/th/id/R.be85f700d1fea9d33544f5833e2484b4?rik=czADoQfFos%2fbTA&pid=ImgRaw&r=0')",
  height:'100vh',
  fontSize:'20px',
  backgroundSize: 'contain',
};

export default function Home() {
    return (
      <>
       <div style={myStyle}>
      <div className='navbar'> <Navbar/> </div>
      <br />
      <div className='Carou'> <Carou /> </div>
      <br />
      <div className='Carou'> <Timer /> </div>
      <br />
      <div className='Card'> <AppCard /> </div>
      <br />
      <div className='Featured'> <Appstep /> </div>
      <br />
      <div className='Advance car'> <Adcard /> </div>
      <br />
      <div className='Featured'> <Appstep /> </div>
      </div>


  </>
  )
}
