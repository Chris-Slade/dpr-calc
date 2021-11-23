import axios from "axios";
import path from "path";

export default {
  siteRoot: "https://chris-slade.github.io/",
  assetsPath: "/",
  basePath: "dpr-calc",
  entry: "index.tsx",
  getSiteData: () => ({
    title: "DPR Calculator",
  }),
  getRoutes: async () => {
    return [];
  },
  plugins: [
    "react-static-plugin-typescript",
    [
      require.resolve("react-static-plugin-source-filesystem"),
      {
        location: path.resolve("./src/pages"),
      },
    ],
    require.resolve("react-static-plugin-reach-router"),
    require.resolve("react-static-plugin-sitemap"),
    "jss-provider",
  ],
};
