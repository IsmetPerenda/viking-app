import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Japan, Tokyo',
    description: 'A land of contrasts, Japan is a fascinating destination for visitors. Combining the attractions of an ancient and unfamiliar culture with all the trappings of one of the world powerhouses in entertainment, fashion, and innovation, Japan is a journey of discovery wherever you go.',
    price: 450,
    photo:"https://w0.peakpx.com/wallpaper/256/840/HD-wallpaper-tokyo-tower-japan-city-roppongi-tower-tokyo-sunset.jpg",
  },
  {
    id: 'm2',
    name: 'Italy, Rome',
    description: 'Italy comprises some of the most varied and scenic landscapes on Earth and is often described as a country shaped like a boot. At its broad top stand the Alps, which are among the worlds most rugged mountains. ... Tuscany, to the south of the cisalpine region, is perhaps the countrys best-known region.',
    price: 300,
    photo:"https://www.wantedinrome.com/i/preview/storage/uploads/2020/05/return-to-rome.jpg"
  },
  {
    id: 'm3',
    name: 'Spain, Barcelona',
    description: 'One of Europes biggest hitters for good reason, Spain pulls tourists in by the millions thanks to its warm weather, laidback vibe and excellent food and wine. Plus, of course, there are some of Europes best beach resorts, mountains, and cultural cities such as Madrid, Seville and Barcelona.',
    price: 320,
  photo:"https://www.spain-visa.co.uk/blog/wp-content/uploads/2020/07/city-beaches-barcelona.jpg"
  },
  {
    id: 'm4',
    name: 'Brazil, Rio de Janeiro',
    description: 'One of the main reasons why Brazil is famous, is because it is the home of one the 7 wonders of the world, which is Christ the Redeemer Statue. This huge and impressive landmark is for sure the most famous things in Brazil and it is located at the top of Corcovado mountain in Rio de Janeiro',
    price: 900,
    photo:"https://w0.peakpx.com/wallpaper/33/868/HD-wallpaper-rio-de-janeiro-brazil-city-rio-de-janeiro-brazil-panorama.jpg"
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
      photo={meal.photo}
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
