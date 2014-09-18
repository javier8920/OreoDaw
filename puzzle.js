//Title : Puzzle
//Authors: Francisco Alfonso and Héctor Jaraba
for (i = 0; i < 9; i++) {
    document.body.children[0].children[i].setAttribute("id", "div" + i);
    document.body.children[0].children[i].setAttribute("onClick", "obtenid(this.id)");
}

var contador = 0;
var click1 = document.body.children[0].getElementsByTagName("div");

function change(id1, id2) {
    var nodo1 = document.getElementById(id1);
    var nodo2 = document.getElementById(id2)
    nodo1.setAttribute("id", id2);
    nodo2.setAttribute("id", id1);

}

function obtenid(id) {

    if (contador == 0) {
        idimg1 = id;
        contador = 1;
    } else {
        idimg2 = id;
        change(idimg1, idimg2);
        contador = 0;

    }
}
