//counter code
var button=document.getElementById('counter');

button.onclick = function() { 
    
   //create a request object
    var request=new XMLHttpRequest();
    
    request.onreadystatechange = function(){
       
        if(request.readystate === XMLHttpRequest.DONE){
             
             if(request.status===200){
              var names = request.responseText;
              var span =document.getElementById('count');
              span.innerHTML = counter.tostring();
             }
        }
    };
 
   request.open('GET','http://amisubhasish100.imad.hasura-app.io/counter',true);
   request.send(null);
};


 var nameinput=document.getElementById('name');
     var name = nameinput.value;

var submit=document.getElementById('submit_btn');

submit.onclick = function() { 
    
   //create a request object
    var request=new XMLHttpRequest();
    
    request.onreadystatechange = function(){
       
        if(request.readystate === XMLHttpRequest.DONE){
             
             if(request.status===200){
              var names = request.responseText;
              names=JSON.parse(names);
              var list=' ';
              for(var i=0;i<names.length;i++){
              list+='<li>' + names[i] + '</li>';
           }
        var ul=document.getElementById('namelist');
        ul.innerHTML = list;
             }
        }
    };   
    
     //make the request
    
    request.open('GET', 'http://amisubhasish100.imad.hasura-app.io/submit-name?name='+name,true);
    request.send(null);
};


//submit name
