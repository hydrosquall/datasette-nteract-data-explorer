import { render, h } from "preact";

import { DatasetteDataExplorer } from "./DatasetteDataExplorer";

document.addEventListener("DOMContentLoaded", onLoad);

function onLoad()  {
    let mountElement, jsonUrl;

    const jsonEl = document.querySelector(".export-links a[href*=json]");

    if (jsonEl) {
      jsonUrl = jsonEl.getAttribute("href");
      // Create elements for adding graph tool to page
      mountElement = document.createElement("div");
      let table = document.querySelector("table.rows-and-columns");
      if (table && table.parentNode) {
        table.parentNode.insertBefore(mountElement, table);
      }
    }

    if (jsonUrl) {
      // Add _shape=array
      jsonUrl += jsonUrl.indexOf("?") > -1 ? "&" : "?";
      jsonUrl += "_shape=array";

      // ReactDOM.render(
      //   <DatasetteVega base_url={jsonUrl} onFragmentChange={onFragmentChange} />,
      //   visTool
      // );
      if (mountElement) {
        render(<DatasetteDataExplorer dataUrl={jsonUrl} />, mountElement);
      } else {
        console.log("Couldn't find a mount point");
      }
    }
}
