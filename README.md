# setAlpha
Set both the Alpha Transparency of Text and Backgrounds maintaining inheritance overrides

<pre>
var element = document.getElementById("test");
element.style.backgroundColor = "#000"; /* you need to set the background color first*/
element.setBackgroundAlpha(50); /* 50% transparency */
</pre>

You can set all backgrounds and text to a default color by a rule like this

<pre>
*{
background-color: #FFF;
color: #000;
}
</pre>

Any element nested can also be change to it's own alpha transparency which was not possible with opacity css rule
