/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { Link, useOutletContext, useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const { user, setUser } = useOutletContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "user") {
      navigate(`/${user.username}page`);
    }
    if (user?.role === "admin") {
      navigate("/rullmyworld");
    }
  }, [user, navigate]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const apiURL = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${apiURL}/api/auth/login`, data, {
          withCredentials: true,
        })
        .then((response) => {
          setUser(response.data.user);
        });
    } catch (error) {
      console.error(error);
      reset();
    }
  };
  return (
    <section>
      <div>
        <h1>Login</h1>
        <p>
          Sign up or log in to access your personal watering schedule (with the
          ability to add plants with their photos, a forecasted watering
          calendar, and more to come).
          <br />
          <strong>Your plants deserve organization.</strong>
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <label htmlFor="email">Email: </label>
        <input
          type="text"
          name="email"
          className="input-login"
          {...register("email", {
            required: "This filed is required !",
            pattern: {
              value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
              message: "Invalid email format",
            },
            maxLength: {
              value: 120,
              message: "You can't have more than 120 characters",
            },
          })}
        />
        {errors.email && <p className="formError"> {errors.email.message}</p>}
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          {...register("password", {
            required: "This field is required !",
            pattern: {
              value:
                /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
              message:
                "You need at least 8 characters, including one uppercase, one number and a special character",
            },
            maxLength: {
              value: 64,
              message: "You can't put more that 64 characters",
            },
          })}
        />
        {errors.password && (
          <p className="formError">{errors.password.message}</p>
        )}
        <button className="buttonForm" type="submit" onClick={useEffect}>
          Login
        </button>
        <p>
          Don't have an account? <Link to="/signup">Create Account</Link>
        </p>
      </form>
    </section>
  );
}
