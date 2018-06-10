
  

function photo(){

  var pic=document.getElementById('file').files[0];

  var a='Date ::'+pic.date;
  a+='<br> Name ::'+pic.name;
  a+='<br> Size ::'+pic.size;
  a+='<br> Type ::'+pic.type;

  var filetype= 'application/*';

  if (!pic.type.match(filetype))
    {document.getElementById('res').innerHTML="invalid file format"}


  else{

    document.getElementById('res').innerHTML= a;



    }


}

function move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
}
