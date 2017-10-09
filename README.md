# Cursor tracker

This plugin tracks cursor position values. Like position on x or y axis and angle.<br/>
Returned values only applies to the called element.<br/>
This plugin is dependent on jQuery.

### <a href="https://www.npmjs.com/package/cursor_tracker">npm module</a>

## Guide

### Example

<b>HTML</b>
```
<body>
   <div class="container">
           
   </div>
</body>
```

or

```
<body>
   <div class="container" data-dec="1">
           
   </div>
</body>
```
data-dec="1" means that returned value will be with one decimal point (format x.x). Default value is 2 (format x.xx).<br/>

<b>JS</b>
```
$(".container").cursor('click', function(values){
    console.log(values.angle);
});
```
Click (or any other event) will return cursor position value in degres.

### Attributes

<b>angle</b><br/>
-(degres) in relation to the center of the element

<b>angleRad</b><br/>
-(radians) in relation to the center of the element

<b>xAxis</b><br/>
-(percentages) cursor position in relation to the left top corner of the element

<b>yAxis</b><br/>
-(percentages) cursor position in relation to the left top corner of the element

<b>xAxisCentered</b><br/>
-(percentages) cursor position in relation to the center of the element

<b>yAxisCentered</b><br/>
-(percentages) cursor position in relation to the center of the element

<b>corner</b><br/>
-corner of the element<br/>
-returned value is in format [0, 0, 0, 0] and it represents [left top, right top, left bottom, right bottom]. A corner where the cursor is, will return the value 1 while other will be 0.

## <a href="https://codepen.io/tjezidzic/pen/brbMEv">DEMO</a>
## <a href="https://codepen.io/tjezidzic/pen/rzNdEq">DEMO 2</a>

<br/>
 Author: Tomislav Jezidžić<br/>
 Contributor: Mario Novoselec<br/>
 Year: 2017<br/>
 Size: ~4Kb<br/>
