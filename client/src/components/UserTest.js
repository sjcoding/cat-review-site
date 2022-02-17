import React, { useEffect, useState } from "react";
// import Fetcher from "./services/Fetcher";
// import { Link } from "react-router-dom";

const UserTest = (props) => {
  // debugger;

  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const userData = await fetch("/api/v1/users");
      if (!userData.ok) {
        const errorMessage = `${userData.status} (${userData.statusText})}`;
        const error = new Error(errorMessage);
        throw error;
      }
      const userDataJSON = await userData.json();
      setUsers(userDataJSON.users);
    } catch (err) {
      console.error(`Error in Fetch: ${err.message}`);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="profile-page">
      <h2 className="user-tag">Hello from UserTests</h2>
      <h4 className="user-email"> Hi </h4>
    </div>
  );
};

export default UserTest;
