import apiFacade from "./apiFacade.js";
import {API_URL} from "../../settings.js";

function OwnerFacade() {
    const getAllOwners = (updateAction, setErrorMessage) => {
        return apiFacade.fetchData("owners", updateAction, setErrorMessage)
    }
    const getAllBoats = (updateAction, setErrorMessage) =>{
        return apiFacade.fetchData("boats", updateAction,setErrorMessage)
    }

    // const getAllOwnersByBoat= (id) => {
    //     const options = apiFacade.makeOptions("GET", null, null);
    //     return fetch(API_URL + "/api/boats/" + id, options).then(apiFacade.handleHttpErrors)
    // }


    const createBoat = (boat) => {
        const options = apiFacade.makeOptions("POST", null, boat)
        return fetch(API_URL + "/api/boats", options)
            .then(apiFacade.handleHttpErrors)
    }

    return {
        getAllOwners,
        getAllBoats,
        createBoat
        // getAllOwnersByBoat
    }
}
const ownerFacade = OwnerFacade();
export default ownerFacade;

