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


     function showImage(imageUrl){
        var displayedImage = document.getElementById('displayed-image');
        displayedImage.src = imageUrl
    }

    function showSegment(segmentId,linkId){
        const segments =document.querySelectorAll('.segment');
        segments.forEach(segment=>{
            segment.style.display='none';  
        });
       const selectedSegment = document.getElementById(segmentId);
       selectedSegment.style.display='block';
    
       const links = document.querySelectorAll('.nav-link');
       links.forEach(link =>{
        link.classList.remove('active-link');
       })
       const selectedLink = document.getElementById(linkId);
       selectedLink.classList.add('active-link');
    }
    
    