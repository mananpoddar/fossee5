
$(document).ready(function () {
  
  
d3.json("/data/users.json",(function(data_json)
{

  var bubbleChart = new d3.svg.BubbleChart({
    supportResponsive: true,
    //container: => use @default
    size: 600,
    //viewBoxSize: => use @default
    innerRadius: 600 / 3.5,
    //outerRadius: => use @default
    radiusMin: 50,
    //radiusMax: use @default
    //intersectDelta: use @default
    //intersectInc: use @default
    //circleColor: use @default
    data: {
      items: data_json,
      eval: function (item) {return "23";},
      classed: function (item) {return "443"}
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
            "fill": "white"
          },
          attr: {dy: "65px"},
          centralClick: function() {
            console.log("nice central click")
          }
        }
      },
      {
        name: "lines",
        options: {
          format: [
            {// Line #0
              textField: "name",
              classed: {count: true},
              style: {
                "font-size": "50px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                "padding":"5em",
                fill: "white"
              },
              attr: {
                dy: "0px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },
            {// Line #0
              textField: "id",
              classed: {count: true},
              style: {
                "font-size": "25px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "black"
              },
              attr: {
                dy: "50px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            },

               {// Line #0
                textField: "description",
                classed: {count: true},
                style: {
                  "font-size": "25px",
                  "font-family": "Source Sans Pro, sans-serif",
                  "text-anchor": "middle",
                  fill: "black"
                },
                attr: {
                  dy: "50px",
                  x: function (d) {return d.cx;},
                  y: function (d) {return d.cy;}
                }
              },

           

            {// Line #1
              textField: "category_type",
              classed: {text: true},
              style: {
                "font-size": "25px",
                "font-family": "Source Sans Pro, sans-serif",
                "text-anchor": "middle",
                fill: "white"
              },
              attr: {
                dy: "100px",
                x: function (d) {return d.cx;},
                y: function (d) {return d.cy;}
              }
            }
          ],
          centralFormat: [
            {// Line #0
              style: {"font-size": "100px"},
              attr: {}
            },
            {// Line #1
              style: {"font-size": "0px"},
              attr: {dy: "0px"}
            }
          ]
        }
      }]
  });






})
);
  
  
  
  
  
  
  
});