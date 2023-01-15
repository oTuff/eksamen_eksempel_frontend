import React, {useEffect, useState} from 'react';
//todo: remove unused import
import ownerFacade from "../utils/ownerFacade.js";

function UserPanel() {
    const [owners, setOwners] = useState([]);
    const [boats, setBoats] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        const getData = async () => {
            await ownerFacade.getAllOwners((data) => {
                setOwners(data)
            }, "Error can't fetch Owners!")
        }
        getData();
    }, [refresh]);

    useEffect(() => {
        const getData = async () => {
            await ownerFacade.getAllBoats((data) => {
                setBoats(data)
            }, "Error can't fetch Owners!")
        }
        getData();
    }, [refresh]);

    const handleRefresh = (evt) => {
        evt.preventDefault
    }

    return (
        <>
            <div className="tableBody">
                <h1>list of owners</h1>
                <table>
                    <thead>
                    <tr className={"blue"}>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                    </thead>
                    <tbody>
                    {owners.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.ownerName}</td>
                                <td>{data.ownerPhone}</td>
                                <th>{data.address.streetAddress}, {data.address.cityInfo.cityName}</th>
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
            {/*boats:*/}
            <div className="tableBody">
                <h1>list of boats</h1>
                <table>
                    <thead>
                    <tr className={"blue"}>
                        <th>id</th>
                        <th>brand</th>
                        <th>make</th>
                        <th>name</th>
                        <th>image</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boats.map((data) => {
                        return (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.boatBrand}</td>
                                <td>{data.boatMake}</td>
                                <td>{data.boatName}</td>
                                <td>{data.boatImage}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default UserPanel;
