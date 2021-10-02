
import React, { useEffect, useState } from "react";
import { Card, Col, Row,Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router";

const MealDetail = () => {
  const { mealId } = useParams();
  console.log(mealId);
  const [detail, setaDEtail] = useState([]);
  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("get data");
        setaDEtail(data.meals[0]);
      });
  }, []);
  console.log(detail);
  const { strMeal, strArea,strMealThumb,strCategory,strYoutube } = detail;

  //add addEvent function
  const history= useHistory()
  const addEvent=()=>{
      
      history.push("/home")
  }

  return (
    <div >
      <Row className="justify-content-md-center">
        <Col xs lg="5">
          <Card style={{ width: "30rem" }} className="text-center">
            <Card.Header>Meals Details</Card.Header>
            <Card.Body>
              <Card.Img variant="top" fluid src={strMealThumb} />
              <Card.Title>Meal Title:{strMeal}</Card.Title>
              <Card.Text>
                Found in {strArea}
              </Card.Text>
              <a target="blank" href={strYoutube} style={{textDecoration:"none"}}>Youtube Link</a>
              <br />
              <Button onClick={addEvent} variant="success">Go To Home</Button>
            </Card.Body>
            
            <Card.Footer className="text-muted">Category: {strCategory}</Card.Footer>
          </Card>
        </Col>
      </Row>
      
    </div>
  );
};

export default MealDetail;
