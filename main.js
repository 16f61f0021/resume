// function loadJSON(file,callback){
//   Var xhr=newXMLttpRquest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange function(){
//     if
//   }
function loadJSON(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }
      else{
        reject(new Error('error'));
      }
    })
  })

}
var fetchedData=loadJSON("root.json");
fetchedData.then(root=>{
  console.log(root);
  career(root.career);
})

var child2=document.querySelector("#child2");
console.log(child2);

function career(car){
  var heading=document.createElement("h2");
  heading.textContent="Creer objective";
  child2.appendChild(heading);
  var p=document.createElement("p");
  console.log(child2);
  p.textContent=car.info;
  child2.appendChild(p);
}
