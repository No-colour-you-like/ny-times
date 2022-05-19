import Header from "./Header";
import Navigation from "./Navigation";
import CardLarge from "./CardLarge";
import CardMedium from "./CardMedium";
import CardSmall from "./CardSmall";

const App = () => {
  return (
    <div className="app">
      <div className="dashboard">
        <div className="container">
          <Header />
          <Navigation />
          <main>
            <h1 className="main__title">Business</h1>
            <div className="main__content">
              <div className="large-block">
                <CardLarge />
              </div>
              <div className="medium-block">
                <h3 className="main__small-title">Latest News</h3>
                <div className="medium-block__content">
                  <CardMedium />
                  <CardMedium />
                </div>
              </div>
              <div className="small-block">
                <h3 className="main__small-title">Fast Forward</h3>
                <CardSmall />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default App;
