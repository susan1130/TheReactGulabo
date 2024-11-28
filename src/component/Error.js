import { useRouteError } from "react-router-dom";
const Error = () => {
    const errs = useRouteError();
    console.log(errs);
    return(
        <div>
            <h1>Oops !!!</h1>
            <h2>Looks like something went wrong.</h2>
            <h3>{errs.error.message}</h3>
            <h3>{errs.statusText}</h3>
        </div>
    )
};
export default Error;