import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";
import { useGifs } from "./hooks/useGifs";
import Gif from "./components/Gif";
import Detail from "./components/Detail";
import StaticContext from "./context/StaticContext";
function App() {
  const { loading, gifs } = useGifs();

  return (
    <StaticContext.Provider value={{ name: "midudev", subscribe: true }}>
      <div className="App">
        <section className="App-header">
          {/* <div className="classs">
          {gifs.map(({ url, id, title }) => (
            <Gif key={id} title={title} url={url} id={id} />
          ))}
        </div> */}
          <h1>App</h1>
          <Link to="/gif/colombia">Gif de Colombia</Link>
          <Link to="/gif/ecuador">Gif de Ecuador</Link>
          <Link to="/gif/chile">Gif de Chile</Link>
          <Route component={ListOfGifs} path="/gif/:keyword" />
          <Route component={Detail} path="/gif/:id" />
          {/* <ListOfGifs keyword="panda" /> */}
        </section>
      </div>
    </StaticContext.Provider>
  );
}

export default App;
