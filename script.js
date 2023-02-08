//Js Assembly
const table = document.querySelector(".tab");
let click = 1;
let shape = "square";
let Array = alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ",];

function run() {
    if(click <= 1){
    for(let j= 0; j<40; j++){
    let row = document.createElement("tr");
   
    for(let i = 0; i<52; i++) {
        let col = document.createElement("td");
        col.setAttribute("onclick", `square("${Array[j] + i}")`);
        col.setAttribute("id", `${Array[j] + i}` )
        row.append(col);
    }
    table.append(row);
    }
}
click++;
}

function circle() {
    shape = 'circle';
}

function triangle() {
    shape = 'triangle';
}

function squt() {
    shape = 'square';
}

function square(a) {
    console.log(shape)
    let box = document.getElementById(`${a}`);
    let class_name = box.getAttribute("class");
    let confirm = box.getAttribute("class") == null ? true : false;
    console.log(class_name);
   if(confirm){
    if(shape == "circle"){ box.setAttribute("class", "cir")}
    else if(shape == "triangle"){box.setAttribute("class", "tri")}else{
    box.setAttribute("class", "sqr")};
   }else{
    if(class_name == "circle"){
    box.removeAttribute("class", "cir");
    }else if(class_name == "triangle") {
        box.removeAttribute("class", "tri");    
    }else {
        box.removeAttribute("class", "sqr");
    }  
   }
}