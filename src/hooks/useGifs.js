import { useEffect, useState } from "react";
import getGifs from "../services/getGifs";

export function useGifs({ keyword } = {keyword: null}) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const keywordtoUse = keyword || localStorage.getItem('lastKeyword') || 'random'

    getGifs({ keyword: keywordtoUse }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword)
    });
  }, [keyword]);
  return {loading, gifs}
}
