/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('#me')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

var txt = document.getElementById("me");
var header = document.getElementById("myDropdown");
var btns = header.getElementsByClassName("a");

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = header.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  txt.innerHTML = this.innerHTML;
  });
}


$('.tooltip').hover(
    function() {
        $( '#tooltip-span' ).addClass('active');
    }, function() {
        $( '#tooltip-span' ).removeClass('active');
    }
);

var tooltipSpan = document.getElementById('tooltip-span');

window.onmousemove = function (e) {
    var x = e.clientX,
        y = e.clientY;
    tooltipSpan.style.top = (y + 20) + 'px';
    tooltipSpan.style.left = (x + 20) + 'px';
};