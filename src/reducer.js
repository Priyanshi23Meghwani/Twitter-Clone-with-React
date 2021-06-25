export const initialState = {
    user: null,
}

// export const actionTypes = {
//     SET_USER: "set_user"
// }

const reducer = (state, action) => {
    switch(action.type){
        case "set_user":{
            return{
                ...state,
                user: action.user,
            }

            };
        default:
            return state
        
    }
}

export default reducer;