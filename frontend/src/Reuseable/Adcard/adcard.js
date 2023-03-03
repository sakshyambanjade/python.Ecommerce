import React, {useState} from 'react';
import { Card } from 'antd';
const { Meta } = Card;
import Buttons from '../Button/button'


const Adcard: React.FC = () => (
  // const [card ,setcard] = useState([]);

  // const handelClick = (items) => {
  //   console.log(item);
  // }
  <>


  
<div class='row'>
  <Card
    hoverable
    style={{ width: 240 , }}
    cover={<img alt="example" src="https://th.bing.com/th/id/R.45c381101534d6ccba2ea1ce75158e2f?rik=4KqvKHEelQn6wA&pid=ImgRaw&r=0" />}
  >
    
    <Meta title="Europe Street beat"  /> 
    <div className='Featured'> <Buttons /> </div> 
  
  </Card>
 
 
</div>
</>
  
);

export default Adcard;