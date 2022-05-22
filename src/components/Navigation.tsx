import axios from "axios";
import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchNavigation } from "../store/reducers/navigation";

const Navigation = (props) => {
  const monthNames: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const fullDate: Date = new Date();
  const dayNumber: number = fullDate.getDate();
  const dayOfTheWeek = fullDate.getDay();
  const year: number = fullDate.getFullYear();
  const monthNumber: number = fullDate.getMonth();
  let month: string = "";
  let dayName: string = "";

  monthNames.forEach((monthName, idx) => {
    if (idx === monthNumber) month = monthName;
  });

  days.forEach((day, idx) => {
    if (idx === dayOfTheWeek) dayName = day;
  });

  const today = `${dayNumber} ${month}, ${year}`;

  useEffect(() => {
    props.fetchNavigation();
  }, []);

  return (
    <div className="navigation">
      <div className="navigation__time">
        <span className="navigation__time-day">{dayName}</span>
        <span>{today}</span>
      </div>
      <nav className="navigation__nav">
        <ul className="navigation__menu">
          {props.navigation.map((item) => {
            return (
              <li key={item.id} className="navigation__item">
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    navigation: state.navigation.navigation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNavigation: () => dispatch(fetchNavigation())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
