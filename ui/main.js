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
//submit name
var nameinput = document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('submit_btn');
submit.onclick =function(){
     var names = ['name1','name2','name3','name4'];
     var list='';
     for(var i=0;i<names.length;i++){
         list+='<li>' + names[i] + '</li>';
         
     }
     var ul=document.getElementById('namelist');
     ul.innerHTML=list;
};