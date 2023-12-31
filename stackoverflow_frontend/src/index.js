import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Layout from "./Pages/Layout";
import ErrorPage from "./Pages/ErrorPage";
import QuestionList from "./Pages/QuestionList";
import QuestionCreator from "./Pages/QuestionCreator";
import QuestionUpdater from "./Pages/QuestionUpdater";
import AnswerList from './Components/AnswerTable/AnswerList';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <QuestionList />,
      },
      {
        path: "/create",
        element: <QuestionCreator />,
      },
      {
        path: "/answers/:id",
        element: <AnswerList />,
      },

    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
