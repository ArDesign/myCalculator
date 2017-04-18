$( document ).ready(function() {
  
  let string = '';
  let current = '';
  let result = 0;
  
  
  $(".button").click(function(){
    
    if ($('p',this).html() === "clear") {
      string = '';
      $("#input").html("");
    } else if ($('p',this).html() === "=") {
      string = eval(string);
      $("#input").html(string);
    } else if ($('p',this).html() === "back") {
      string = string.toString().slice(0,-1);
      $("#input").html(string);
    } else {
      current = $('p',this).html();
      string += current;
      $("#input").html(string);
    };
    
  });
  
}); /*Document ready function*/