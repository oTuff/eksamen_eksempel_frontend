import React, {useEffect, useState} from 'react';
import harbourFacade from "../utils/harbourFacade.js";

function Boats(harbour) {
    const [boats, setBoats] = useState(harbour.boats);
    const [refresh, setRefresh] = useState(false);

    return (
        <div className="tableBody">
            {/*<h1>list of boats from {harbour.harbourName}</h1>*/}
            <table>
                <thead>
                <tr className={"blue"}>
                    <th>brand</th>
                    <th>year</th>
                    <th>name</th>
                    <th>owners</th>
                </tr>
                </thead>
                <tbody>
                {boats.map((data) => {
                    return (
                        <tr key={data.id}>
                            <td>{data.boatBrand}</td>
                            <td>{data.boatMake}</td>
                            <th>{data.boatName}</th>
                            {/*<th>{data.owners.map((owner)=> owner}</th>*/}
                            <td>
                                {/*<button onSubmit={handleRefresh} onClick={() => {*/}
                                {/*    // userFacade.removeUserToTrainingSession(userFacade.getUserName(), data.id).then(() => {*/}
                                {/*        setRefresh(!refresh)*/}
                                {/*    // })*/}
                                {/*}}>Deregister*/}
                                {/*</button>*/}
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default Boats;
