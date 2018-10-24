const clusterNetworkConstants = {
  _networkGraphAttrbuteID: "patient_attribute_schema",
  _networkShapeOrdering: [
    "circle",
    "square",
    "hexagon",
    "diamond",
    "cross",
    "octagon",
    "ellipse",
    "pentagon"
  ]
};

var _networkNodeAttributeID = "patient_attributes";
var _networkNodeIDField = "hivtrace_node_id";
var _networkMissing = "missing";
var _networkMissingOpacity = "0.1";
var _networkMissingColor = "#999";
var _networkContinuousColorStops = 9;
var _networkShapeOrdering = [
  "circle",
  "square",
  "hexagon",
  "diamond",
  "cross",
  "octagon",
  "ellipse",
  "pentagon"
];
var _defaultFloatFormat = d3.format(",.2r");
var _defaultPercentFormat = d3.format(",.3p");
var _defaultDateFormats = [
  d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ"),
  d3.time.format("%Y-%m-%dT%H:%M:%S.%LZ")
];
var _defaultDateViewFormat = d3.time.format("%B %d, %Y");
var _defaultDateViewFormatShort = d3.time.format("%B %Y");
var _defaultDateViewFormatSlider = d3.time.format("%Y-%m-%d");
var _networkDotFormatPadder = d3.format("08d");

var _networkCategoricalBase = [
  "#a6cee3",
  "#1f78b4",
  "#b2df8a",
  "#33a02c",
  "#fb9a99",
  "#e31a1c",
  "#fdbf6f",
  "#ff7f00",
  "#cab2d6",
  "#6a3d9a",
  "#ffff99",
  "#b15928"
];

var _networkCategorical = [];

_.each([0, -0.5, 0.5], function(k) {
  _.each(_networkCategoricalBase, function(s) {
    _networkCategorical.push(
      d3
        .rgb(s)
        .darker(k)
        .toString()
    );
  });
});

var _maximumValuesInCategories = _networkCategorical.length;

var _networkSequentialColor = {
  2: ["#feb24c", "#e31a1c"],
  3: ["#ffeda0", "#feb24c", "#f03b20"],
  4: ["#ffffb2", "#fecc5c", "#fd8d3c", "#e31a1c"],
  5: ["#ffffb2", "#fecc5c", "#fd8d3c", "#f03b20", "#bd0026"],
  6: ["#ffffb2", "#fed976", "#feb24c", "#fd8d3c", "#f03b20", "#bd0026"],
  7: [
    "#ffffb2",
    "#fed976",
    "#feb24c",
    "#fd8d3c",
    "#fc4e2a",
    "#e31a1c",
    "#b10026"
  ],
  8: [
    "#ffffcc",
    "#ffeda0",
    "#fed976",
    "#feb24c",
    "#fd8d3c",
    "#fc4e2a",
    "#e31a1c",
    "#b10026"
  ],
  9: [
    "#ffffcc",
    "#ffeda0",
    "#fed976",
    "#feb24c",
    "#fd8d3c",
    "#fc4e2a",
    "#e31a1c",
    "#bd0026",
    "#800026"
  ]
};

var _networkPresetColorSchemes = {
  trans_categ: {
    "MSM-Male": "#1f78b4",
    "MSM-Unknown sex": "#1f78b4",
    "Heterosexual Contact-Male": "#e31a1c",
    "Heterosexual Contact-Female": "#e31a1c",
    "Heterosexual Contact-Unknown sex": "#e31a1c",
    "IDU-Male": "#33a02c",
    "MSM & IDU-Male": "#33a02c",
    "IDU-Female": "#33a02c",
    "IDU-Unknown sex": "#33a02c",
    "Other/Unknown-Male": "#636363",
    "Other/Unknown-Female": "#636363",
    "Other-Male": "#636363",
    "Other-Female": "#636363",
    Missing: "#636363",
    "": "#636363",
    "Other/Unknown-Unknown sex": "#636363",
    Perinatal: "#ff7f00",
    "Other/Unknown-Child": "#ff7f00",
    "Other-Child": "#ff7f00"
  },
  race: {
    Asian: "#1f77b4",
    "Black/African American": "#bcbd22",
    "Hispanic/Latino": "#9467bd",
    "American Indian/Alaska Native": "#2ca02c",
    "Native Hawaiian/Other Pacific Islander": "#17becf",
    "Multiple Races": "#e377c2",
    "Unknown race": "#999",
    Missing: "#999",
    missing: "#999",
    White: "#d62728"
  }
};

var _networkPresetShapeSchemes = {
  birth_sex: {
    Male: "square",
    Female: "ellipse",
    Missing: "diamond",
    missing: "diamond",
    Unknown: "diamond"
  },
  race: {
    Asian: "hexagon",
    "Black/African American": "square",
    "Hispanic/Latino": "triangle",
    "American Indian/Alaska Native": "pentagon",
    "Native Hawaiian/Other Pacific Islander": "octagon",
    "Multiple Races": "diamond",
    "Unknown race": "diamond",
    Missing: "diamond",
    missing: "diamond",
    White: "ellipse"
  },
  current_gender: {
    Male: "square",
    Female: "ellipse",
    "Transgender-Male to Female": "hexagon",
    "Transgender-Female to Male": "pentagon",
    "Additional Gender Identity": "diamond",
    Unknown: "diamond",
    Missing: "diamond",
    missing: "diamond"
  }
};

module.exports = clusterNetworkConstants;
