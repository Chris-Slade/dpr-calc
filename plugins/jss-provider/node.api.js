import { ServerStyleSheets } from "@mui/material/styles";

export default () => ({
  beforeRenderToHtml: (App, { meta }) => {
    meta.muiSheets = new ServerStyleSheets();
    return meta.muiSheets.collect(App);
  },

  headElements: (elements, { meta }) => [
    ...elements,
    meta.muiSheets.getStyleElement(),
  ],
});
