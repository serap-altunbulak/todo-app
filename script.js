



function myFunction() {

    var x = document.getElementsByClassName("to_do_list")[0].childElementCount;
    var itm = document.getElementsByClassName("input_area");

    var cln = itm[0].cloneNode(true);

    document.getElementsByClassName("to_do_list")[0].appendChild(cln);

    console.log(x);
  }

  