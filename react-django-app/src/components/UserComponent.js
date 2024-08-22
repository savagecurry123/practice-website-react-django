import React, { useEffect, useState } from "react";

const UserComponent = () => {
    const[users, setUsers] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/users/")
        .then((response) => response.json())
        .then((data) => setUsers(data))
        .then((error) => console.log(error))
    }, []);

    const addUser = (e) => {
        e.preventDefault();
        const newUser = { name };

        fetch("http://127.0.0.1:8000/api/add_user/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser)
        })
            .then((response) => response.json())
            .then((data) => {
                setUsers([...users, data]);
                setName(""); //clear input field
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container">
            <h2 className="my-4">Users List</h2>

            <ul className="list-group mb-4">
                {users.map((user) => (
                    <li className="list-group-item" key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        
            <form onSubmit={addUser} className="mb-4">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Add New User</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter user name" 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add User!</button>
            </form>
        </div>
    );
};

export default UserComponent;