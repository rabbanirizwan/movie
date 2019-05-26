var user={
  name:["aaa redwings19","greghaady","viveleCH","juveee","redwings19","TB12fan","jennyb","jaecrowder","marvinj"],
  chat:["sdsdsdsdsdKentucky Derby 2019 Live Steaming: Watch, lol","sdsdsdLove that so many are available in HD",
         "10/10 WEBSITE , sdsdsdFantastic Match !! would recomended this to everyone. u kiding m",
        "saddaadadasdadadLive Kentucky Derby 2019, i know Watch is the best","ok lets Watch live","greghaady no stream seems fine for me :)","This is what I wait wait , can finally live streaming with good quality and without HD video "]
}
var j=0;
function appearing(){
  
 //console.log(document.querySelector(".commentPortion").lastElementChild);
if(j==8)
j=0;


  
  
  setTimeout(function(){ 
    
     
    
      document.querySelector(".commentPortion").innerHTML += `
      <div style="border-bottom:1px solid #7e8170; display: flex; justify-content: space-between;">
      <div>
              <small style="color:#1e53d8;">${user.name[j]}</small>
              <p style="max-width:272px;">${user.chat[j]} </p>
       </div>
     <small style="color:#7e8170;font-size: 9px;">8 minute ago</small>
    
</div>

      `;
      // if(i==3)
      // {
      //   console.log("find");
      //  document.querySelector(".commentPortion").lastElementChild.classList.add("bottom");
      //  //console.log( document.querySelector(".commentPortion").lastElementChild.className);
      //  console.log(document.querySelector(".commentPortion").lastElementChild);
      // }
  j++;
  console.log(j);
    // console.log( document.querySelector(".commentPortion").lastElementChild.className);
    
    
    
    //console.log(document.querySelector(".commentPortion").lastElementChild.className);
    random();
     appearing();
     bottom();
     
    
  }, 5000);
}



function S()
{
    console.log("sdasdasd");
    document.querySelector(".spin").style.display="none";
    document.querySelector(".spinner1").innerHTML+=`<div class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>`;

}
function random()
{
  document.querySelector("#numberRandom").innerHTML=Math.floor(Math.random() * 5000);
}

function bottom() {
  
  // var element = document.querySelector(".commentPortion").lastElementChild;
  // element.className = element.className.replace(/\bmystyle\b/g, "");
//console.log(element.className);
// console.log(document.querySelector(".commentPortion").lastElementChild);
document.querySelector(".commentPortion").lastElementChild.classList.remove("bottom");
  
  document.querySelector( '.commentPortion' ).lastElementChild.scrollIntoView();
  // window.setTimeout( function () { top(); }, 2000 );
};

bottom();

