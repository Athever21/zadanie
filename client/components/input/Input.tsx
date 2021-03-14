import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./Input.scss";

const Input = () => {
  const [projectId, setProjectId] = useState("");
  const dispatch = useDispatch();

  const genreate = async () => {
    dispatch({ type: "CLEAR_ERROR" });
    dispatch({ type: "CLEAR_PROJECT" });
    try {
      let url;
      if (!projectId) {
        const { id } = await (
          await fetch("https://recruitment01.vercel.app/api/init")
        ).json();
        setProjectId(id);
        url = `https://recruitment01.vercel.app/api/project/${id}`;
      } else {
        url = `https://recruitment01.vercel.app/api/project/${projectId}`;
      }
      const res = await axios.get(url);

      dispatch({
        type: "ADD_PROJECT",
        data: res.data,
      });
    } catch (err) {
      let error = err.response ? err.response.data : { message: err.message };
      if (err.status === 404) {
        error = { message: "Project not found" };
      }
      dispatch({
        type: "ERROR",
        data: error.message ? error.message : error.error.message,
      });
    }
  };

  return (
    <div className="project-input">
      <div>
        <label htmlFor="project-id">Project Id:</label>
        <input
          id="project-id"
          value={projectId}
          onChange={({ target }) => setProjectId(target.value)}
          placeholder="Leave empty for random..."
        />
      </div>
      <button onClick={genreate}>Generate</button>
    </div>
  );
};

export default Input;
