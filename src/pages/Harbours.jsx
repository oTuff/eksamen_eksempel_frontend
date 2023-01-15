import React, {useEffect, useState} from 'react';
import harbourFacade from "../utils/harbourFacade.js";
import {NavLink} from "react-router-dom";
import Boats from "./Boats.jsx";
import {useNavigate} from "react-router";

function Harbours() {
    const [boats, setBoats] = useState([]);
    const [owners, setOwners] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const getData = async () => {
            await harbourFacade.getAllHarbours((data) => {
                setOwners(data)
            }, "Error can't fetch Harbours!")
        }
        getData();
    }, [refresh]);

    const handleRefresh = (evt) => {
        evt.preventDefault
    }

    const showBoats = (data) => {
        setBoats(data)
        console.log(data)
    }


    return (
        <>
        {boats.map((data) => {
                    return (
                        <table>
                            <thead>
                            <tr key={data.id}>
                            <td>{data.boatName}</td>
                            </tr>
                            </thead>
                        </table>
                    )})}
        <div className="tableBody">
            <h1>list of harbours</h1>
            <table>
                <thead>
                <tr className={"blue"}>
                    <th>Name</th>
                    <th>capacity</th>
                    <th>Address</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {owners.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.harbourName}</td>
                            <td>{data.harbourCapacity}</td>
                            <th>{data.addressAddress.streetAddress}, {data.addressAddress.cityInfo.cityName}</th>
                            <td>

                                <button onClick={() => showBoats(data.boats)}>boats</button>
                                {/*<button onSubmit=<Boats harbour={data}/>>boats</button>*/}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
            </>
    )
}

export default Harbours;
