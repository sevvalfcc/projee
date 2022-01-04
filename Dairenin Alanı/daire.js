function circumference()
{
	var radius = (document.circleOne.radiusOne.value);
	var circumference = 2 * radius * Math.PI;	document.circleOne.circumferenceAnswer.value=circumference;
}

function area()
{
	var radiusArea = (document.circleTwo.radiusTwo.value);
	var area = Math.pow(radiusArea, 2) * Math.PI;
	document.circleTwo.areaAnswer.value=area;
}

function isNumberKey(evt)
      {
         var charCode = (evt.which) ? evt.which : event.keyCode
         if (charCode > 31 && (charCode < 48 || charCode > 57))
            return false;

         return true;
      }

function enterKeyPressCirc(evt)
    {
        if (typeof evt == 'undefined' && window.event) { evt = window.event; }
        if (evt.keyCode == 13)
        {
            document.getElementById("btnCalcCircum").click();
        }
    }

function enterKeyPressArea(evt)
    {
        if (typeof evt == "undefined" && window.event) { evt = window.event; }
        if (evt.keyCode == 13)
        {
            document.getElementById("btnCalcArea").click();
        }
    }
