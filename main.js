// Bài tập 1:
document.getElementById("chanle").onclick = function laySoChanLe() {
    var soChan = "";
    var soLe = "";
    for (i = 0; i < 100 ; i++){
      if(i % 2 === 0){
        soChan += i + " ";
      }else {
        soLe += i + " "
      }
    }
    document.getElementById("infosochan").innerHTML = "<p>Số chẵn: "+soChan+ "<br>" + "Số lẽ: "+ soLe +"</p>" 
}

// Bài tập 2:

document.getElementById("baitap2").onclick = function demSo(){
    var count = 0;
    for(i= 0 ; i < 1000; i++){
      if(i % 3 === 0){
          count++
      }
    }
    document.getElementById("infobaitap2").innerHTML = count
}

// Bài tập 3:

document.getElementById("baitap3").onclick =  function timSo (){
    var sum = 0;
    var i = 0;
    while (sum < 10000){
        i++
        sum = sum + i;
    }
    document.getElementById("infobaitap3").innerHTML = "<p>Số nguyên dương nhỏ nhất: "+ i +"</p>"
}
// Bài tập 4:
document.getElementById("baitap4").onclick = function lapX (){
  var tong = 0;
  var lap = 1
    var X = document.getElementById("numberX").value * 1
    var N = document.getElementById("numberN").value * 1

    for(i= 1; i <= N ; i++){
      lap *= X
      tong += lap 
    }
    document.getElementById("infobaitap4").innerHTML = "<p>Tong: "+ tong+"</p>"
}





// Bài tập 5:
document.getElementById("giaithua").onclick = function giaiThua(){
    var total = document.getElementById("txtNumber").value * 1
    var tong = 1;
    for(i = 1 ; i <= total; i++){
        tong *= i
    }
    document.getElementById("infogiaithua").innerHTML = "<p> Giai thừa: "+ tong +"</p>"
}

// Bài tập 6:

document.getElementById("baitap6").onclick = function baitap6(){
  var content = ""
  for(i = 0; i < 10 ; i++){
    if(i % 2 ==0){

    }else{

    }
  }
  document.getElementById("infobaitap6").innerHTML = content
  
}

// Bài tập 7:
document.getElementById("baitap7").onclick = function(){
  var soNguyenTo = document.getElementById("number7").value *1
  var songuyentola = 1;
  var  a =1;
  for(i = 1; i<= soNguyenTo; i++){
    if(soNguyenTo % i === 0){
      songuyentola ++;
    }
    if(soNguyenTo == 2){
      return true
    }
    else{
      return false
    }

  }
  document.getElementById("infobaitap7").innerHTML = "<p>Sô nguyên tố là"+songuyentola+" "+"</p>"
}