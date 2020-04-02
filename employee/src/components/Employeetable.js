import React from "react";

const Employeetable = (props) => {
    console.log(props)
    const icon = ()=>{
        if(props.isSorted){ return  props.direction === 'asc' ? '⇣':'⇡'}
        else return ""
    }
    return(
        <table className="container border-top border-bottom border-dark mb-5">
            <thead>
            <tr className="border-bottom border-dark">
                <th className="border-right border-dark">Image</th>
                <th className="border-right border-dark" style={{cursor: "pointer"}} onClick={props.sort}>Name {icon()}</th>
                <th className="border-right border-dark">Phone</th>
                <th className="border-right border-dark">Email</th>
                <th className="border-right border-dark">City</th>
            </tr>
            </thead>
            <tbody className="border-bottom border-right border-dark">
            {props.employees && props.employees.map(employee => (
                <tr key={employee.login.uuid} className="table-row border-bottom border-dark">
                    <td><img src={employee.picture.thumbnail} alt="headshot of {employee.name.first}" /></td>
                    <td>{employee.name.first} {employee.name.last}</td>
                    <td>{employee.cell}</td>
                    <td>{employee.email}</td>
                    <td>{employee.location.city}</td>
                </tr>
            ))}
            </tbody>
        </table>
    )
};

export default Employeetable;