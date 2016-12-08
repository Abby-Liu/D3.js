d3.csv("tuition.csv", function(data) {
var dataobj = { children: data };
var pack = d3.layout.pack();
pack = pack
.padding(2)
.size([600,800])
.sort(function(a,b) { b.value - a.value;});
var nodes = pack.nodes(dataobj);
nodes = nodes.filter(function(it) { return it.parent; }); //nodes包含所有國家總和，先過濾掉
var color = d3.scale.category20b();

d3.select("svg")
  .selectAll("circle")                 // 建立 circle 的 Selection
  .data(nodes)                         // 綁定 selection 與資料
  .enter()                             // 對於任何沒被對應而落單的資料 ...
  .append("circle")                    // 新增一個 circle 標籤
  .attr({
    cx: function(it) { return it.x; }, // 用 x,y 當圓心
    cy: function(it) { return it.y; },
    r : function(it) { return it.r; }, // 用 r 當半徑
    //fill: "#FFA5B6",                 // 內部填滿顏色
    fill: function(it) { return color(it.value); },
    stroke: "#fff",                    // 邊框顏色
  });

d3.select("svg").selectAll("text").data(nodes).enter()
  .append("text")
  .attr({
    x: function(it) { return it.x; },
    y: function(it) { return it.y; },
    "text-anchor": "middle",
  })
  .text(function(it)  { // 設定文字校名+學費
    return it.school+
    it.value/1000 + "k";
  });


});