import {create} from "zustand";


export const useUserStore = create((set) => ({
    user: null,
    setUser: (user) => set({ user }),
    updateUser: (updatedUser) => set((state) => ({ user: { ...state.user, ...updatedUser } })),
  }));


//   dateOfBirth
// : 
// "1991-07-23"
// district
// : 
// "NAKURU"
// division
// : 
// "MUNICIPALITY"
// firstName
// : 
// "RAPHAEL"
// kraPin
// : 
// "12345"
// lastName
// : 
// "ONGUBO"
// location
// : 
// "LANET"
// middleName
// : 
// "NYAMAMBA"
// nationalId
// : 
// "28516420"
// sex
// : 
// "Male"
// sub_location
// : 
// "FREE HOLD"
// [[Prototype]]
// : 
// Object
// error
// : 
// false
// [[Prototype]]
// : 
// Object
