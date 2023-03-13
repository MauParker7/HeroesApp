import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  
  const Navigate = useNavigate();
  
  const onLogin = () => {

        Navigate('/', {
            replace: true
        });

  }

  return (
    <div
      className="containet mt-5">
        <h1>Login</h1>
        <hr />

        <button 
        className="btn btn-primary"
        onClick={onLogin}>
          Login
        </button>

    </div>
      )

  }
