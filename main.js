paragraph_1_array = [];

var para1 = document.getElementById("para1_inputbox1").value;
var para2 = document.getElementById("para2_inputbox2").value;
var para3 = document.getElementById("para3_inputbox3").value;
var para4 = document.getElementById("para4_inputbox4").value;
var para5 = document.getElementById("para5_inputbox5").value;
var para6 = document.getElementById("para6_inputbox6").value;

paragraph_1_array.push(para1);
paragraph_1_array.push(para2);
paragraph_1_array.push(para3);
paragraph_1_array.push(para4);
paragraph_1_array.push(para5);
paragraph_1_array.push(para6);

inputs.join(". ");

for (var j=1; j<=6; j++)
{
    inputs.push(document.getElementById("para1_inputbox_"+j).value);
}
document.getElementById("showparagraph1").innerHTML = inputs.join(". ");