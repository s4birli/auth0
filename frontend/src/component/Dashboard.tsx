import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard: React.FC = () => {
  const { user, getAccessTokenSilently } = useAuth0();
  getAccessTokenSilently().then((token) => {
    console.log(token);
  });
  return (
    <>
      <h1>Welcome to the Dashboard!</h1>
      <p>{user?.name}</p>
      <p>{user?.email}</p>
      {/* <p>{data}</p> */}
    </>
  );
};

export default Dashboard;
