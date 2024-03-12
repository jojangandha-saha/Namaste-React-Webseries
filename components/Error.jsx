import { useRouteError } from "react-router-dom";
const Error = function () {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>
      <span>
        <h2>{err.data}</h2>
        <h3>
          {err.status} : {err.statusText}
        </h3>
      </span>
    </div>
  );
};

export default Error;
