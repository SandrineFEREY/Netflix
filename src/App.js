import "./App.css";
import data from "./assets/data.json";
import logo from "./assets/logo.png";
import Section from "./components/Section";

function App() {
  return (
    <div className="Movies">
      <header>
        <img src={logo} alt="" />
      </header>
      {data.map((movies, index) => {
        return (
          <div key={index}>
            {/* <h2>{movies.category}</h2>;   // normalement j'aurais du mettre key={index} dans <h2 key={index}> mais comme je ne dois en avoir q'un seul par div je le déplace sur la div principal

            <div className="Scroll">
              {movies.images.map((img, index) => {
                return <img key={index} src={img} alt="img" />;
              })}
              ;
            </div> */}

            <Section title={movies.category} pictures={movies.images} />
          </div>
        );
      })}
    </div>
  );
}

export default App;
