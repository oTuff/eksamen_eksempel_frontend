import React, {useEffect, useState} from 'react';
import harbourFacade from "../utils/harbourFacade.js";
import "../styles/adminpanel.css";
import ownerFacade from "../utils/ownerFacade.js";

function AdminPanel({trainingFacade}) {
    const [harboursData, setHarboursData] = useState([]);
    const [ownersData, setOwnersData] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const [inputs, setInputs] = useState({});

    useEffect(() => {
        const getData = async () => {
            await harbourFacade.getAllHarbours((data) => {
                setHarboursData(data)
            }, "Error can't fetch Harbours!")
        }
        getData();
    }, [refresh]);
    useEffect(() => {
        const getData = async () => {
            await ownerFacade.getAllOwners((data) => {
                setOwnersData(data)
            }, "Error can't fetch owners!")
        }
        getData();
    }, [refresh]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log("object: " + name + " : " + value)
        setInputs(values => ({...values, [name]: value}))
        // console.log("inputs: " + inputs)
    }
    // const handleChangeObject = (event) => {
    //     const name = event.target.name
    //     const value = event.target.value
    //     console.log("object: " + name + " : " + value)
    //     setInputs(values => ({...values, [name]: {object: value}}))
    // }


    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //https://scriptverse.academy/tutorials/reactjs-select.html :
    let harboursList = harboursData.length > 0
        && harboursData.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.harbourName}</option>
            )
        }, this);

    let ownersList = ownersData.length > 0
        && ownersData.map((item) => {
            return (
                <option key={item.id} value={item.id}>{item.ownerName}</option>
            )
        }, this);

    return (
        <>

            <div className="tableBody">
                <h1>creat a boat</h1>
                <form onSubmit={handleSubmit}>
                    <table>
                        <tr className={"blue"}>
                            <th>brand</th>
                            <th>make</th>
                            <th>name</th>
                            <th>image</th>
                            <th>harbour</th>
                            <th>owner(s)</th>
                            <th>CREATE</th>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder={"brand"}
                                       onChange={handleChange} name={"boatBrand"} maxLength={45}/></td>
                            <td><input type="text" placeholder={"make"} onChange={handleChange}
                                       name={"boatMake"}/></td>
                            <td><input type="text" placeholder={"name"} onChange={handleChange}
                                       name={"boatName"}/></td>
                            <td><input type="text" placeholder={"image"}
                                       onChange={handleChange} name={"boatImage"}/></td>

                            <td><select name={"harbour"} onChange={handleChange}>
                                <option disabled={true} selected={true}>Choose harbour</option>
                                {harboursList}
                            </select>
                            </td>
                            <td>
                                <select name="owners" onChange={handleChange} multiple={true}>
                                    <option disabled={true} selected={true}>Choose owner(s)</option>
                                    {ownersList}
                                </select>
                            </td>
                            <td>
                                <button onClick={() => {
                                    const harbour = harboursData[inputs.harbour - 1]
                                    const owners = [ownersData[inputs.owners - 1]]//todo: can still only add one owner
                                    const json = {
                                        "boatBrand": inputs.boatBrand,
                                        "boatMake": inputs.boatBrand,
                                        "boatName": inputs.boatName,
                                        "boatImage": inputs.boatImage,
                                        harbour,
                                        owners
                                    }
                                    console.log(json)
                                    ownerFacade.createBoat(json).then(() => {
                                        setRefresh(!refresh);
                                    });
                                }}>Submit
                                </button>
                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </>
    )
}

export default AdminPanel