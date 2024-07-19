/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useOutletContext, Navigate } from "react-router-dom";
import "./AddPlantPage.css";

export default function AddPlantPage() {
  const { user } = useOutletContext();

  const [wateringData, setWateringData] = useState();
  const [solarData, setSolarData] = useState();
  const apiURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (uploadData) => {
    console.info(uploadData);
    try {
      await axios.post(`${apiURL}/api/plant/add`, uploadData);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    try {
      axios.get(`${apiURL}/api/watering/`).then((response) => {
        const { data } = response;
        setWateringData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, [apiURL]);

  useEffect(() => {
    try {
      axios.get(`${apiURL}/api/solar/`).then((response) => {
        const { data } = response;
        setSolarData(data);
      });
    } catch (err) {
      console.error(err);
    }
  }, [apiURL]);

  const requiredFieldError = "This field is required !";

  return user?.role === "user" ? (
    <section>
      <h1 className="titre">Add a Plant</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="Form">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="title"
          {...register("name", {
            required: requiredFieldError,
            minLength: {
              value: 2,
              message: "You need at least 2 characters",
            },
          })}
        />
        {errors.name && <p className="formError"> {errors.name.message}</p>}

        <label htmlFor="surname">Nickname:</label>
        <input
          type="text"
          name="surname"
          {...register("surname", {
            required: requiredFieldError,
            minLength: {
              value: 2,
              message: "You need at least 2 characters",
            },
          })}
        />
        {errors.surname && (
          <p className="formError"> {errors.surname.message}</p>
        )}

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          name="place"
          {...register("place", {
            required: requiredFieldError,
            minLength: {
              value: 2,
              message: "You need at least 2 characters",
            },
          })}
        />
        {errors.place && <p className="formError"> {errors.place.message}</p>}

        {/*          TODO add a required message for the 2 following fields */}

        <label htmlFor="watering">Watering Frequency:</label>
        <select
          className="selectInput"
          name="watering"
          {...register("wateringFid", {
            required: requiredFieldError,
          })}
        >
          <option selected disabled>
            ----
          </option>
          {wateringData?.map((wf) => (
            <option key={wf.id} value={wf.id}>
              {`${wf.frequency}`}
            </option>
          ))}
        </select>
        {errors.watering && (
          <p className="formError"> {errors.watering.message}</p>
        )}

        <label htmlFor="solar">Solar Exposition:</label>
        <select
          className="selectInput"
          name="solar"
          {...register("solarEid", {
            required: requiredFieldError,
          })}
        >
          <option selected disabled>
            ----
          </option>
          {solarData?.map((sol) => (
            <option key={sol.id} value={sol.id}>
              {`${sol.exposition}`}
            </option>
          ))}
        </select>
        {errors.solar && <p className="formError"> {errors.solar.message}</p>}

        <label htmlFor="picture">Picture:</label>
        <input
          type="text"
          name="picture"
          {...register("picture", {
            required: requiredFieldError,
          })}
        />
        {errors.picture && (
          <p className="formError"> {errors.picture.message}</p>
        )}

        <button
          type="submit"
          className="buttonForm"
          {...register("userId")}
          value={user?.userid}
        >
          Add
        </button>
      </form>
    </section>
  ) : (
    <Navigate to="/" />
  );
}
