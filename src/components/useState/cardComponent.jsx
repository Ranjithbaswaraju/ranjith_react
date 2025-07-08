import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title,role,salary,ind,removeHandler}) {
  return (
    <Card style={{ width: '200px', height:'300px',border:'2px solid black'}}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {role}
          <div>
            {salary}
          </div>
        </Card.Text>
        <Button variant="primary" onClick={()=>removeHandler(ind)}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;