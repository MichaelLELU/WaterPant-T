/* eslint-disable react/jsx-props-no-spreading */
import axios from "axios";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

export default function AddPlantPage() {
  const { user } = useOutletContext();

  const [wateringData, setWateringData] = useState();
  const [solarData, setSolarData] = useState();
  const apiURL = import.meta.env.VITE_API_URL;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (uploadData) => {
    console.info(uploadData);
    try {
      await axios.post(`${apiURL}/api/plant/add`, uploadData);
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

  return (
    <section>
      <h1>Add a Plant</h1>
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
        {errors.name && <p> {errors.name.message}</p>}

        <label htmlFor="surname">Nickname:</label>
        <input
          type="text"
          name="surname"
          {...register("surname", {
            minLength: {
              value: 2,
              message: "You need at least 2 characters",
            },
          })}
        />
        {errors.surname && <p> {errors.surname.message}</p>}

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          name="place"
          {...register("place", {
            minLength: {
              value: 2,
              message: "You need at least 2 characters",
            },
          })}
        />
        {errors.place && <p> {errors.place.message}</p>}

        <label htmlFor="watering">Watering Frequency:</label>
        <select name="watering" {...register("wateringFid")}>
          {wateringData?.map((wf) => (
            <option key={wf.id} value={wf.id}>
              {`${wf.frequency}`}
            </option>
          ))}
        </select>

        <label htmlFor="solar">Solar Exposition:</label>
        <select name="solar" {...register("solarEid")}>
          {solarData?.map((sol) => (
            <option key={sol.id} value={sol.id}>
              {`${sol.exposition}`}
            </option>
          ))}
        </select>

        <label htmlFor="picture">Picture:</label>
        <input
          type="text"
          name="picture"
          {...register("picture", {
            required: requiredFieldError,
          })}
        />
        {errors.picture && <p> {errors.picture.message}</p>}

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
  );
}
