# Cursor tracker

 Author: Tomislav Jezidžić<br/>
 Has contributed: Mario Novoselec<br/>
 Year: 2017<br/>
 
## Guide

This plugin tracks cursor position values like position on x or y axis od angle.<br/>
Returned values only applies to the called element.


## Example

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
On click (or any other event) is returned angle of the cursor.
