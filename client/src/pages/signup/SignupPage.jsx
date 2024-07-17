/* eslint-disable react/jsx-props-no-spreading */
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./SignupPage.css";

export default function SignupPage() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const apiURL = import.meta.env.VITE_API_URL;

  const onSubmit = async (data) => {
    try {
      await axios
        .post(`${apiURL}/api/user/register`, data)
        .finally(() => navigate("/"));
    } catch (err) {
      console.error(err);
    }
  };

  // TODO: add error messages in FRONT for the user if email already exists

  return (
    <form className="Form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        name="username"
        {...register("username", {
          required: "This field is required !",
          minLength: {
            value: 2,
            message: "You need at least 2 characters",
          },
          maxLength: {
            value: 80,
            message: "You can't have more than 80 characters",
          },
        })}
      />
      {errors.username && (
        <p className="formError">{errors.username.message}</p>
      )}

      <label htmlFor="email">Email:</label>
      <input
        type="email"
        name="email"
        {...register("email", {
          required: "This field is required !",
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
      {errors.email && <p className="formError">{errors.email.message}</p>}

      <label htmlFor="confirmemail">Confirm Email:</label>
      <input
        type="email"
        name="confirmemail"
        {...register("confirmemail", {
          required: "This field is required !",
          pattern: {
            value: /^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
            message: "Invalid email format",
          },
          maxLength: {
            value: 120,
            message: "You can't have more than 120 characters",
          },
          validate: (value) =>
            value === watch("email") || "Emails do not match",
        })}
      />
      {errors.confirmemail && (
        <p className="formError">{errors.confirmemail.message}</p>
      )}

      <label htmlFor="password">Password:</label>
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

      <label htmlFor="confirmpassword">Confirm password:</label>
      <input
        type="password"
        name="confirmpassword"
        {...register("confirmpassword", {
          required: "This field is required !",
          pattern: {
            value:
              /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,64}$/,
            message: "Invalid password format",
          },
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
      />
      {errors.confirmpassword && (
        <p className="formError">{errors.confirmpassword.message}</p>
      )}

      <button className="buttonForm" type="submit">
        Create
      </button>
    </form>
  );
}
