import { RouterProvider } from "react-router-dom";

import { router } from "@router/Index";

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
