import axios from "axios";

const userLogout = async () => {
  try {
    await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/logout`, {
      withCredentials: true,
    });
  } catch (err) {
    console.error(err);
  }
};

export default userLogout;
