//Home inventory database
const HID = {};
HID.furniture = [];
HID.crafts = [];
HID.electronics = [];

const vintageInkwell = {
    name: "Vintage Ink Well",
    location: "Writing desk",
    description: "I enjoy this inkwell because it belonged to my grandfather and holds enough ink to survive weeks of writing."
  }
  
  // The writing desk is a furniture data item
const writingDesk = {
    name: "Shaker Writing Desk",
    location: "Bedroom",
    description: "This antique desk is special because I found and purchased it with my wife at an Ohio Amish auction."
  }

const television = {
    name: "Sony Television",
    location: "Living Room",
    description: "It's a TV."
}

const computer = {
    name: "Home Computer",
    location: "Living Room",
    description: "It's a computer. Nvidia 980ti.  Mid-grade."
}
const couch = {
    name: "Couch",
    location: "Living Room",
    description: "For sitting."
}
const blocks = {
    name: "Foam blocks",
    location: "Baby room",
    description: "Big foam blocks, with colors."
}

HID.electronics.push(television, computer);
HID.furniture.push(couch, writingDesk);
HID.crafts.push(vintageInkwell, blocks);

const saveDatabase = function (databaseObject, localStorageKey) {

    const stringified = JSON.stringify(databaseObject);

    localStorage.setItem(localStorageKey, stringified);
}

const loadDatabase = function (localStorageKey) {
    // Get the string version of the database
    const databaseString = localStorage.getItem(localStorageKey)

    // Use JSON.parse() to convert the string back into an object
    return JSON.parse(databaseString)
}

saveDatabase(HID, "HomeInventory");
