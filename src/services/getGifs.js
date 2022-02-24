const apiKey = "T6zYXBw2UqpahW6HOy0G61FxkhIrOBBm";

const getGifs = ({ keyword = "morty" } = {}) => {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map((singlegif) => {
          const { title, id } = singlegif;
          const { url } = singlegif.images.downsized_medium;
          return {title, id, url};
        });
        console.log(gifs);
        return gifs;
      }
    });
};

export default getGifs;
