function check(){
    var a = Number(document.getElementById('halo').value);
    var b = Number(document.getElementById('prog').value);
    var c = Number(document.getElementById('web').value);
    var d = Number(document.getElementById('szobeli').value);
    var ossz = document.getElementById('ertek').innerHTML = a+b+c+d;
    var pont = 0;
    var pictures = ["win.gif", "meh.jpeg", "lose.gif"];
	var messages = ["Jó munka!", "Rendben", "Többet kellet volna gyakorolni"];
	var score;

    if  (a > 4 || b > 4 || c > 4 || d > 3)
    {
        pont = 1;
       score = 2;
    }
    else if (ossz>=120) {
        pont = 5;
        score = 0;
    }
    else if (ossz>=90) {
        pont = 4;
        score = 0;
    }
    else if (ossz>=60) {
        pont = 3;
        score=1;
    }
    else if (ossz>=38) {
        pont = 2;
        score = 1;
    }
    else {
       pont = 1;
       score = 2;
   }

   document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("picture").src = pictures[score];
    var ja = Number(document.getElementById('jegy').innerHTML = pont);
    return false;


}
