var tablinks=document.getElementsByClassName("tab-links");
    var tabcontents=document.getElementsByClassName("table-contents");
    function opentab(tabname){
      for(tablink of tablinks)
      {
        tablink.classlist.remove("active-links");
      }
      for(tabcontent of tabcontents)
      {
        tabcontent.classlist.remove("active-tab");
      }
    
  
    }