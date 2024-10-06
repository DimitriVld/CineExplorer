import axios from 'axios';

export const apiGet = (uri, params, responseType) => {
  return new Promise((resolve, reject) => {
    const headers = {};
    headers.Authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwOWI2ZDY2N2U2MzdkODUyOGFmNDIxM2RiZGViNTZiZCIsIm5iZiI6MTcyODE2NDIzMy41MjU2NDIsInN1YiI6IjY3MDEyY2QwYzlhMTBkNDZlYTdkMDliMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qGq9XhoUmzhGEm9LuBzq7ghiIWaRmBAUgmFe-oxr-RM';

    axios.get(`https://api.themoviedb.org/${uri}?api_key=09b6d667e637d8528af4213dbdeb56bd`, {
      params,
      withCredentials: true,
      responseType: responseType,
    })
      .then(({data}) => {
        resolve(data);
      })
      .catch((error) => {
        let status;
        let responseData;

        if (error.response) {
          status = error.response.status;
          responseData = error.response.data;
        } else {
          status = 0;
          responseData = error;
        }

        reject({
          status,
          data: responseData,
        });
      });
  });
};
