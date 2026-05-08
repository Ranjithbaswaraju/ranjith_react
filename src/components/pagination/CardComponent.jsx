import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title,category,image,price,description}) {
  return (
    <Card style={{ width: '400px', height:"500px", textAlign:'center' ,border:"2px solid" ,borderRadius:"10%",padding:'5px' ,boxShadow: "0px 8px 20px rgba(0,0,0,0.3)"}}>
      
      <Card.Body>
        <Card.Title style={{
        display: "-webkit-box",
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"}}><h2>{title}</h2></Card.Title>
        <Card.Text>{category}</Card.Text>
        <Card.Img variant="top" src={image} style={{height:"200px",width:'200px'}} />
        <Card.Text>
         {price}
        </Card.Text>
         <Card.Text style={{
        display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden"}}>
         {description }
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;