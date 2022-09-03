import axios from "axios";

export function getTodos() {
  return axios.get("https://masai-servrr.herokuapp.com/posts/");
}

export function addTodo({ Name,
  Hospital,
  Specialisation,
  Salary }) {
  return axios({
    url: `https://masai-servrr.herokuapp.com/posts/`,
    method: "POST",
    data: {
      Name,
      Hospital,
      Specialisation,
      Salary

    }
  });
}