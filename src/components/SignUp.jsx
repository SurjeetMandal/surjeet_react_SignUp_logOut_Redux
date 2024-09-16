import { useState } from "react";
import "./SignUp.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/ReduxSignUp/ReduxSignUp";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [Errors, setError] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const dispatch = useDispatch();

  const confirmPassHandlar = (e) => {
    setConfirmPass(e.target.value)
  }

  const submitHandlar = (e) => {
    e.preventDefault();
    if (formData.username && formData.email && formData.password && confirmPass) {
      const token = Math.random().toString(36).substr(2);
      const user = formData;

      dispatch(login({ user, token }));

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      setError("")
    } else {
      setError("Error : All the fields are mandatory");
    }
  };

  return (
    <div className="container signup">
      <div className="main">
        <h1>Sign Up</h1>
        <form onSubmit={submitHandlar}>
          <input
            type="text"
            placeholder="Full Name"
            value={formData.username}
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete=""
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Confirm Password"
            autoComplete=""
            onChange={confirmPassHandlar}
          />
          <p className={Errors ? "invalid" : "valid"}>
            {Errors}
          </p>
          <div className="btn-container">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
