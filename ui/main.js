//counter code
var button=document.getElementById('counter');
var counter=0;
button.onclick = function() { 
    
    counter =counter+1;
    var span =document.getElementById('count');
    span.innerHTML=counter.toString();
    
    //create a request object
    var request=new XMLHttpRequest();
    
    request.onreadystatechange = function(){
       
        if(request.readystate === XMLHttpRequest.DONE){
             
             if(request.status===200){
             var counter = request.responseText;
             var span =document.getElementById('count');
             span.innerHTML=counter.toString();
             }
        }
    };   
    
     //make the request
    request.open('GET', 'http://amisubhasish100.imad.hasura-app.io/counter',true);
    request.send(null);
};