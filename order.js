function total() {
    var asburgerburger;
    var baconburger;
    var onionburger;
    var stemedburger;
    var coconutburger;
    var aaluburger;
    var sum;
    asburgerburger = parseInt(document.getElementById("qty1").value);
   baconburger = parseInt(document.getElementById("qty2").value);
    onionburger = parseInt(document.getElementById("qty3").value);
   stemedburger = parseInt(document.getElementById("qty4").value);
    coconutburger = parseInt(document.getElementById("qty5").value);
    aaluburger = parseInt(document.getElementById("qty6").value);
    sum =   (asburgerburger * 5) + ( baconburger * 7)+( onionburger * 9) + (stemedburger * 8) + ( coconutburger * 30) + ( aaluburger * 20) ;
    document.getElementById("total_cost").innerHTML = "USD "+sum+".00";

  }
  function submit() {
    alert("Your Order has been Submitted, Successfully!");
  }