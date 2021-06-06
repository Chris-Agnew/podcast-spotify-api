const query = "darude";

const fetchApi = async () => {
  const results = await fetch(
    `https://api.spotify.com/v1/search?q=${query}:&type=artist`,
    {
      headers: {
        Authorization:
          "Bearer BQBQ8-IlVTjHETfNfLi3kqskCEl-RIB7XG8UgI1Opd_q54LVIi5HiX9gBo0YTMKI5kmLfPkrLfmlxcxypYwfoTSMcM68YrZeJClahYTGyboXhfLWlKy0ilq1cPsCQOB6x36_i9q64rSNR3jAMiXM9QrXop4TbI32wCM",
      },
    }
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => console.log(data));
};

fetchApi();
