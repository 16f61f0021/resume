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
  education(root.education);
  skills(root.skills);
})

var child2=document.querySelector("#child2");
//career
console.log(child2);

function career(car){
  var heading=document.createElement("h2");
  heading.textContent="Career objective";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var p=document.createElement("p");
  console.log(child2);
  p.textContent=car.info;
  child2.appendChild(p);
}
//education
// console.log(child2);
function education(edu){
  var heading=document.createElement("h2");
  heading.textContent="Education Qualifications";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  var table=document.createElement("table");
  child2.appendChild(table);
  var tr="<tr> <td> S.no </td> <td> Qualification </td> <td> institute </td> <td> Data </td> </tr>";
  // table.innerHTML=tr;
  table.border="1";
  var tr1="";
  for(var i=0;i<edu.length;i++){
    tr1+="<tr> <td>"+i+1+"</td> <td>"+edu[i].degree+"</td> <td>"+edu[i].institute+"</td> <td>"+edu[i].data+"</td> </tr>";
  }
  table.innerHTML=tr+tr1;
}

//skills

function skills(skill){
  var heading=document.createElement("h2");
  heading.textContent="Technical Skills";
  child2.appendChild(heading);
  var hLine=document.createElement("hr");
  heading.appendChild(hLine);
  for(var i=0;i<skill.length;i++){
  var title=document.createElement("h4");
  title.textContent=skill[i].title;
  child2.appendChild(title);
  var list=document.createElement("ul");
  child2.appendChild(list);
}
}
