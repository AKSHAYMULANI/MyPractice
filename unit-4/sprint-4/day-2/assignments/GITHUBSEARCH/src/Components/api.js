import axios from "axios";

function getUsers(params = {}) {
  return axios.get(`https://api.github.com/search/users`, {
    params: {
      q: params.q,
      page: params.page,
      per_page: params.limit
    }
  });
}

export default getUsers;
