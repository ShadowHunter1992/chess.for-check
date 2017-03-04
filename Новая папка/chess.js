
function hesen(){

document.write("<style> body{background:#0cf3c5;} html,body {padding:0;margin:0;font-family:'Trebuchet MS';}.clear:after {content:'';display:block;height:0;visibility: hidden;clear:both;}.left{float:left;}.black{background: #771a0b;}.white{background:#fec381;}</style>");


	document.write("<div id='mainchess' class='clear'>");

  
	   for(i=0;i<4;i++){
		
	  	for(j=1;j<5;j++){
	  		       
	  		document.write("<div class='left white' style='height:80px; width:80px'></div>");
	  		document.write("<div class='left black' style='height:80px; width:80px'></div>");
                          }   
        for(k=1;k<5;k++){
             document.write("<div class='left black' style='height:80px; width:80px'></div>");
             document.write("<div class='left white' style='height:80px; width:80px'></div>");
                        }
	  	              
	  	                }
	
	document.write("</div>");
    var mnchs=document.getElementById("mainchess");
	
	mnchs.style.width="650px";
	mnchs.style.height="650px";
	mnchs.style.margin="0px auto";
    mnchs.style.boxSizing="border-box";
    mnchs.style.border="5px solid #771a0b";
    mnchs.style.boxShadow="1px 1px 1px #771a0b";




    document.getElementsByClassName("white")[26].innerHTML = "<img style='position:relative; '  onclick='animate()' src='Pawn.png' alt=''/>";
    var pawn=document.getElementsByTagName("img")[0]
    var x=confirm("Black Pawn?");
    while(x==false)
    x=confirm("BlacK Pawn No OtherWise")
   pawn.style.cursor="pointer"
    pawn.style.width="initial";
    pawn.style.height="100%";


    function animate(){
	var pawn=document.getElementsByTagName("img")[0];
	var top = 0;
	var id = setInterval(frame,100)
	function frame(){
		if(top==-480){
			clearInterval(id)
		}else{
			top--
			pawn.style.top = top+"px";
		}
		}

 

   
 }
}















	



    
   
  
	                
	 


