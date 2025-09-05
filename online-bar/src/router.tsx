// router.tsx
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./App";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Info } from "./pages/Info";

export const routerJSX = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cocktail/:id" element={<Info />} />
    </Route>
  )
);
