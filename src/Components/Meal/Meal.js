
import React from "react";
import { Card, Col,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Meal = (props) => {
  const { strMeal, strArea, strMealThumb,idMeal } = props.meal;
  const goTo= `/meal/${idMeal}`
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={strMealThumb} />
          <Card.Body>
            <Card.Title>Meal title: {strMeal}</Card.Title>
            <Card.Text> {strArea}</Card.Text>
            <Link to={goTo}><Button variant="danger">Details</Button></Link>
            
          </Card.Body>
        </Card>
      </Col>
      
    </div>
  );
};

export default Meal;
