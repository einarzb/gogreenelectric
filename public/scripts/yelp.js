(function() { 
var s = document.createElement("script");
s.async = true;
s.onload = s.onreadystatechange = function(){
  getYelpWidget("go-green-electric-encino","300","RED","y","y","6");
};

s.src='http://chrisawren.com/widgets/yelp/yelpv2.js';

var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);
})();
