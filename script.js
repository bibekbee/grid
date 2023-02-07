//Js Assembly

const table = document.querySelector(".tab");
let click = 1;
let Array = alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"AA","BB","CC","DD","EE","FF","GG","HH","II","JJ","KK","LL","MM","NN","OO","PP","QQ","RR","SS","TT","UU","VV","WW","XX","YY","ZZ",];

function run() {
    if(click <= 1){
    for(let j= 0; j<40; j++){
    let row = document.createElement("tr");
   
    for(let i = 0; i<52; i++) {
        let col = document.createElement("td");
        col.setAttribute("onclick", `circle("${Array[j] + i}")`);
        col.setAttribute("id", `${Array[j] + i}` )
        row.append(col);
    }
    table.append(row);
    }
}
click++;
}

function circle(a) {
    box = document.getElementById(`${a}`);
    let confirm = box.getAttribute("class") == null ? true : false;
   if(confirm){
    box.setAttribute("class", "pop");
   }else{
    box.removeAttribute("class", "pop");
   }
}