import { AppSections } from "@dashboard/apps/urls";
import { matchPath, useLocation } from "react-router";

const isAppPath = (pathname: string) =>
  !!matchPath(pathname, {
    path: `${AppSections.appsSection}:id`,
  });

const isWelcomePath = (pathname: string) =>
  !!matchPath(pathname, {
    path: `${AppSections.welcomeSection}`,
  });

/*
 * Use detailed information about the current location.
 */
export const useLocationState = () => {
  const location = useLocation();

  return {
    isAppPath: isAppPath(location.pathname),
    isWelcomePath: isWelcomePath(location.pathname),
  };
};
