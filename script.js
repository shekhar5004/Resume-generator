function addNewWEField(){
     let newNode=document.createElement("textarea");
     newNode.classList.add("form-control");
     newNode.classList.add("weField");
     newNode.classList.add("mt-2");
     newNode.setAttribute("rows",3);
     newNode.setAttribute("placeholder","Enter here");
     let wb=document.getElementById("we");
     let weaddbuttonob=document.getElementById("wkaddbutton")
     wb.insertBefore(newNode,weaddbuttonob);

}
function  addNewAQField(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqfield");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");
    let ab=document.getElementById("aq");
    let aqaddbutton=document.getElementById("aqaddbutton");
    ab.insertBefore(newNode,aqaddbutton);
}
function generateCV(){
    // <Personal Information>-----------</Personal>
    let name1=document.getElementById("nameT1");
    let name2=document.getElementById("nameT2");
    let contactt=document.getElementById("contactT");
    let addresst=document.getElementById("addressT");
    let fbt=document.getElementById("fbt");
    let instt=document.getElementById("instt");
    let LinkedT=document.getElementById("LinkedT");
    let namefield=document.getElementById("namefield");
    let contactfield=document.getElementById("contactfield");
    let addressfield=document.getElementById("addressfield");
    let linkedinfield=document.getElementById("linkedinfield");
    let githubfield=document.getElementById("githubfield");
    let collageidfield=document.getElementById("collageidfield");
    name1.innerHTML=namefield.value;
    name2.innerHTML=namefield.value;
    contactt.innerHTML=contactfield.value;
    addresst.innerHTML=addressfield.value;
    linkedinfield.innerHTML=namefield.value;
    fbt.innerHTML=linkedinfield.value;
    instt.innerHTML=githubfield.value;
    LinkedT.innerHTML=collageidfield.value;
    // <Professional Information>---------</Professional>
    let objectiveid=document.getElementById("objective");
    let objectiveid1=document.getElementById("ObjectiveField");
    objectiveid.innerHTML=objectiveid1.value;
    // <objective id finshed>--------</objective>
    let wes=document.getElementsByClassName("weField");
    str='';
    for(let e of wes)
    {
        str=str+`<li>${e.value}</li>`
    }
    document.getElementById('weT').innerHTML=str;
    let aqs=document.getElementsByClassName("eqfield");
    str='';
    for(let e of aqs)
    {
        str=str+`<li>${e.value}</li>`
    }
    document.getElementById('aqT').innerHTML=str;
    document.getElementById("cv-form").style.display="none";
    document.getElementById("cv-template").style.display="block";
}
function printCV(){
    window.print();
}
