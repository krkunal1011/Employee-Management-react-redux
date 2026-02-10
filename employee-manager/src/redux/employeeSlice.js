import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState ={
    list: []
};

const employeeSlice = createSlice({
    name: "employees",
    initialState ,
    reducers:{
        addEmployee: {
            reducer(state, action) {
               state.list.push(action.payload);
            },
            prepare(data) {
                return{
                    payload: {
                        id: nanoid(),
                        ...data,
                    },
                };
            },
            
        },

        updateEmployee(state, action) {
      const index = state.list.findIndex(
        (emp) => emp.id === action.payload.id
      );

      if (index !== -1) {
        state.list[index] = action.payload;
      }
    },

    deleteEmployee(state, action) {
      state.list = state.list.filter(
        (emp) => emp.id !== action.payload
      );
    },


    },

})

export const {
  addEmployee,
  updateEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;