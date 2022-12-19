/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router, Routes, Navigate } from "@solidjs/router";

import "./index.css";
import App from "./App";
import LetterList from "./components/LetterList/LetterList";
import LetterPage from "./components/LetterPage/LetterPage";

render(
  () => (
    <Router>
      <App />
    </Router>
  ),
  document.getElementById("root")
);
