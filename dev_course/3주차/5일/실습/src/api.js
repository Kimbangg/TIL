const API_END_POINT = "https://kdt.roto.codes";

export const request = (url) => {
  return fetch(`${API_END_POINT}${url.indexOf("/") === 0 ? url : `/${url}`}`)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(`${res.status} : Error occur!! `);
    })
    .catch((e) => alert(e.message));
};
