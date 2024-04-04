import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loading from "../conponents/Loading";

const HomeFrame = lazy(() => import("../conponents/HomeFrame"));
const SinglePage = lazy(() => import("../pages/SinglePage"));

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loading />}>
              <HomeFrame />
            </Suspense>
          }>
          <Route
            path="/singlepage/:id"
            element={
              <Suspense fallback={<Loading />}>
                <SinglePage />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
