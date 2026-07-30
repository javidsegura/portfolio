import { useRoutes } from "react-router-dom";
import { LanguageProvider } from "@/providers/LanguageProvider";
import { ROUTE_TREE } from "./routeTree";

export function AppRoutes() {
  const element = useRoutes(ROUTE_TREE);
  return <LanguageProvider>{element}</LanguageProvider>;
}
