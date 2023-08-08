import React from "react";

function UserLists(props){

    function onEditClicked(event,datas){
        props.App(datas);
    }

    function deleteUser(event,datas){
        props.onDeleteUser(datas);
    }

    return (
        <React.Fragment>
            <table className="table mx-auto mt-4" style={{width : 900}}>
                <thead className="table-dark">
                    <tr>
                        <th >Full Name</th>
                        <th >Email</th>
                        <th >Country</th>
                        <th >City</th>
                        <th >DOB</th>
                        <th >Gender</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {props.users.map((datas) =>{
                        return <tr>
                                <td>{datas.firstName + ' ' + datas.lastName}</td>
                                <td>{datas.email}</td>
                                <td>{datas.country}</td>
                                <td>{datas.city}</td>
                                <td>{datas.dob}</td>
                                <td>{datas.gender}</td>
                                <td>
                                    <button className="btn btn-warning" onClick={(event) => {onEditClicked(event,datas)}}>Edit</button>
                                    <button className="btn btn-danger" style={{marginLeft : 20}} onClick={(event) => {deleteUser(event,datas)}}>Delete</button>
                                </td>
                            </tr>
                    })}
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default UserLists