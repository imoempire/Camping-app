import { ADD_CAMPER, DELETE_CAMPER, EDIT_CAMPER } from "../Actions/AppActions";

const initialState = {
    campers : [
        {
            camper_1: "John",
            camper_2: "Grace",
            number: "2",
            email: "gmmma@gmail.com",
            room_number: "23456789",
            check_in: "10/05/2020",
            check_out: "20/05/2020",
            // message: "",
            id: "ertyuieof"  
        }
    ]
}

const AppReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_CAMPER:
            return {...state.campers, campers: [...state.campers, action.payload]};

        case DELETE_CAMPER:
            const SavedCampers= state.campers.filter((camper)=>{
                return camper.id !== action.payload;
            });
            return {...state, campers: SavedCampers}

        case EDIT_CAMPER:
            const SavedCamper = state.campers.map((camper)=>{
                if (camper.id === action.id) {
                    return{
                        id: camper.id,
                        camper_1: action.camper.camper_1,
                        camper_2: action.camper.camper_2,
                        number: action.camper.number,
                        email: action.camper.email,
                        room_number: action.camper.room_number,
                        check_in: action.camper.check_in,
                        check_out: action.camper.check_out,
                    };
                }
                return camper;
            });
            return { ...state, campers: SavedCamper };

        default:
            return state;
    }
}

export default AppReducer;

