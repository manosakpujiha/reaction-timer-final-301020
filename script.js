  var start = new Date().getTime();
              
  function getRandomColor() 
    {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) 
      {color += letters[Math.floor(Math.random() * 16)];}
    return color;
    }

  function appear () 
    {
    var top = Math.random () * 400;
    var left = Math.random () * 1200;
    var height = (Math.random () * 200) + 100;
    var width = (Math.random () * 200) + 100;
    
    //this code is used to convert the quadilaterals to circles
    if (Math.random() > 0.5) 
      {document.getElementById('shape').style.borderRadius = '50%';}
    else 
      {document.getElementById('shape').style.borderRadius = '0';}
    //ends here
    document.getElementById('bodyColor').style.backgroundColor = getRandomColor();
    document.getElementById('shape').style.backgroundColor = getRandomColor();
    document.getElementById('topic').style.color = getRandomColor();
    document.getElementById('shape').style.height = height + 'px';
    document.getElementById('shape').style.width = width + 'px';
    document.getElementById('shape').style.top = top + 'px';
    document.getElementById('shape').style.left = left + 'px';
    document.getElementById('shape').style.display = 'block';
    start = new Date().getTime();
    }

  function secondAppear () 
    {setTimeout(appear, Math.random() * 2000);}
  
  secondAppear ();
  
  document.getElementById("shape").onclick = function disappear () 
    {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start)/1000;
    document.getElementById('time').innerHTML = ('Your clicked in: ' + timeTaken +'s');
    secondAppear ();
    }
