$(function(){

  $("#typed").typed({
    strings: ["@me = <span class=\"symbol\">Person</span>.where(<span class=\"symbol\">name:</span>  <span class=\"string\">\'Tai\'</span>,<br> <span class=\"indent\"><span class=\"symbol\">occupation:</span> <span class =\"string\"> \'programmer\'</span>,</span><br> <span class=\"indent\"><span class=\"symbol\">github:</span> <span class =\"string\"> <a href=\"https://github.com/nytai\">\'/nytai\'</a></span></span><br> <span class=\"indent\">).first</span>"],
    typeSpeed: 10,
    backDelay: 600,
    loop: false,
    contentType: 'html', // or text
    // defaults to false for infinite loop
    loopCount: false
  });
});
