function adjustFontSize(){var width=document.documentElement.clientWidth||document.body.clientWidth||window.innerWidth;var height=document.documentElement.clientHeight||document.body.clientHeight||window.innerHeight;var minSize=1440;var minFontSize=10;if(height>width){minFontSize=20;if(width<=640){minSize=1024;minFontSize=20;}}
window.fontSize=width*minFontSize/minSize;var html=document.querySelector("html");html.style.fontSize=Math.round(window.fontSize*10)/ 10 + "px";
resizeHandler();};resizeHandler=function(){};window.addEventListener("resize",adjustFontSize);adjustFontSize();