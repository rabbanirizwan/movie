var user={
  name:["aaa redwings19","greghaady","viveleCH","juveee","redwings19","TB12fan","jennyb","jaecrowder","marvinj"],
  chat:["sdsdsdsdsdKentucky Derby 2019 Live Steaming: Watch, lol","sdsdsdLove that so many are available in HD",
         "10/10 WEBSITE , sdsdsdFantastic Match !! would recomended this to everyone. u kiding m",
        "saddaadadasdadadLive Kentucky Derby 2019, i know Watch is the best","ok lets Watch live","greghaady no stream seems fine for me :)","This is what I wait wait , can finally live streaming with good quality and without HD video "]
}
var j=0;

scrollDiv_init();
  
function appearing(){
  //bottom();
 //console.log(document.querySelector(".commentPortion").lastElementChild);
if(j==8)
j=0;


random();
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
     
  j++;
  console.log(j);
    
    
    
    
   
     appearing();
    
  }, 5000);
}

var s = 0;

function S()
{
 
  console.log(s);
  if(s==0)
  {
    document.querySelector(".spin").style.display="none";
    document.querySelector(".spinner1").innerHTML+=`<div style="width:100px;height:100px" class="spinner-border text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>`;
s=1;

  }
    
}
function random()
{
  document.querySelector("#numberRandom").innerHTML=Math.floor(Math.random() * (8000-7500+1)+7500);
  console.log(Math.floor(Math.random() * (8000-7500+1)+7500));
}






//scrollDiv_init();   
  
var ScrollRate = 45;
function scrollDiv_init() {
  console.log("saaaa");
  DivElmnt = document.querySelector('.commentPortion');
  DivElmnt.onmouseover = pauseDiv;
  DivElmnt.onmouseout = resumeDiv;
  ReachedMaxScroll = false;
  DivElmnt.scrollTop = 0;
  PreviousScrollTop  = 0;
  ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}
function scrollDiv() {
  
    DivElmnt.scrollTop = PreviousScrollTop;
    PreviousScrollTop++;
    ReachedMaxScroll = DivElmnt.scrollTop >= (DivElmnt.scrollHeight - DivElmnt.offsetHeight);
 
  
}
function pauseDiv() {
  clearInterval(ScrollInterval);
}
function resumeDiv() {
  PreviousScrollTop = DivElmnt.scrollTop;
  ScrollInterval = setInterval('scrollDiv()', ScrollRate);
}