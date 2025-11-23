// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function BasicExample({title,price,description,category,src}) {
//   return (
//     <Card style={{ width: '300px', height:'450px',border:'2px solid black' ,textAlign:'center'}}>
//       <Card.Title ><h3 style={{
//     display: "-webkit-box",
//     WebkitBoxOrient: "vertical",
//     WebkitLineClamp: 1,
//     overflow: "hidden",
//     height:"40px",
//     textOverflow: "ellipsis"
//   }}>{title}</h3></Card.Title>
//       <Card.Img variant="top" src={src} width="200px" height="200px"/>
//       <Card.Body>
        
//         <Card.Text>
//           {`Price : ${price}`}
//         </Card.Text>
//         <Card.Text>
//           {`Category : ${category}`}
//         </Card.Text>
//          <Card.Text  style={{
//     display: "-webkit-box",
//     WebkitBoxOrient: "vertical",
//     WebkitLineClamp: 3,
//     overflow: "hidden",
//     textOverflow: "ellipsis"
//   }}>
//           {description}
//         </Card.Text>
//         <Button variant="primary">Buy Now</Button>
//       </Card.Body>
//     </Card>
//   );
// }

// export default BasicExample;


import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title,category,image,description}) {
  return (
    <Card style={{ width: '300px' ,height:'500px',border:'2px solid red',textAlign:'center'}}>
      
      <Card.Body>
        <Card.Title ><h3
         style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            height:"40px"
        }}>{title}</h3></Card.Title>
        <Card.Subtitle><h4>{`Category : ${category}`}</h4></Card.Subtitle>
        <Card.Img  src={image} width="200px" height="200px" />
        <Card.Text style={{
          display:'-webkit-box',
          webkitBoxOrient:'vertical',
          WebkitLineClamp:3,
          overflow:'hidden',
          textOverflow:'ellipsis'
        }}>
          {description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;