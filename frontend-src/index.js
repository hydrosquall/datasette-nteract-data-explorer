var $lQO9Q$preact = require("preact");
var $lQO9Q$nteractdataexplorer = require("@nteract/data-explorer");
var $lQO9Q$swchelpers = require("@swc/helpers");
var $lQO9Q$preacthooks = require("preact/hooks");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}





var $d516e6c01c8d70d3$var$basicData = {
    schema: {
        fields: [
            {
                name: "index",
                type: "integer"
            },
            {
                name: "param_session",
                type: "object"
            }, 
        ],
        primaryKey: [
            "index"
        ]
    },
    data: [
        {
            index: 0,
            param_session: [
                {
                    name: "foo"
                },
                {
                    name: "foo"
                }, 
            ]
        }, 
    ]
};
var $d516e6c01c8d70d3$var$dataFrameToFrictionlessSpec = function(table) {
    if (table.length === 0) return null;
    // we assume all rows have same keys
    var fieldNames = Object.keys(table[0]);
    var fields = fieldNames.map(function(col) {
        if (table.every(function(r) {
            return typeof r[col] === 'number' && Number.isInteger(r[col]);
        })) return {
            name: col,
            type: "integer"
        };
        if (table.every(function(r) {
            return typeof r[col] === "number";
        })) return {
            name: col,
            type: "number"
        };
        // if (col.meta.type === "datetime") {
        //   return { name: id, type: "datetime" };
        // }
        // Resolve upstream bug with nteract to fix table display
        // https://github.com/nteract/data-explorer/pull/41
        // if (col.kind === "string") {
        //   return { name: id, type: "string" };
        // }
        return {
            name: col,
            type: "string"
        };
    // if (col.kind === "object" && col.meta.type === "unknown") {
    //   return { name: id, type: "any" };
    // }
    // return { name: id, type: "any" };
    });
    var data = {
        schema: {
            fields: fields,
            primaryKey: []
        },
        data: table
    };
    return data;
};
var $d516e6c01c8d70d3$export$8733d631a87658b = function(props) {
    console.log("DatasetteDataExplorer", props);
    // fetch data from props.dataUrl in a useEffect hook
    var ref = $lQO9Q$swchelpers.slicedToArray($lQO9Q$preacthooks.useState(null), 2), data = ref[0], setData = ref[1];
    $lQO9Q$preacthooks.useEffect(function() {
        fetch(props.dataUrl).then(function(response) {
            return response.json();
        }).then(function(json) {
            // const rawData = json;
            var parsedData = $d516e6c01c8d70d3$var$dataFrameToFrictionlessSpec(json);
            setData(parsedData);
        });
    }, [
        props.dataUrl
    ]);
    console.log({
        data: data
    });
    return /*#__PURE__*/ $lQO9Q$preact.h("div", {
        className: "DatasetteDataExplorer"
    }, data && /*#__PURE__*/ $lQO9Q$preact.h(($parcel$interopDefault($lQO9Q$nteractdataexplorer)), {
        data: data !== null && data !== void 0 ? data : $d516e6c01c8d70d3$var$basicData
    }), ";");
};


var $86f42a750466757e$var$rootElement = document.getElementById("root");
document.addEventListener("DOMContentLoaded", function() {
    var mountElement, jsonUrl;
    var jsonEl = document.querySelector(".export-links a[href*=json]");
    if (jsonEl) {
        jsonUrl = jsonEl.getAttribute("href");
        // Create elements for adding graph tool to page
        mountElement = document.createElement("div");
        var table = document.querySelector("table.rows-and-columns");
        if (table && table.parentNode) table.parentNode.insertBefore(mountElement, table);
    }
    if (jsonUrl) {
        // Add _shape=array
        jsonUrl += jsonUrl.indexOf("?") > -1 ? "&" : "?";
        jsonUrl += "_shape=array";
        if (mountElement) $lQO9Q$preact.render(/*#__PURE__*/ $lQO9Q$preact.h($d516e6c01c8d70d3$export$8733d631a87658b, {
            dataUrl: jsonUrl
        }), mountElement);
        else console.log("Couldn't find anybody");
    // ReactDOM.render(
    //   <DatasetteVega base_url={jsonUrl} onFragmentChange={onFragmentChange} />,
    //   visTool
    // );
    }
});


//# sourceMappingURL=index.js.map
