# My first D3.js test:

In this project, we will learn...: 
 1. Basic operation
 2. Create a bubble chart and bar chart to show the tuition defference betweem each university.
## Include D3.js
`<script src="https://d3js.org/d3.v3.min.js"></script>`

## Basic Operation Example

select objects:
`var root = d3.select("body");
`var span = d3.select("body").select("h3").select("span");`

set the content or style
`span.text("hello world").style("font-size", "24px");`
data binding,(select object "students"
`d3.select("body").selectAll("div").data(students);`

## Implementation of Bar Chart 長條圖實作
### tuition.js
```tuition.js
tuition.js (部分資料):
var tuition = [
	["國立暨南大學", 25547]
	["國立陽明大學", 38380],
	["國立高雄師範大學", 27590],
	["國立中央大學", 28440],
	["國立台灣大學", 29260],
	["國立台北大學", 26540],
	["國立台灣海洋大學", 27810],
	["大葉大學", 51020],
	["義守大學", 53540],
	["佛光大學", 48000],
	["世新大學", 54450],
	["高雄醫學大學", 70130],
	["台北醫學大學", 70450]
];
```

### HTML
```bar.html
<script src="http://d3js.org/d3.v3.min.js"></script>
<script src="tuition.js"></script>
<link rel="stylesheet" type="text/css" href="index.css">
<meta charset="UTF-8">
<svg width="100%" height="100px" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid"></svg>
```
### JS
```javascript
d3.select("body").selectAll("div").data(tuition);
var div_data_bind = d3.select("body").selectAll("div").data(tuition);
//對沒有物件可配對的資料 建立html tag "div"
div_set = div_data_bind.enter().append("div");
//刪除這些沒物件可配對的資料
div_data_bind.exit().remove();
//放資料
div_set.text(function(d,i) {
	return i+1 + d[0];
});

//加入這些改變樣式 看起來像長條圖
div_set.style("height", "25px");
  div_set.style("background", "#FFA069");
  div_set.style("margin", "5px");
  div_set.style("width", function(d,i) {
    return (d[1] / 100)+"px";
  });
```
