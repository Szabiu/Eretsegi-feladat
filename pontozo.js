function check(){
    var a = Number(document.getElementById('haloi').value);
    var b = Number(document.getElementById('progi').value);
    var c = Number(document.getElementById('webi').value);
    var d = Number(document.getElementById('szo').value);
    var ossz = document.getElementById('eredmeny').innerHTML = a+b+c+d;
    var pont = 0;


    if (ossz>=120) {
        pont = 5;
    }
    else if (ossz>=90) {
        pont = 4;
    }
    else if (ossz>=60) {
        pont = 3;
    }
    else if (ossz>=38) {
        pont = 2;
    }
    else {
       pont = 1;
   }

    var ja = Number(document.getElementById('mennyi').innerHTML = pont);
    return false;


}


