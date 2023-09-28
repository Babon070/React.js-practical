import React, { useState } from "react";
import "./Create.scss";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook, BsApple } from "react-icons/bs";
import { auth, provider } from "../../../firebase/firebaseconfig";
import { useHistory } from "react-router-dom";
import instance from "../../../api/instance";
import { useDispatch } from "react-redux";

const Create = () => {
  const dispach = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    avatar:
      "https://sun1-56.userapi.com/s/v1/ig1/eiKBiufKrF2lYLTeSjGYTLHlwDczW5qAUT0Fi8VXDWR2JK3gtkyZRmnABnfAOU0HdXVnE6Ri.jpg?size=400x400&quality=96&crop=99,99,793,793&ava=1",
  });
  console.log(formData);
  const history = useHistory();
  const createWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then(function (response) {
        dispach({
          user: response.user.multiFactor.user.displayName,
          type: "CREATE_NAME_WITH_GOOGLE",
        });console.log(response);
        if (response) history.push("/");
        console.log(response.user.multiFactor.user.displayName);  
      })
      .catch((err) => console.log(err));
  };

  const createUserWithEmail = (e) => {
    e.preventDefault();
    instance
      .post("/users", formData)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          dispach({ user: response?.data, type: "CREATE_USER" });
        }
        if (dispach) history.push("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth_create">
      <button onClick={createWithGoogle} className="auth_create-btn">
        {" "}
        <FcGoogle /> Google orqali xisob yaratish
      </button>
      <button className="auth_create-btn">
        <BsFacebook />
        Facebook orqali xisob yaratish
      </button>
      <button className="auth_create-btn">
        <BsApple />
        Apple orqali xisob yaratish
      </button>
      <hr />
      <form className="auth_form" onSubmit={createUserWithEmail}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />{" "}
        <input
          type="text"
          placeholder="Password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
        {/* <input
          type="image"
          placeholder="Avatar"
          onChange={(e) => setFormData({ ...formData, password: e.target.value })
          }
        /> */}
        <button type="submit">Xisob yaratish!</button>
      </form>
    </div>
  );
};

export default Create;
