import {createSlice} from "@reduxjs/toolkit";

const positionSlice = createSlice({
    name: "position",
    initialState: {

    },
    reducers: {
        setPosition: (state, action)=>{
            console.dir(action);
            state.x = action.payload.x;
            state.y = action.payload.y;
        }
    }
});

export const {setPosition} = positionSlice.actions;
export default positionSlice.reducer;