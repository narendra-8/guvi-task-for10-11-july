//1.create an XHR object
var request=new XMLHttpRequest();
//2.open a connection
request.open('Get','https://restcountries.eu/rest/v2/all',true);
//3.send a connection
request.send();
//4.once data has received successfully,we have to convert data
request.onload=function(){
    var data=JSON.parse(this.response);
   // console.log(data);
   for(var i=0;i<data.length;i++){
   console.log(data[i].name+" "+data[i].capital+" "+data[i].flag);
   }
}
