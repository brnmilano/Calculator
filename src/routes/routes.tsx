import { Calculator } from "../screens/Calculator";
import { Home } from "../screens/Home";
import { RouteProps } from "../types/routes";
import { calculator_path } from "./models";

export const routes: RouteProps[] = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: calculator_path,
    element: <Calculator />
  },
]