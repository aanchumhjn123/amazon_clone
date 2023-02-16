import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 cartItems:[],
 totalAmount:0,
 totalQuantity:0
}

const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: { 
    addItem:(state ,action)=>{
        const newItem = action.payload
        const exitingItem =state.cartItems.find(item => item.id === newItem.id);

        state.totalQuantity++

        if(!exitingItem){
            state.cartItems.push({
                id:newItem.id,
                title:newItem.title,
                thumbnail:newItem.thumbnail,
                quantity:1,
                price:newItem.price

            })
            
        }
        else{
            exitingItem.quantity++
            exitingItem.totalPrice = Number(exitingItem.totalPrice)+Number
             (newItem.price)
        }
        state.totalAmount = state.cartItems.reduce((total,item)=> 
        total+Number(item.price)*Number(item.quantity),0)

        console.log(state.totalQuantity);
        console.log(state.cartItems);
        console.log(newItem);
    },

    deleteItem:(state, action)=>{
      const id = action.payload
      const exitingItem = state.cartItems.find(item=>item.id === id);
      if(exitingItem){
        state.cartItems = state.cartItems.filter(item=> item.id !== id)
        state.totalQuantity = state.totalQuantity - exitingItem.quantity
      }
      state.totalAmount = state.cartItems.reduce((total,item)=> 
        total+Number(item.price)*Number(item.quantity),0)

  }
  },

 
});

export const cartActions = cartslice.actions

export default cartslice.reducer