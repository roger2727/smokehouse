import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Smoked sticky BBQ American pork ribs ",
    description: "St Louis cut pork ribs, slow smoked then finished in our smokey Memphis MOP sauce until sticky & tender",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Smoked brisket ",
    description: "360 South brisket rubbed in our secret Smokehouse spices and slow smoked for 16hrs before resting in our house made beef master stock",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Smoked beef ribs ",
    description: "Cape Byron beef short ribs rubbed with our Smokehouse Texan rub",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Smokehouse platter ",
    description: "½ Rack of American pork ribs, smoked beef rib, spicy Andouille sausage, southern fried chicken, smoked brisket, smoked pulled pork, 2 x Creole seasoned buttered corn ",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
