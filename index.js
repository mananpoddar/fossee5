$(document).ready(function() {
  d3.json("/data/users.json", function(data_json) {
    //data_json contains the json object having id,name,description and category type as an attribute
    var bubbleChart = new d3.svg.BubbleChart({
      supportResponsive: true,
      size: 600,
      innerRadius: 600 / 3.5,
      radiusMin: 50,
      data: {
        items: data_json,
        eval: function(item) {
          return "23";
        },
        classed: function(item) {
          return "443";
        }
      },
      plugins: [
        {
          name: "central-click",
          options: {
            text: "",
            style: {
              "font-size": "12px",
              "font-style": "italic",
              "font-family": "Source Sans Pro, sans-serif",
              //"font-weight": "700",
              "text-anchor": "middle",
              fill: "white"
            },
            attr: { dy: "100px" },
            centralClick: function() {
              console.log("nice central click");
            }
          }
        },
        {
          name: "lines",
          options: {
            format: [
              {
                // Line #0
                textField: "name",
                classed: { count: true },
                style: {
                  "font-size": "1px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "0px",
                  x: function(d) {
                    return d.cx;
                  },
                  y: function(d) {
                    return d.cy;
                  }
                }
              },

              {
                // Line #0
                textField: "id",
                classed: { count: true },
                style: {
                  "font-size": "1px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  padding: "1em",
                  fill: "black"
                },
                attr: {
                  dy: "11px",
                  x: function(d) {
                    return d.cx;
                  },
                  y: function(d) {
                    return d.cy;
                  }
                }
              },

              {
                // Line #0
                textField: "description",
                classed: { count: true },
                style: {
                  "font-size": "1px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "black"
                },
                attr: {
                  dy: "50px",
                  x: function(d) {
                    return d.cx;
                  },
                  y: function(d) {
                    return d.cy;
                  }
                }
              },

              {
                // Line #1
                textField: "category_type",
                classed: { text: true },
                style: {
                  "font-size": "0px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "white"
                },
                attr: {
                  dy: "10px",
                  x: function(d) {
                    return d.cx;
                  },
                  y: function(d) {
                    return d.cy;
                  }
                }
              }
            ],
            //styles here defines the properties of attributes in central circle
            centralFormat: [
              {
                // Line #0
                style: { "font-size": "100px" },
                attr: {}
              },
              {
                // Line #1
                style: { "font-size": "50px" },
                attr: { dy: "50px" }
              },
              {
                // Line #1
                style: { "font-size": "40px" },
                attr: { dy: "80px" }
              },
              {
                // Line #1
                style: { "font-size": "40px" },
                attr: { dy: "120px" }
              }
            ]
          }
        }
      ]
    });
  });
});
