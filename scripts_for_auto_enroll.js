// ==UserScript==
// @name         Anakthsh
// @namespace    http://your.homepage/
// @version      0.1
// @description  enter something useful
// @author       You
// @match        http://tampermonkey.net/index.php?version=3.10.3&ext=dhdg&updated=true
// @grant        none
// ==/UserScript==
// Example for Anakthsh course
// Insert in Tampermonkey > Settings > User includes > https://eclass.teiath.gr/modules/group/?course=CS116

if (document.querySelector('#main-content > div > div > div.table-responsive > table > tbody > tr:nth-child(3) > td:nth-child(5) > a') == null) 
{ 
 // -- Not Exist
    //alert("DOESN'T EXIST!");
    setTimeout(function () {
   window.location.href = "https://eclass.teiath.gr/modules/group/?course=CS116"; //will redirect to your blog page (an ex: blog.html)
}, 1000); //will call the function after 1 sec.
    
}
else{
   //$("#content_main > table > tbody > tr:nth-child(5) > td:nth-child(4) > a > img").click();
    document.querySelector('#main-content > div > div > div.table-responsive > table > tbody > tr:nth-child(3) > td:nth-child(5) > a').click();
    //alert("Success!");
}
