import React, { lazy, Suspense } from "react";
import { hot } from "react-hot-loader";
import "./App.scss";
import Loading from "./components/Loading";
import Error from "./components/Error";
import { useSelector } from "react-redux";
import { Project } from "./types";

const ProjectInput = lazy(() => import("./components/input/Input"));
const ProjectRender = lazy(() => import("./components/project/Project"));

interface State {
  error: string;
  project: Project;
}

const App = () => {
  const error = useSelector((state: State) => state.error);
  const project = useSelector((state: State) => state.project);
  console.log({project})
  return (
    <div className="container">
      <Suspense fallback={<Loading />}>
        <ProjectInput />
      </Suspense>
      <Suspense fallback={<Loading />}>
        {error && <Error error={error} />}
        {project.id && <ProjectRender project={project} />}
      </Suspense>
    </div>
  );
};

export default hot(module)(App);
