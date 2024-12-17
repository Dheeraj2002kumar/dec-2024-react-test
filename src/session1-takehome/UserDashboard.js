import React, { useState } from "react";
import axios from "axios";
import "./UserDashboard.css"; // Add styling as needed

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(false);

  const handleButtonClick = async (id) => {
    try {
      setError(false); // Reset error state
      const response = await axios.get(`https://reqres.in/api/users/${id}`);
      setUserData({
        email: response.data.data.email,
        name: `${response.data.data.first_name} ${response.data.data.last_name}`,
        avatar: response.data.data.avatar,
      });
    } catch (err) {
      // Handle error if ID is invalid
      setUserData(null);
      setError(true);
    }
  };

  return (
    <div className="user-dashboard">
      <h1>User Dashboard</h1>
      {/* Buttons for scenarios */}
      <div className="buttons">
        <button onClick={() => handleButtonClick(1)}> 1</button>
        <button onClick={() => handleButtonClick(2)}> 2</button>
        <button onClick={() => handleButtonClick(3)}> 3</button>
        <button onClick={() => handleButtonClick(100)}> 100</button>
      </div>

      {/* Display content */}
      <div className="content">
        {error ? (
          <div className="alert">Error: Unable to fetch user data!</div>
        ) : userData ? (
          <div className="user-info">
            <img src={userData.avatar} alt="User Avatar" />
            <p>Email: {userData.email}</p>
            <p>Name: {userData.name}</p>
          </div>
        ) : (
          <div className="placeholder">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <p>Email</p>
            <p>Name</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
