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
    function showSkills() {
      var skillsDiv = document.getElementById("skills");
      var photosDiv = document.getElementById("photos");
    
      skillsDiv.style.display = "block";
      photosDiv.style.display = "none";
    }
    
    function showPhotos() {
      var skillsDiv = document.getElementById("skills");
      var photosDiv = document.getElementById("photos");
    
      skillsDiv.style.display = "none";
      photosDiv.style.display = "block";
    }
    
    