import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAdded, userRemoved } from "./usersSlice";
import { nanoid } from "@reduxjs/toolkit";

const Users = () => {
  const [name, setName] = useState("");
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleAddUser = () => {
    const trimmed = name.trim();
    if (trimmed) {
      const newUser = {
        id: nanoid(2),
        name: trimmed,
      };
      dispatch(userAdded(newUser));
      setName("");
    }
  };

  const handleDelete = (id) => {
    dispatch(userRemoved(id));
  };

  const submit = (e) => e.preventDefault();

  return (
    <div style={{ maxWidth: 400, margin: "auto" }}>
      <form onSubmit={submit} style={{ display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Имя пользователя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={handleAddUser}>Добавить</button>
      </form>

      <ul
        style={{
          marginTop: 20,
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <li
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 15px",
          }}
        >
          <span>Имя пользователя</span>
          <span>Действие</span>
        </li>
        {users.map((user) => (
          <li
            key={user.id}
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <span>{user.name}</span>
            <button onClick={() => handleDelete(user.id)}>Удалить</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
