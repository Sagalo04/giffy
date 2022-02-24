import React, { useEffect, useState } from "react";
import { useGifs } from "../hooks/useGifs";
import getGifs from "../services/getGifs";
import Gif from "./Gif";

function ListOfGifs({ params }) {
  const { keyword } = params;
  const {loading,gifs} = useGifs({keyword})
  /*const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);*/

  if(loading) return <i>Cargando </i>
  return (
    <div>
      {gifs.map(({ url, id, title }) => (
        <Gif key={id} title={title} url={url} id={id} />
      ))}
    </div>
  );
}

export default ListOfGifs;
