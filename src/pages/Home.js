import { Alert } from "bootstrap";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../api/appwrite";
import { getTodos } from "../api/hooks";
import { server } from "../api/server";
function Home() {
  const arr = ['1', ' 2', '3', '4', '5']
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);
  const navigate = useNavigate()
  useEffect(() => {
    const getTodo = async () => {
      try {
        const res = await getTodos();
        setList(res[0])
        console.log(list)
      } catch (err) {
        console.log(err);
      }
    };
  }, [])
  const listItems = list.map((ele, index) => (
    <li key={index}>{ele.todo}</li>
  ))
  const numbers = arr.map((ele, idex) => (
    <li key={idex}>{ele}</li>
  ))
  console.log(listItems)

  const handleLogout = async () => {
    try {
      const res = await api.logout();
      navigate('/login')
    } catch (err) {
      console.log(err);
    }
  };
  const getTodo = async () => {
    try {
      const res = await getTodos();
      setList(res)
      console.log(list)


    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let data = { todo: todo };
      await api.createDoc(server.collectionId, data);
      window.alert("thought added successfully");
      setTodo("");
      getTodo()
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className="home_container container-md">

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="todo" className="form-lable">
            Add a thought{" "}
          </label>
          <textarea
            name="todo"
            id="todo"
            cols="10"
            rows="3"
            value={todo}
            className="form-control"
            minLength={20}
            maxLength={180}
            onChange={(e) => setTodo(e.target.value)}
          ></textarea>
        </div>

        <button type="submit" value="Submit" className="btn btn-primary">
          Save Thought{" "}
        </button>
      </form>
      <br />
      <button className="btn btn-danger" id="logout" onClick={handleLogout}>
        logout{" "}
      </button>
      <button id="gettodobtn" onClick={getTodo} className='btn btn-primary'>getTodos</button>
      <div className="todo_container">
        <hr />
        <p className="todos">{listItems}</p>
      </div>

    </div>
  );
}

export default Home;
