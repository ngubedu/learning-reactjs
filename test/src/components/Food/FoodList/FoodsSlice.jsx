
const foodsListSlice = createSlice({
    name:"foods",
    initialState : [
        {name:"Xoi ga" , price: 1000},
        {name:"Banh mi" , price: 5000},
    ],
    reducers:{
        addFood:(state,actions) =>{
            state.push(actions.payload)
        }
    }
})