import apiFacade from "./apiFacade.js";
import {API_URL} from "../../settings.js";

function HarbourFacade() {
    const getAllHarbours = (updateAction, setErrorMessage) => {
        return apiFacade.fetchData("harbours", updateAction, setErrorMessage)
    }

    const getAllBoatsByHarbour = (id) => {
        const options = apiFacade.makeOptions("GET", null, null);
        return fetch(API_URL + "/api/harbours/" + id, options).then(apiFacade.handleHttpErrors)
    }

    return {
        getAllHarbours,
        getAllBoatsByHarbour
    }
}

const harbour = HarbourFacade();
export default harbour;

