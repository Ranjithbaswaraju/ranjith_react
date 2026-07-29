import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function CardComponent({ title, category, image, price, description, rate }) {
  return (
    <Card className="w-[350px] h-[400px] shadow-lg rounded-xl overflow-hidden hover:scale-105 transition-all duration-300 border border-red-200">
      {/* Image */}
      <Card.Img
        variant="top"
        src={image}
        className="h-52 w-52 object-contain mx-auto mt-3"
      />

      {/* Body */}
      <Card.Body className="flex flex-col items-center text-center px-4">
        <Card.Title className="text-xl font-bold">{title}</Card.Title>

        <p className="text-gray-500 capitalize mb-2">{category}</p>

        <Card.Text className="text-gray-700 text-sm flex-grow">
          {description.slice(0, 70)}...
        </Card.Text>

        <div className="flex justify-between items-center w-full mt-3">
          <span className="text-xl font-bold text-green-600">${price}</span>

          <span className="text-yellow-500 font-semibold">⭐ {rate}</span>
        </div>

        <Button variant="primary" className="mt-3 w-full">
          Buy Now
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
