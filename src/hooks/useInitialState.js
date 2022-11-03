import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (index) => {
    const newCart = state.cart; // Copio la cart actual
    newCart.splice(index, 1); //Elimino 1 elemento del array contando a partir de la posición = index
    setState({
      ...state,
      // cart: state.cart.filter((items) => items.id !== payload.id),
      cart: newCart, // Reemplazo la cart anterior con la nueva cart
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
  };
};

export default useInitialState;
