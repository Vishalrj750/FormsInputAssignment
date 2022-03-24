import React from "react";
import styles from "./EmployeesList.module.css"

function EmployeesList({ name, gender, age, address, department, salary, isMarried }) {
    return(
        <div>
                <table className={styles.table}>
                        <tbody>
                            <tr>
                                <th>Name</th>
                                <td>{name}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{gender}</td>
                            </tr>
                            <tr>
                                <th>Age</th>
                                <td>{age}</td>
                            </tr>
                            <tr>
                                <th>Address</th>
                                <td>{address}</td>
                            </tr>
                            <tr>
                                <th>Department</th>
                                <td>{department}</td>
                            </tr>
                            <tr>
                                <th>Salary</th>
                                <td>{salary}</td>
                            </tr>
                            <tr>
                                <th>Marital status</th>
                                <td>{isMarried}</td>
                            </tr>
                        </tbody>
                </table>
        </div>
    )
}

export { EmployeesList }