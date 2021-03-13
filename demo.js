//ADD SKILL
$("#another-skill").click(function (e) {
  console.log(
    $("#here")
      .find("input")
      .map(function () {
        return this.value;
      })
      .get()
  );
  $("#here").append($("<input type='text' placeholder='Skill'>"));
});

//  for choose file btn

$(".custom-file-input").on("change", function () {
  var fileName = $(this).val().split("\\").pop();
  $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});

var currentTab = 0;
showTab(currentTab);

var regx = /^[0-9]\d{9}$/;

function Preview_image() {
  var reader = new FileReader();
  var img_field = document.getElementById("profile");

  reader.onload = function () {
    if (reader.readyState == 2) {
      img_field.src = reader.result;
    }
  };

  reader.readAsDataURL(event.target.files[0]);
}

function showTab(n) {
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == x.length - 1) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  fixStepIndicator(n);
}

function nextPrev(n) {
  var x = document.getElementsByClassName("tab");

  var number = document.getElementById("contact").value;
  if (!regx.test(number)) {
    return false;
  }

  $(x[currentTab]).slideUp(1000);
  // $(".x[currentTab]").slideDown(2000) ;

  currentTab = currentTab + n;
  if (currentTab >= x.length) {
    document.getElementById("regForm").submit();
    return false;
  }
  showTab(currentTab);
}

function fixStepIndicator(n) {
  var i,
    x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  x[n].className += " active";
}
// function validateForm() {
//   var x, y, i, valid = true;
//   x = document.getElementsByClassName("tab");
//   y = x[currentTab].getElementsByTagName("input");
//   for (i = 0; i < y.length; i++) {
//     if (y[i].value == "") {
//       y[i].className += " invalid";
//       valid = false;
//     }
//   }
//   if (valid) {
//     document.getElementsByClassName("step")[currentTab].className += " finish";
//   }
//   return valid;
// }
// function fixStepIndicator(n) {
//   var i, x = document.getElementsByClassName("step");
//   for (i = 0; i < x.length; i++) {
//     x[i].className = x[i].className.replace(" active", "");
//   }
//   x[n].className += " active";
// }

// $('#another-book').click(function (e) {
// $('#here').append($("<input type='text' placeholder='book'>");
// $('#here').append($("<input type='text' placeholder='author'>");
// });

// function processpage1(){
//      fname = _("#firstname").value ;
//      alert(fname);
// }
// alert(fname);
// $(document).ready(function () {
//   var loadFile = function(event) {
// 	var image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
//   $("#TOP").src =image.src ;
//   };
// funtion fn(){
//   alert("HI");
//   var s = $("#myFile").value;
//   $("#TOP").value = s ;
// }
//   $("#btn1").click(function () {
//    $("#p").addClass("pc");
//
//   });
//   $("#btn2").click(function (){
//     $("#p").removeClass("pc");
//   });
//   $("#btn3").click(function (){
//     $("#p").toggleClass("pc");
//   });

// });
