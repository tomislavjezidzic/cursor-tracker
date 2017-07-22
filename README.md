# Cursor tracker

This plugin tracks cursor position values. Like position on x or y axis and angle.<br/>
Returned values only applies to the called element.<br/>
The plugin is dependent on jQuery.

## Guide

### Example

HTML
```
<body>
   <div class="container">
           
   </div>
</body>
```

JS
```
$(".container").cursor('click', function(values){
    console.log(values.angle);
});
```
On click (or any other event) will be returned angle of the cursor.

### Attributes

<b>angle</b><br/>
-(deggress) in relation to the center of the element

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

<br/>
 Author: Tomislav Jezidžić<br/>
 Has contributed: Mario Novoselec<br/>
 Year: 2017<br/>
