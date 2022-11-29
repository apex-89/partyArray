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
            member.hitpoints = member.hitpoints - hp;
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