import "./App.css";
import Dashboard from "./component/Dashboard";
import LoginButton from "./component/LoginButton";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading, isAuthenticated, loginWithRedirect, error } = useAuth0();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    loginWithRedirect();
  };

  if (error) {
    return <div>Oops... {error.message}</div>;
  }

  if (isLoading) {
    return <div>Loading ..</div>;
  }

  return (
    <>
      {isAuthenticated ? (
        <>
          <Dashboard />
        </>
      ) : (
        // <input value="Login" type="button" onClick={handleLogin} />
        <LoginButton />
      )}
    </>
  );
}

export default App;
