/*!
 * Cursor tracker v 1.1
 * https://github.com/tomislavjezidzic/cursor-tracker
 *
 * Author: Tomislav Jezidžić
 * Has contributed: Mario Novoselec
 * 
 * Year: 2017
 */

(function ( $ ) {
    $.fn.cursor = function(options, values){
        $(this).on(options, function(e){
            e = e || window.event;
            var selectedElement = $(this),
                decimalNum = selectedElement.data('dec'),
                decPointValue;

            if (!decimalNum) {
                decPointValue = 2;
            } else{
                decPointValue = decimalNum;
            };

            // selected element for detecting cursor position
            var focusedElem = selectedElement.offset(),

            // focused element width and heigth
            focusedElemWidth = selectedElement.width(),
            focusedElemHeigth = selectedElement.height(),

            // focused element percentage value for every pixel (both width and heigth)
            focusedElemWidthPercentage = 100 / focusedElemWidth,
            focusedElemHeigthPercentage = 100 / focusedElemHeigth,

            // focused element position from the left and top of the page in px 
            elemFromXPos = focusedElem.left,
            elemFromYPos = focusedElem.top;

            allFunctions(e, focusedElemWidthPercentage, focusedElemHeigthPercentage, elemFromXPos, elemFromYPos, decPointValue, values);
        })
    }

    //event actions
    function allFunctions(e, focusedElemWidthPercentage, focusedElemHeigthPercentage, elemFromXPos, elemFromYPos, decPointValue, values) {

        //  cursor position in percentage
        var cursorXPosition = ((e.pageX - elemFromXPos) * focusedElemWidthPercentage).toFixed(decPointValue),
        cursorYPosition = ((e.pageY - elemFromYPos) * focusedElemHeigthPercentage).toFixed(decPointValue),

        //  cursor position in percentage but from center of the element (from -100% to 100%)
        cursorCenteringX = ((2 * cursorXPosition) - 100).toFixed(decPointValue),
        cursorCenteringY = (100 - (2 * cursorYPosition)).toFixed(decPointValue),

        //  cursor angle compared to the center of the element (degres)
        cursorPositionAngleDeg;

        //  if the cursor is beneth X axis values would go from -0 to -180 deg, but needed valus is from 0 to 360 deg
        if (cursorCenteringY < 0) {
            cursorPositionAngleDeg = (Math.atan2(cursorCenteringY, cursorCenteringX) * 180 / Math.PI + 360).toFixed(decPointValue);
        } else {
            cursorPositionAngleDeg = (Math.atan2(cursorCenteringY, cursorCenteringX) * 180 / Math.PI + 0).toFixed(decPointValue);
        }

        //  cursor angle compared to the center of the element (radians)
        var cursorPositionAngleRad = (cursorPositionAngleDeg * (Math.PI / 180)).toFixed(decPointValue);

        // cursor cornem position [left top, right top, left bottom, right bottom]
        var corner;

        //  cursor position view of corners
        if (cursorXPosition < 50 && cursorYPosition < 50) {
            corner = [1, 0, 0, 0]; //left top corner
        } else if (cursorXPosition > 50 && cursorYPosition < 50) {
            corner = [0, 1, 0, 0]; //right top corner
        } else if (cursorXPosition > 50 && cursorYPosition > 50) {
            corner = [0, 0, 0, 1]; //right bottom corner
        } else if (cursorXPosition < 50 && cursorYPosition > 50) {
            corner = [0, 0, 1, 0]; //left bottom corner
        } 
        
         var object = {
            "angle": cursorPositionAngleDeg,
            "angleRad": cursorPositionAngleRad,
            "xAxis": cursorXPosition,
            "yAxis": cursorYPosition,
            "xAxisCentered": cursorCenteringX,
            "yAxisCentered": cursorCenteringY,
            "corner": corner
        };
 
        // store values
        values(object);
 
        return object;
    };
}( jQuery ));