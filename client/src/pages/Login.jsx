import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/Auth";

export default function Login() {
  const { handleLogin, auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    if (auth) navigate("/tasks");
  }, [auth]);

  const onSubmit = (data) => {
    handleLogin(data);
    reset();
  };
  return (
    <main className="form-box-login">
      <section className="form-details-login">
        <h2>Welcome Back</h2>
        <p>
          Please log in using your personal information to stay connected with
          us.
        </p>
      </section>
      <section className="form-content-login">
        <h2>LOGIN</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-field-login">
            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "*Email is required",
                },
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "*Invalid email",
                },
              })}
            />
            {errors.email && (
              <span className="error">{errors.email.message}</span>
            )}
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: {
                  value: true,
                  message: "*Password is required",
                },
              })}
            />
            {errors.password && (
              <span className="error">{errors.password.message}</span>
            )}
            <button type="submit">Log In</button>
            <div className="bottom-link-login">
              <span>Don't have an account?</span>
              <Link to="/sign-up" id="signup-link">
                Signup
              </Link>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}
