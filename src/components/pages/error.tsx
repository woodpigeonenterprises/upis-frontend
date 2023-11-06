import {useRouteError, isRouteErrorResponse} from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError();

    const getErrorMessage = () => {
        if (isRouteErrorResponse(error)) {
            return <i>{error.status} {error.statusText}</i>
        }

        if (error instanceof Error) {
            return <i>{error.message}</i>
        }

        return <i>Unknown Error</i>
    }


    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                {getErrorMessage()}
            </p>
        </div>
    );
}
