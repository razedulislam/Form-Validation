var stname=document.getElementById("name");
var roll=document.getElementById("roll");
var department=document.getElementById("department");
var gpa=document.getElementById("gpa");
var btn=document.getElementById("btn");


btn.addEventListener('click',function(pera){
    pera.preventDefault();
if(stname.value==''){
    alert("Fill up name option ");

}
else if(roll.value==''){
    alert("Fill roll option");

}
else if(department.value==''){
    alert("Fill department option");

}
else if(gpa.value==''){
    alert("Fill cgpa option");

}
else{

var tbody=document.getElementById("tbody");
var tr=document.createElement('tr');
//for name
var td=document.createElement('td');
td.innerHTML=stname.value;
tr.appendChild(td);

//for roll
var td1=document.createElement('td');
td1.innerHTML=roll.value;
tr.appendChild(td1);

//for department
var td2=document.createElement('td');
td2.innerHTML=department.value;
tr.appendChild(td2);
//for cgpa
var td3=document.createElement('td');
td3.innerHTML=gpa.value;
tr.appendChild(td3);

tbody.appendChild(tr);
}
});