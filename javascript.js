/*Här skriver ni koden*/
//Deluppgift 1: Hämta knappen och listan
var button = document.getElementById("my-button");
var list = document.getElementById("list");
console.log(button);
console.log(list);

//Deluppgift 2: Skapa en lyssnare
button.addEventListener("click", () => {
  console.log("Hello World!");
  //Deluppgift 3: Hämta värdet från inputfältet
  var input = document.getElementById("task").value;
  //Deluppgift 4: Kolla ifall det fins något värde
  if (input !== "") {
    console.log(input);
    //Deluppgift 5: Skapa ett listelemnt och lägg till i listan
    var li = document.createElement("LI");
    li.innerHTML = input;
    //Deluppgift 6: Skapa en taBortKnapp
    var taBortKnapp = document.createElement("button");
    taBortKnapp.innerText = "X";
    taBortKnapp.className = "delete";
    li.append(taBortKnapp);
    list.appendChild(li);
    taBortKnapp.addEventListener("click", () => {
      remove(li)
    });
    //Deluppgift 7: Rensa textfältet
    document.getElementById("task").value = "";
  }
});

//Deluppgift 8: En till lyssnarfunktion på taBortKnappen
function remove(parent) {
    console.log("this is the parent node: " + parent.nodeName);
    console.log("This is the content" + parent.firstChild.innerHTML);
    list.removeChild(parent);
}
