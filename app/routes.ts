import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("other", "routes/other.tsx"),
    route("error", "routes/loaderError.tsx"),
] satisfies RouteConfig;
