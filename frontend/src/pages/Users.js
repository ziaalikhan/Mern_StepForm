import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = () => {
  const [data, setData] = useState([]);

  const getUsers = async () => {
    try {
      const response = await axios.get("/users");
      const data = response.data.userData;
      setData(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h1>Registers Users {data.length}</h1>
      <Link to="/">
        <p>Register Another User</p>
      </Link>
      <div className="card">
        {data.map((user) => {
          return (
            <div className="cards" key={user._id}>
              <p>{user.userName}</p>
              <p>{user.email}</p>
              <p>{user.number}</p>
              <strong>Skills</strong>
              {user.skills.map((skill) => {
                return (
                  <div>
                    <p>{skill.value}</p>
                  </div>
                );
              })}
              <p>{user.country}</p>
              <p>{user.city}</p>
              <p>{user.profession}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Users;
