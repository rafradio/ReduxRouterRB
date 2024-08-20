import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";
import {Provider} from "react-redux";
import {store} from './store/store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <UseUrlParams />,
      },
    ],
  },
]);

function UseUrlParams() {
  let params = useParams();
  const nameOfProject = ["R-Base", "Checker"];
  return (
    <>
      <Contact projName={nameOfProject[params.contactId-1]}/>  
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
