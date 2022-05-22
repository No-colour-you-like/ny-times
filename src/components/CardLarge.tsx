import { connect } from "react-redux";
import Button from "./common/Button";
import CardLink from "./common/CardLink";

const CardLarge = (props) => {
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
  let articleDate: string = "";

  if (props.mainArticle?.created_date?.length > 0) {
    const date: Date = new Date(props.mainArticle?.created_date);
    const day: number = date.getDate();
    const year: number = date.getFullYear();
    const monthNumber: number = date.getMonth();
    let month: string = "";

    monthNames.forEach((monthName, idx) => {
      if (idx === monthNumber) month = monthName;
    });

    articleDate = `${day} ${month}, ${year}`;
  }

  return (
    <div className="card-large">
      <div className="card-large__image">
        <img src={props.mainArticle?.multimedia?.[0].url} alt="card-large-img" />
      </div>
      <div className="card-large__additional">
        <Button className="card-large__theme">{props.mainArticle?.des_facet[0]}</Button>
        <span className="card-large__date">{articleDate}</span>
      </div>
      <h2 className="card-large__title">{props.mainArticle?.title}</h2>
      <p className="card-large__text">{props.mainArticle?.abstract}</p>
      <CardLink url={props.mainArticle?.url} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mainArticle: state.articles.articles[1]
  };
};

export default connect(mapStateToProps)(CardLarge);
