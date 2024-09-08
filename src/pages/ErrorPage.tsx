import RContainer from "@/components/layout/RContainer";
import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div className="md:py-32 py-20">
      <RContainer>
        {error.status == 404 ? (
          <div id="error-page" className="text-center">
            <h1 className="md:text-5xl font-semibold text-4xl">
              Oops! Page not found! 😞
            </h1>
            <p className="mt-3">Sorry, an unexpected error has occurred.</p>
            <Link
              to={"/"}
              className="underline font-semibold text-lg mt-3 text-accentColor inline-block"
            >
              Back to Home
            </Link>
          </div>
        ) : (
          <div id="error-page" className="text-center">
            <h1 className="md:text-5xl font-semibold text-4xl">
              Oops! Something went wrong! 😞
            </h1>
            <p className="mt-3">Sorry, an unexpected error has occurred.</p>
            <p>
              <i>
                <strong>Error: </strong>
                {error.statusText || error.message}
              </i>
            </p>
            <Link
              to={"/"}
              className="underline font-semibold text-lg mt-3 text-accentColor inline-block"
            >
              Back to Home
            </Link>
          </div>
        )}
      </RContainer>
    </div>
  );
}
