

export default function userReducer(state={},actions){
    
    switch(actions.type){

        case "GET_USER" : return actions.payload;
        default : return state;
    }
}