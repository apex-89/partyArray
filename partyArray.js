let party = [
    {
        name: 'Joline',
        hitpoints: 15,
        belongings: ["spear", "bread", "Tums"],
        companion: {
            name: "Tabby",
            type: "cat",
        }
    },
    {
        name: 'Timothy',
        hitpoints: 10,
        belongings: ["sword", "potion", "Tums"],
        companion: {
            name: "Velma",
            type: "Bat",
        }
    },
    {
        name: 'Sarah',
        hitpoints: 20,
        belongings: ["bow", "arrows", "wood"],
        companion: {
            name: "Tony",
            type: "tiger",
        }
    },
]

// double the hitpoints of everyone in the party 
// loop through party
// double hitpoints and reassign 
party.forEach((members) => {
    members.hitpoints = 2*members.hitpoints;
}) 
console.log(party);

// Timothy has been hit with an arrow, subtract 5 ponts from his hp
// loop through party 
// subtract 5 points from hitpoints
const takeDamage = (name, hp) => {
    party.forEach((member) => {
        if(member.name == name){
            member.hitpoints -= hp;
        }
    })
}
takeDamage("Timothy", 5);
console.log(party)

// Sarah's tiger has been turned into a jellyfish, change it's type
// loop for Sarah/ companion / type
// change from tiger to jellyfish
const changeType = (name, type) => {
    party.forEach((member) => {
        if (member.name == name) {
            member.companion.type = type;
        }
    })
}
changeType("Sarah", "jellyfish");
console.log(party);

// Timothy drank a potion. Raise his hp by 20
// and remove potion from his belongings
// loop Timothy and increase hp by 20
// remove potion
const gainHealth = (name, hp, item) => {
    party.forEach((member) => {
        if (member.name == name) {
            member.hitpoints += hp;
            member.belongings.forEach((belonging, idx) => {
                if(belonging == item) {
                    member.belongings.splice(idx, 1);
                }
            })
        }
    })
}
gainHealth("Timothy", 20, "potion");
console.log(party);

// take Joline's bread
// put it in Timothy's belongings
const itemSwap = (swapFrom, item, swapTo) => {
    party.forEach((member) => {
        if(member.name == swapFrom){
            member.belongings.forEach((belonging, idx) => {
                if(belonging == item){
                    member.belongings.splice(idx, 1);
                }
            })
        }
        if(member.name == swapTo){
            member.belongings.push(item);
        }
    })
}
itemSwap("Joline", "bread", "Timothy");
console.log(party);

// Joline got upset and left the party
// use name of leaving member as a parameter
const removeMember = (memberName) => {
    party.forEach((member) => {
        if(member.name == memberName){
            delete member.name;
            delete member.hitpoints;
            delete member.belongings;
            delete member.companion;
        }
    })
}
removeMember("Joline");
console.log(party);

// add a new adventurer to the party (new adventurer is parameter)
const addNewMember = (name, hp, gear, companion) => {
    party.forEach((member) => {
        if(member.name == undefined){
            member.name = name;
            member.hitpoints = hp;
            member.belongings = gear;
            member.companion = companion;
        }
    })
}
addNewMember("Fran", 45, ["sword", "curry", "crystals"], { name: "Master", type: "spirit"});
console.log(party);

// party found 200 gold. create a new property gold 
// split godl evenly between everyone
// gold is the parameter
const goldRush = (gold) => {
    share = Number((gold/3).toFixed(2));
    party.forEach((member) => {
        member.gold = share;
    })
}
goldRush(200);
console.log(party);

// Sarah is tired of her jellyfish she wants a bear change it
changeType("Sarah", "bear");

// subtract some gold from her purse
party[2].gold -= 40;


// Timothy's sword has gotten old. Change it to "rusty sword"
party[1].belongings[0] = "rusty sword"
console.log(party);

// Write a function called seLeader that takes a name parameter
// memeber with that name should have a new property leader: true
// while the others have leader: false
const setLeader = (leader) => {
    party.forEach((member) => {
        if(member.name == leader){
            member.leader = true;
        }else{
            member.leader = false;
        }
    })
}
setLeader("Fran")
console.log(party)