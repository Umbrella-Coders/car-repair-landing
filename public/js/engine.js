$('a[href^="#"]').bind("click.smoothscroll",function(t){t.preventDefault();var o=this.hash,n=$(o);$("html, body").stop().animate({scrollTop:n.offset().top},800,"swing",function(){})}),(new WOW).init();