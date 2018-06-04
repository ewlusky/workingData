const art = document.createElement('article');
art.setAttribute('id', 'myStuff');
const DB = loadDatabase('HomeInventory');
console.log(DB);

for (const thing in DB) {
    const sect = document.createElement('section');
    sect.setAttribute('id', thing);
    sect.textContent = thing.toUpperCase();
    for (let i = 0; i < DB[thing].length; i++) {
        const newP = document.createElement('p');
        newP.setAttribute('style', 'white-space: pre;');

        for (name in DB[thing][i]) {

            newP.textContent += `${name.toUpperCase()}: ${DB[thing][i][name]} \r\n`

        }
        console.log(newP);
        sect.appendChild(newP);
    }
    art.appendChild(sect);
}
document.body.appendChild(art);

const button = document.createElement("BUTTON");
button.textContent = "Select";
document.body.appendChild(button);
const newdiv = document.createElement('div');
document.body.appendChild(newdiv);
function select() {
    const nDiv = document.querySelector("div");
    while (nDiv.firstChild) {
        nDiv.removeChild(nDiv.firstChild);
    }
    let selection = window.prompt("select content(furniture, crafts, electronics)");

    if (selection == 'furniture' || selection == 'crafts' || selection == 'electronics') {
        const art = document.createElement('article');
        const thing = selection;
        const sect = document.createElement('section');
        sect.setAttribute('id', thing);
        sect.textContent = thing.toUpperCase();
        for (let i = 0; i < DB[thing].length; i++) {
            const newP = document.createElement('p');
            newP.setAttribute('style', 'white-space: pre;');

            for (name in DB[thing][i]) {

                newP.textContent += `${name.toUpperCase()}: ${DB[thing][i][name]} \r\n`

            }
            console.log(newP);
            sect.appendChild(newP);
        }
        art.appendChild(sect);
        nDiv.appendChild(art);

    } else {
        const otherP = document.createElement('p');
        otherP.textContent = "Section not found."
        nDiv.appendChild(otherP);
    }

}


button.addEventListener("click", select);