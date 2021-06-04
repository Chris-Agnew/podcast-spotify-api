const fetchApi = async () => {
  const results = await fetch(
    "https://api.spotify.com/v1/browse/new-releases",
    {
      headers: {
        Authorization:
          "Bearer BQBf4VaIJKCe4ZHQ8fNBtO92swzUGgw4eXq3jQx_3yvoSuUiB6Hrr9bhFZVbDXJwAOsAPYOpp3S8t5x_jco_H2EkY6t1U2FVMXT5MZDVsHUwivoKtUu_VXf49JVAIPqm6u_vvwineH7lBhY2L0hxfqJzwc4PcSvkLKo",
      },
    }
  )
    .then((data) => {
      return data.json();
    })
    .then((data) => console.log(data));
};

fetchApi();
