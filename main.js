function getpara(){
    var paragraph=[];
    for(var i=1;i<6;i++){
        paragraph.push(document.getElementById("text_box_"+i).value);
      document.getElementById("display").innerHTML=paragraph.join("."); 
    }
}
function getpara2(){
    var graph=[];
    for(var i=6;i<11;i++){
        graph.push(document.getElementById("text_box_"+i).value);
        document.getElementById("final").innerHTML=graph.join(".");
    }

}