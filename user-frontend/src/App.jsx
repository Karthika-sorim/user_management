import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    city: ""
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8087/api/users", user);
      alert("User saved successfully!");

      setUser({
        name: "",
        email: "",
        phone: "",
        city: ""
      });
    } catch (error) {
      alert("Error saving user");
      console.log(error);
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>User Details Form</h2>

        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={user.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter email"
          value={user.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter phone"
          value={user.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="Enter city"
          value={user.city}
          onChange={handleChange}
          required
        />

        <button type="submit">Save User</button>
      </form>
    </div>
  );
}

export default App;