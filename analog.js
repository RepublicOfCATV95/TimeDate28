var blackline="black";
var secondline="red";
function drawanalog(nolie,NT,clockWidth)
{
 var aaa=document.getElementById(nolie);
 var T=aaa.getContext("2d");
 var cenX=aaa.width / 2;
 var cenY=aaa.height / 2;

 function getDetector(DM)
 {
  var detected=0;
  if ( DM<12 )
      detected=0;
  else if ( DM>11 && DM<24 )
      detected=12;
  else if ( DM>23 && DM<36 )
      detected=24;
  else if ( DM>35 && DM<48 )
      detected=36;
  else if ( DM>47 && DM<60 )
      detected=48;
  return detected;
 }
 function tick()
 {
  var date = new Date();
  setoffset(date,selectedoffset);
  T.clearRect(0,0,aaa.width,aaa.height);
  drawStatic();
  
  var rhour=date.getHours();
  var detector=getDetector(date.getMinutes());
  T.strokeStyle = blackline;
  T.lineWidth=2;
  drawHand(clockWidth/3, (rhour * 30) + (detector/2),false);

  var rminute=date.getMinutes();
  T.strokeStyle=blackline;
  T.lineWidth=2;
  drawHand(clockWidth/2, rminute * 6,false);
  
  var rsecond=date.getSeconds();
  T.strokeStyle=secondline;
  T.lineWidth=1;
  drawHand(clockWidth/2, rsecond * 6,true);

  function drawStatic()
  {
   T.beginPath();
   T.arc(cenX,cenY,clockWidth/2,0,2*Math.PI,false);
   T.strokeStyle=blackline;
   T.lineWidth=2;
   T.stroke();
   T.closePath();

   T.beginPath();
   T.arc(cenX,cenY,2,0,2*Math.PI,false);
   T.fillStyle=blackline;
   T.fill();
   T.closePath();

   drawNumbers();
   
   function drawNumbers()
   {
    var i=12;
    T.strokeStyle=blackline;
    T.lineWidth=2;
    while (i>0)
    {
        T.save();
        T.beginPath();
        T.translate(cenX,cenY);
        var angle=(i*30) * Math.PI/180;
        T.rotate(angle);
        T.translate(0,-clockWidth/2);
        
        T.moveTo(0,0);
        T.lineTo(0,10);
        T.stroke();
        T.closePath();
        T.restore();
        i--;
    }
   }
  }
   function drawHand(length,angle,secondsonly)
   {
    T.save();
    T.beginPath();
    T.translate(cenX,cenY);
    T.rotate(-180 * Math.PI/180);
    T.rotate(angle * Math.PI/180);
    if ( secondsonly==true )
    {
        T.moveTo(0,0);
        T.lineTo(0,length);
    }
    else
    {
        T.moveTo(0,0);
        T.lineTo(0,length);
    }
    T.stroke();
    T.closePath();
    T.restore();
   }
 }
 
 tick();
 // TimeDate27's version of tick() does not need the setInterval() method because it is set by init() function
}
