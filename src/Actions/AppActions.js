export const ADD_CAMPER = "ADD_CAMPER";
export const DELETE_CAMPER= "DELETE_CAMPER";
export const EDIT_CAMPER= "EDIT_CAMBER";


export const addCamper = (camper)=>{
    camper.id = Math.random().toString();
    return{
        type: ADD_CAMPER,
        payload: camper
    }
}

export const deleteCamper = (camperId)=>{
    return{
        type: DELETE_CAMPER,
        payload: camperId
    }
}

export const editCamper = (id, camper)=>{
    return{
        type: EDIT_CAMPER,
        id,
        camper,
    }
}