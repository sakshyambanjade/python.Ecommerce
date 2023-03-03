import { Carousel,Image } from 'antd';
const contentStyle = {
  margin: 15,
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
const Carou = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange}>
      <div>
        <h3 style={contentStyle}>
        <Image
        width={200}
        src="https://th.bing.com/th/id/OIP.qcbkDFjjZcpLLnvj0T2qPAAAAA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}> <Image
        width={200}
        src="https://th.bing.com/th/id/OIP.qcbkDFjjZcpLLnvj0T2qPAAAAA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}> <Image
        width={200}
        src="https://th.bing.com/th/id/OIP.qcbkDFjjZcpLLnvj0T2qPAAAAA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/></h3>
      </div>
      <div>
        <h3 style={contentStyle}><h3 style={contentStyle}> <Image
        width={200}
        src="https://th.bing.com/th/id/OIP.qcbkDFjjZcpLLnvj0T2qPAAAAA?w=298&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"/></h3>
      </h3>
      </div>
    </Carousel>
  );
};
export default Carou;