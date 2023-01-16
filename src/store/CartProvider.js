import React, { useReducer } from 'react';

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (item) => {},
});

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD_CART_ITEM') {
    const updatedTotalAmount = state.totalAmount + action.item.price;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedCartItems;
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    } else {
      const updatedCartItem = { ...action.item, amount: 1 };
      updatedCartItems = state.items.concat(updatedCartItem);
    }
    return {
      items: updatedCartItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE_CART_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedTotalAmount;
    let updatedCartItems;
    if (existingCartItem.amount === 1) {
      updatedTotalAmount = state.totalAmount - existingCartItem.price;
      updatedCartItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedTotalAmount = state.totalAmount - existingCartItem.price;
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedCartItems = [...state.items];
      updatedCartItems[existingCartItemIndex] = updatedItem;
    }
    return { items: updatedCartItems, totalAmount: updatedTotalAmount };
  }
  return defaultCartState;
};
export const CartProvider = (props) => {
  const [cartState, dispachCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const AddItem = (item) => {
    dispachCartAction({ type: 'ADD_CART_ITEM', item: item });
  };
  const RemoveItem = (id) => {
    dispachCartAction({ type: 'REMOVE_CART_ITEM', id: id });
  };
  const contextValue = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: AddItem,
    removeItem: RemoveItem,
  };
  return (
    <CartContext.Provider value={contextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

// const setData = (props) => {
//   console.log(props);
//   return props;
// };

// export const CartProvider = (props) => {
//   let items = [];
//   let totalAmount = 0;

//   const addItemToCart = (item) => {
//     const existingId = items.findIndex((it) => it.id === item.id);

//     totalAmount += item.price;

//     let updatedCartItems;

//     const existingCartItem = items[existingId];
//     if (existingCartItem) {
//       const updatedItem = {
//         ...existingCartItem,
//         quantity: existingCartItem.quantity + 1,
//       };
//       updatedCartItems = [...items];
//       updatedCartItems[existingId] = updatedItem;
//     } else {
//       updatedCartItems = items.concat({ ...item, quantity: 1 });
//     }

//     items = updatedCartItems;
//     setData({ items: updatedCartItems, totalAmount: totalAmount });
//   };

//   const removeItemFromCart = (item) => {
//     let updatedCartItems;

//     const existingId = items.findIndex((it) => it.id === item.id);
//     const existingCartItem = items[existingId];
//     if (existingCartItem) {
//       totalAmount -= existingCartItem.price;
//       if (existingCartItem.quantity === 1) {
//         console.log('1');
//         updatedCartItems = items.filter((it) => it.id !== existingCartItem.id);
//       } else {
//         console.log('>1');
//         const updatedItem = {
//           ...existingCartItem,
//           quantity: existingCartItem.quantity - 1,
//         };
//         updatedCartItems = [...items];
//         updatedCartItems[existingId] = updatedItem;
//       }
//       items = updatedCartItems;
//       setData({ items: updatedCartItems, totalAmount: totalAmount });
//     }

//     console.log(items);
//     console.log(totalAmount);
//   };

//   const contextValue = {
//     items: [],
//     totalAmount: 0,
//     addItem: addItemToCart,
//     removeItem: removeItemFromCart,
//   };

//   return (
//     <CartContext.Provider value={contextValue}>
//       {props.children}
//     </CartContext.Provider>
//   );
// };

export default CartContext;
