function reorder(type) {
    console.log("running")
    var luna = document.getElementById("luna")
    var orion = document.getElementById("orion")
    var pirate = document.getElementById("pirate")
    var apprentice = document.getElementById("apprentice")

    if (type == "release") {
        luna.style["order"] = "1"
        pirate.style["order"] = "2"
        orion.style["order"] = "3"
        apprentice.style["order"] = "4"
    }
    else {
        luna.style["order"] = "2"
        pirate.style["order"] = "3"
        orion.style["order"] = "1"
        apprentice.style["order"] = "4"
    }
}