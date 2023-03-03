import { Card, Col, Row , Image} from 'antd';
import React from 'react';
import Buttons from '../Button/button'




const AppCard: React.FC = () => (



  <Row gutter={25}>
    <Col span={5}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={
        <Image
        width={200}
        src="https://i8.amplience.net/i/jpl/jd_417002_a?qlt=92"
      />}
      
  >
       <div className='Featured'> <Buttons /> </div> 

  </Card>
    </Col>
    <Col span={5}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <Image
        width={200}
        src="https://i8.amplience.net/i/jpl/jd_417002_a?qlt=92"
      />}
    >
       <div className='Featured'> <Buttons /> </div> 

  </Card>
    </Col>
    <Col span={5}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <Image
        width={200}
        src="https://i8.amplience.net/i/jpl/jd_417002_a?qlt=92"
      />}
    >
       <div className='Featured'> <Buttons /> </div> 

  </Card>
      
    </Col>

    <Col span={5}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <Image
        width={200}
        src="https://i8.amplience.net/i/jpl/jd_417002_a?qlt=92"
      />}
    >
       <div className='Featured'> <Buttons /> </div> 

  </Card>
      
    </Col>
    <Col span={4}>
    <Card
    hoverable
    style={{
      width: 240,
    }}
    cover={ <Image
        width={200}
        src="https://i8.amplience.net/i/jpl/jd_417002_a?qlt=92"
      />}
    >
       <div className='Featured'> <Buttons /> </div> 

  </Card>
      
    </Col>
  </Row>
);

export default AppCard;
