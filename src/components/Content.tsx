import axios from "axios";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { useState, useEffect } from "react";

import CardLarge from "./CardLarge";
import CardMedium from "./CardMedium";
import CardSmall from "./CardSmall";

import { fetchArticles } from "../store/reducers/articles";

const Content = (props) => {
  console.log(props);

  useEffect(() => {
    props.fetchArticles();
  }, []);

  return (
    <main>
      <h1 className="main__title">Business</h1>
      <div className="main__content">
        <div className="large-block">
          <CardLarge />
        </div>
        <div className="medium-block">
          <h3 className="main__small-title">Latest News</h3>
          <div className="medium-block__content">
            {/* {props.latestNews.map((data) => {
              <CardMedium data={data} />;
            })} */}
            <CardMedium data={props.latestNews[0]} />;
          </div>
        </div>
        <div className="small-block">
          <h3 className="main__small-title">Fast Forward</h3>
          <CardSmall />
        </div>
      </div>
    </main>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    articles: state.articles.articles,
    latestNews: state.articles.latestNews
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchArticles: () => dispatch(fetchArticles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
