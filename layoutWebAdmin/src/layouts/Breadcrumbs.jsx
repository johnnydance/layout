import { Breadcrumbs, Link, Typography } from "@mui/material";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { sub } from "../routes/pathRoute";
import routes from "../routes/router";

const BreadcrumbsNav = () => {
  const location = useLocation();

  const basePath = sub === "" ? "" : sub;
  const currentPath = location.pathname.replace(basePath, "");
  const pathnames = currentPath.split("/").filter((x) => x);
  const query = new URLSearchParams(location.search);
  const nameQuery = query.get("name");

  const getRouteName = (url) => {
    const fullPath = sub + url;
    const match = routes.find(route => route.path === fullPath);
    return match?.name || url;
  };

  // Chỉ hiển thị nếu path có nhiều hơn 1 cấp (menu1/submenu1) hoặc có query name
  if (pathnames.length <= 1 && !nameQuery) return null;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {pathnames.map((_, index) => {
        const url = "/" + pathnames.slice(0, index + 1).join("/");
        const name = getRouteName(url);
        const isLast = index === pathnames.length - 1 && !nameQuery;

        return isLast ? (
          <Typography key={url} sx={{ color: 'primary.main' }}>
            {name}
          </Typography>
        ) : (
          <Link
            sx={{ color: 'primary.main' }}
            component={RouterLink}
            underline="hover"
            color="inherit"
            to={sub + url}
            key={url}
          >
            {name}
          </Link>
        );
      })}

      {nameQuery && <Typography>{nameQuery}</Typography>}
    </Breadcrumbs>
  );
};

export default BreadcrumbsNav;
