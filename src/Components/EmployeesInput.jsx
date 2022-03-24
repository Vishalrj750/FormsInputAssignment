import React from "react";
import { EmployeesList } from "./EmployeesList";
import styles from "./EmployeesInput.module.css";

function EmployeesInput() {
    const [details, setDetails] = React.useState({
        name: "",
        gender: "",
        age: "",
        address: "",
        department: "",
        salary: "",
        isMarried: false
    })

    const [data, setData] = React.useState([])

    const handleChange = (e) => {
        const {id, value, checked, type} = e.target;
        setDetails({
            ...details,
            [id]: type === "checkbox" ? checked : value
        })
    }

    const {name, age, address, department, salary, isMarried, gender} = details

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:3001/details`, {
            method: "POST",
            body: JSON.stringify(details),
            headers: {
                "content-type": "application/json"
            }
        })
    }

    React.useEffect(() => {
        fetch(`http://localhost:3001/details`)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log(err))
    }, [])
    
    return(
        <div>
            <div className={styles.input}>
            <form action="submit" onSubmit={handleSubmit} >
            <label htmlFor="name">
                Name :
                <input type="text" id="name" onChange={handleChange} value={name} />
            </label>
            <br />
            <label htmlFor="gender">
                Gender :
                <select name="gender" id="gender" onChange={handleChange} value={gender}>
                    <option value="">Choose</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
            </label>
            <br />
            <label htmlFor="age">
                Age :
                <input type="number" id="age" onChange={handleChange} value={age} />
            </label>
            <br />
            <label htmlFor="address">
                Address :
                <input type="text" id="address" onChange={handleChange} value={address} />
            </label>
            <br />
            <label htmlFor="department">
                Department :
                <select name="department" id="department" onChange={handleChange} value={department} >
                    <option value="">Choose Department</option>
                    <option value="marketting">Marketting</option>
                    <option value="HR">HR</option>
                    <option value="IT">IT</option>
                    <option value="finance">Finance</option>
                </select>
            </label>
            <br />
            <label htmlFor="salary">
                Salary :
                <input type="number" id="salary" onChange={handleChange} value={salary} />
            </label>
            <br />
            <label htmlFor="marital_status">
                Married :
                <input type="checkbox" id="isMarried" onChange={handleChange} value={isMarried} />
            </label>
            <br />
            <input type="submit" value="Submit" />
            </form>
            </div>
            <div className={styles.render}>
                {  data.map((item) => <EmployeesList {...item} key={item.id} isMarried={ item.isMarried ? "Married" : "Unmarried" } /> )}
            </div>
        </div>
    )
}

export { EmployeesInput }