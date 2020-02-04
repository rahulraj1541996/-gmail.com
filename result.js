function getResult()
{
    var grade = "";
    var e = parseInt(document.getElementById('txtEnglish').value);
    var g= parseInt(document.getElementById('txtGK').value);
    var m= parseInt(document.getElementById('txtScience').value);
     var totalMarks;
    var percentageMarks;
    var max;                            
            if(e.isInteger() && g.isInteger()&& m.isInteger())
            {
                totalMarks = e+g+m;
                percentageMarks = totalMarks/3;
                if(e>g&&e>m)
                {
                    max=e;
                }
                if(g>e&&g>m)
                {
                    max=g;
                }
                if(m>e&&m>g)
                {
                    max=m;
                }
                //document.getElementById("highest").value=max;
                document.forms['form1']['txtTotalMarks'].value=total;
            }

            else{
                alert("Please enter the valid number");
            }
            switch(
            (percentageMarks > 60 && percentageMarks <= 100) ? 1 : 
            (percentageMarks > 50 && percentageMarks < 60) ? 2 : 
            (percentageMarks > 40 && percentageMarks < 50) ? 3 : 0 
          )
            {
                case 1 :grade = "A";break;
                case 2 :grade = "B"; break;
                case 3 :grade = "C";break;
                case 0 :grade = "D"; break;
            }
    document.getElementById('txtTotalMarks').value = totalMarks;
    document.getElementById('txtpercentageMarks').value = percentageMarks;
    document.getElementById('txtpercentageMarks').value = max;
    document.getElementById('txtGrade').value = grade;
}
function showPrompt()
{
    prompt("Welcome, please enter your name to continue...")
}