import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({title,role,salary,ind,removeHandler}) {
  return (
    <Card style={{ width: '300px', height:'400px',border:'2px solid black',display:'flex'}}>
      <Card.Img variant="top" src="https://media.gettyimages.com/id/1215119911/photo/looking-directly-up-at-the-skyline-of-the-financial-district-in-central-london-stock-image.jpg?s=612x612&w=gi&k=20&c=rIsNW_iVWpfHt77QBOI40_0bz8ea3XetPsy0kplL2FQ=" width="300px"/>
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

