//this is the role generator script
//this will be subject to changes as the html are differet
//TODO optimize this code

let form = document.getElementById("generator");
form.onsubmit = function (e) {
    e.preventDefault();

    let CharaName = ["Villager", "Wolf", "White Wolf King", "Prophet", "Guard", "Witch", "Idiot", "Hunter"]
    let CharaValue = [form.VillaNum.value, form.WolvesNum.value, form.WWKNum.value, form.ProphNum.value, form.GuarNum.value, form.WitNum.value, form.IdiotNum.value, form.HunterNum.value];
    let CharaLength = CharaValue.length;
    let roleSum = 0;
    let roles = [];
    let result = document.getElementById("input");
    let names = form.PlayerNames.value
    let nameList = [];


    //consider using innerHTML
    //for debuging
    /*for (let x = 0; x < CharaLength; x++) {
        result.innerHTML += `<p>Number of ${CharaName[x]}: ${CharaValue[x]}<p>`
    }*/
    function PlayersNames() {
        nameList = names.split(",");
    }
    PlayersNames();
    for (let a = 0; a < CharaLength; a++) {
        roleSum += Number(CharaValue[a]);
    }
    if (nameList.length < 4) {
        result.innerHTML = "<h2>Not enough players (Minimum of 4 players)</h2>"
    }
    else {
        if (nameList.length == roleSum) {
            let roleList = [];
            function Roles() {
                for (let i = 0; i < CharaLength; i++) {
                    for (let a = 0; a < Number(CharaValue[i]); a++) {
                        roles.push(CharaName[i]);
                    }
                }
                function rand(length) { //gives ran number
                    let ran = Math.floor(Math.random() * (length - 1));
                    return ran;
                }
                for (let x = 0; x < nameList.length; x++) {
                    random = rand(roles.length);
                    roleList.push(roles[random]);
                    roles.splice(random, 1);
                }
                result.innerHTML = "";
                for (let y = 0; y < roleList.length; y++) {
                    result.innerHTML += "<h3>" + nameList[y] + " = " + roleList[y] + "<br><h3>";
                }
            }

            Roles();
        } else {
            result.innerHTML = "<h2>Redo the form. Make sure the amount of roles you have equal to the number of players you entered. Remember to seperate names by a comma. NO LESS OR MORE<h2>";
            result.innerHTML += `<h2>You have ${nameList.length} players and only ${roleSum} roles</h2>`;
        }
    }
}