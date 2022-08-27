import { render, h } from "preact";


function onLoad() {
  console.log("datasette-plugins: Registering datasette-nteract-data-explorer");

  let mountElement: HTMLElement | null = null;
  let jsonUrl: string | null = null;

  const jsonEl = document.querySelector(
    // This is available only after datasette version 61.1
    // Remove this once plugin can specify which version of
    // datasette it requires for correct operation.
    // 'link[type="application/json+datasette"]'
    '.export-links a[href*=json]'
  );

  if (jsonEl) {
    jsonUrl = jsonEl.getAttribute("href");
    mountElement = document.createElement("div");
    let table = document.querySelector("table.rows-and-columns");
    if (table && table.parentNode) {
      table.parentNode.insertBefore(mountElement, table);
    }
  }

  if (jsonUrl) {
    // reshape URL to include another query parameter
    jsonUrl += jsonUrl.indexOf("?") > -1 ? "&" : "?";
    jsonUrl += "_shape=array";

    // Lazy load for code splitting
    import("./DatasetteDataExplorer").then(function ({
      DatasetteDataExplorer,
    }) {
      if (mountElement && jsonUrl) {
        render(<DatasetteDataExplorer dataUrl={jsonUrl} />, mountElement);
      } else {
        console.log("Couldn't find mount point");
      }
    });
  }
}

// Register listeners
document.addEventListener("DOMContentLoaded", onLoad);

// Prototype: enable dispatch via a web CustomEvent as an alternative
if ((window as any).__IS_DATASETTE_LITE__) {
  document.addEventListener("DatasetteLiteScriptsLoaded", onLoad);
}
