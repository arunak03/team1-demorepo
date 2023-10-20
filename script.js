function clickHandler(){
            
            document.getElementById("popup-body").style.display="block";
            
        }
    
        function crosshandler(){
            document.getElementById("popup-body").style.display="none"
            
        }
       
        function init(){
             document.getElementById("location").addEventListener("click",clickHandler);
       
             
             document.getElementById("cross").addEventListener("click",crosshandler);
             
        }
     document.addEventListener("DOMContentLoaded",init);