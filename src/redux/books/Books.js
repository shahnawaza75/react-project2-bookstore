export const ADDBOOK='ADDBOOK';
export const REMOVE='REMOVE';
const initialstate = {
   books:[]
}

export const addingBook= (state =initialstate, {type,payload}) => {

    switch(type){
        case ADDBOOK:
            return {
                ...state,
                books:payload
            }
            case REMOVE:
                return state.filter((book) => book.id !== action.id);
            default: return state

    }

}



export const adding = (payload) => ({

type:ADDBOOK,
payload

})

export const removing = (payload) => ({
    type:REMOVE,
    payload
})


