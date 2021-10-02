import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Home = () => {
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, [input]);
  console.log(meals);
  return (
    <div>
      <input onChange={handleChange} placeholder="search here" type="text" />
      <div>
      <Row xs={1} sm={2} md={4} className="g-5"> 
      {meals.map((meal) =><Meal meal={meal} key={meal.idMeal}></Meal>)}
      </Row>
        
      </div>
      
    </div>
  );
};

export default Home;
