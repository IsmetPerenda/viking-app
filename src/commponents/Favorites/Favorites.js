import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function Favorites() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <main>
      <Header onShowCart={showCartHandler} />

        <Meals />
      </main>
    </CartProvider>
    </div>
  );
}

export default Favorites;