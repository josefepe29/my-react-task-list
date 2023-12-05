import { Link, useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../context/Auth";
import { useEffect } from "react";

export default function SignUp() {
  const { handleSignup, auth } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  useEffect(() => {
    if (auth) navigate("/login");
  }, [auth]);

  const onSubmit = (data) => {
    handleSignup(data);
    reset();
  };

  return (
    <main className="form-box-signup">
      <section className="form-details-signup">
        <h2>Create Account</h2>
        <p>
          To become a part of our community, please sign up using your personal
          information.
        </p>
      </section>
      <section className="form-content-signup">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2>SIGNUP</h2>
          <div className="input-field-signup">
            <div className="set-errors">
              <input
                type="text"
                className="register-input"
                placeholder="Name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "*Name is required",
                  },
                })}
              />
              {errors.name && (
                <span className="error">{errors.name.message}</span>
              )}
            </div>
            <div className="set-errors">
              <input
                type="text"
                className="register-input"
                placeholder="Email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "*Email is required",
                  },
                  pattern: {
                    value:
                      /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/,
                    message: "*Invalid email",
                  },
                })}
              />
              {errors.email && (
                <span className="error">{errors.email.message}</span>
              )}
            </div>
          </div>
          <div className="input-field-signup">
            <div className="set-errors">
              <input
                type="password"
                className="register-input"
                placeholder="Password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "*Password is required",
                  },
                  minLength: {
                    value: 6,
                    message: "Password must have at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="error">{errors.password.message}</span>
              )}
            </div>
            <div className="set-errors">
              <input
                type="password"
                className="register-input"
                placeholder="Confirm Password"
                {...register("passwordCheck", {
                  required: {
                    value: true,
                    message: "*Confirm password is required",
                  },
                  validate: (value) => {
                    return value === watch("password") || "Passwords not match";
                  },
                })}
              />
              {errors.passwordCheck && (
                <span className="error">{errors.passwordCheck.message}</span>
              )}
            </div>
          </div>
          <button type="submit">Sign Up</button>
        </form>
        <div className="bottom-link-signup">
          Already have an account?
          <Link to="/login" id="signup-link">
            Log In
          </Link>
        </div>
      </section>
    </main>
  );
}
