import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
  const error = useRouteError();
  return (
    <>
      <h1>OOps! Something wrong happened! </h1>
      <h1>Error : {error.statusText}</h1>
    </>
  );
};
export default ErrorComponent;
