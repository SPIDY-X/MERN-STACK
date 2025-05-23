import React, { useState } from 'react';
import "./adduser.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from "react-hot-toast"

const AddUser = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        address: "",
    });
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            await
                axios.post("http://localhost:8000/api/users", user)
                    .then((response) => {
                        toast.success(response.data.message, { position: "top-right" });
                        navigate("/");
                    })
        }
        catch (error) {
            console.error("Error creating user:", error);
        }
    };

    return (
        <div className="addUser">
            <Link to="/" className="btn btn-secondary">
                <i className="fa-solid fa-backward"></i> Back
            </Link>

            <h3>Add New User</h3>

            <form className="addUserForm" onSubmit={submitForm}>
                <div className="inputGroup">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        autoComplete="off"
                        placeholder="Enter Your Name"
                        onChange={inputHandler}
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="Enter Your Email"
                        onChange={inputHandler}
                    />
                </div>

                <div className="inputGroup">
                    <label htmlFor="address">Address:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        autoComplete="off"
                        placeholder="Enter Your Address"
                        onChange={inputHandler}
                    />
                </div>

                <div className="inputGroup">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddUser;
