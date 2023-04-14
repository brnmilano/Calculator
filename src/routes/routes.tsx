import { Home } from "../screens/Home";
import { RouteProps } from "../types/routes";
import { home_path } from "./models";

export const routs: RouteProps[] = [
  {
    path: home_path,
    element: <Home />
  },
]