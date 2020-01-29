import { SET_STATS } from "./actions";

    const initialState = {
        name: "",
        class: "",
        race: "",
        items: [{"gold": 5}],
        stats: {
        experience: 0,
        strength: 1,
        intelegence: 1,
        health: 1,
        dex: 1,
        charisma: 1,
        }
    }
export const reducer = (state = initialState, action) => {

    switch (action.type) {

    case SET_STATS: return {
        ...state,
        stats: {... action.payload}  
    }
    
    default:
      return state;
  }
};