import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Home, Trips, Error, NotFound } from "@pages/Index";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error />} />
      <Route path="/trips" element={<Trips />} errorElement={<Error />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);
