  
    let a;
    let b;
    let c;
    let d;
    
    document.getElementById("submitButton").onclick = function(){
    
        a = document.getElementById("aTextBox").value;
        b = a.toLowerCase();
        c = b.trim();
    
      
    
    
        
        var d = "accompanied";
        
        if (c==d){
                /*document.getElementById("cLabel2").innerHTML = true;*/
                document.getElementById("correct_answer").style.display = "inline";
                document.getElementById("false_answer").style.display = "none";

        }
        else{
           /* document.getElementById("cLabel2").innerHTML = false;*/
           document.getElementById("correct_answer").style.display = "none";
           document.getElementById("false_answer").style.display = "inline";


    
        }    
    }
        
        

/*Drop Down Function*/
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function dropDownFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
      }


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
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
