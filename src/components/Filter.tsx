import { useState, useEffect } from "react";
import SearchSvg from "./Svg/SearchSvg";

const Filter = ({ handleFilterTransform }) => {
  const [isShowedFilter, setIsShowedFilter] = useState(false);

  useEffect(() => {
    handleFilterTransform(isShowedFilter);
  }, [isShowedFilter]);

  const toggleFilter = () => {
    setIsShowedFilter(!isShowedFilter);
  };

  return (
    <div className="filter">
      <div className="filter__aside">
        <div onClick={toggleFilter} className="filter__dots">
          ...
        </div>
        <div onClick={toggleFilter} className="filter__sticks">
          <div className="filter__stick"></div>
          <div className="filter__stick"></div>
        </div>
      </div>
      <div className={`filter__main ${isShowedFilter ? "show-filter" : ""}`}>
        <div className="filter__search">
          <SearchSvg className="filter__search-icon" />
          <input type="text" className="filter__input" placeholder="Search article..." />
        </div>
      </div>
    </div>
  );
};

export default Filter;
