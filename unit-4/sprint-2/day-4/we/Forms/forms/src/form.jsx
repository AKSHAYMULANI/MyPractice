import { useState } from "react";

const initFormState = {
  name: "",
  email: "",
  password: "",
  country: "IN",
  maritalStatus: false
};

function Forms() {
  const [users, setUsers] = useState([]);
  const [formState, setFormData] = useState(initFormState);

  const handleChange = (e) => {
    const { name: key, value, type, checked } = e.target;
    const val = type === "checkbox" ? checked : value;
    setFormData({
      ...formState,
      [key]: val
    });
  };
  console.log(formState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, formState]);
    setFormData(initFormState);
  };
  console.log(users);
  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            value={formState.name}
            name="name"
            onChange={handleChange}
            placeholder="name"
          />
        </div>
        <div>
          <input
            value={formState.email}
            name="email"
            onChange={handleChange}
            placeholder="email"
          />
        </div>
        <div>
          <input
            value={formState.password}
            name="password"
            onChange={handleChange}
            placeholder="password"
          />
        </div>
        <div>
          <select
            value={formState.country}
            name="country"
            onChange={handleChange}
            placeholder="Select Country"
          >
            <option value="In">India</option>
            <option value="USA">USA</option>
            <option value="CDN">Canada</option>
          </select>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={formState.maritalStatus}
              name="maritalStatus"
              onChange={handleChange}
            />
            Married
          </label>
        </div>
        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Forms;
