import { Navigate, useOutletContext } from "react-router-dom";
import Calendar from "react-calendar";
/* import "react-calendar/dist/Calendar.css"; */
import "./Calendar.css";

export default function CalendarPage() {
  const { user } = useOutletContext();

  return user?.role === "user" ? (
    <section className="calendarContainer">
      <Calendar className="calendar" />
    </section>
  ) : (
    <Navigate to="/" />
  );
}
