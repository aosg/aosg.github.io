var charEnhancements = [
  {
    "name" : "Superior Speed",
    "cost" : 2,
    "effect" : "Add 1 to your hero's Move characteristic.",
    "stat" : "move",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },

  {
    "name" : "Superior Vitality",
    "cost" : 1,
    "effect" : "Add 1 to your hero's Wounds characteristic.",
    "stat" : "wounds",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Superior Leadership",
    "cost" : 1,
    "effect" : "Add 1 to your hero's Bravery characteristic.",
    "stat" : "bravery",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Extra Armour",
    "cost" : 2,
    "effect" : "improve your hero's Save characteristic.(to a maximum of 3+)",
    "stat" : "save",
    "amount" : -1,
    "limit" : 3,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Mighty Weapon",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Add 1 to the damage characteristic of that weapon. Weapons that have a random Damage characteristic cannot be picked.",
    "stat" : "damage",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Sharpened Edge",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). improve the Rend characteristic of that weapon by 1 (to a maximum of -3).",
    "stat" : "rend",
    "amount" : -1,
    "limit" : -3,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Weapon master",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Improve the To Hit characteristic of that weapon by 1.",
    "stat" : "hit",
    "amount" : -1,
    "limit" : 1,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Superior Strength",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Improve the To Wound characteristic of that weapon by 1.",
    "stat" : "wound",
    "amount" : -1,
    "limit" : 1,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Ferocity",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Add 1 to the Attacks characteristic of that weapon",
    "stat" : "attacks",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  }
]

var undeadEnhancements = [
  {
    "name" : "Unnatural Speed",
    "cost" : 2,
    "effect" : "Add 1 to your hero's Move characteristic.",
    "stat" : "move",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Dark Fortitude",
    "cost" : 1,
    "effect" : "Add 1 to your hero's Wounds characteristic.",
    "stat" : "move",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Extra Armour",
    "cost" : 2,
    "effect" : "improve your hero's Save characteristic.(to a maximum of 3+)",
    "stat" : "save",
    "amount" : -1,
    "limit" : 3,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Ferocity",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Add 1 to the Attacks characteristic of that weapon",
    "stat" : "attacks",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Weapon master",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Improve the To Hit characteristic of that weapon by 1.",
    "stat" : "hit",
    "amount" : -1,
    "limit" : 1,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Unholy Strength",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Improve the To Wound characteristic of that weapon by 1.",
    "stat" : "wound",
    "amount" : -1,
    "limit" : 1,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Mighty Weapon",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). Add 1 to the damage characteristic of that weapon. Weapons that have a random Damage characteristic cannot be picked.",
    "stat" : "damage",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Honed Edge",
    "cost" : 2,
    "effect" : "Pick 1 of your hero's weapons (not including mount weapons). improve the Rend characteristic of that weapon by 1 (to a maximum of -3).",
    "stat" : "rend",
    "amount" : -1,
    "limit" : -3,
    "weapon" : "all",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : [],
    "max" : 3,
  },
  {
    "name" : "Master of Dark Magics",
    "cost" : 3,
    "effect" : "Increase the number of spells this hero can attempt to cast and unbind by 1. Restrictions: WIZARD only.",
    "stat" : "spells",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : ["WIZARD"],
    "max" : 3,
  },
  {
    "name" : "Spirit Host",
    "cost" : 2,
    "effect" : "Add 2 to the Attacks characteristic of the Spirit Host's Weapons",
    "stat" : "attacks",
    "amount" : 2,
    "limit" : 0,
    "weapon" : "sh",
    "taken" : 0,
    "restrictions" : [],
    "allowed" : ["UNDEAD COMPANION"],
    "restrictions" : [],
    "max" : 2,
  },
]

var companionEnhancements = [
  {
    "name" : "Razor-sharp Claws",
    "cost" : 2,
    "effect" : "Improve the Rend characteristic of the bestial companion's Claws by 1 (to a maximum of -3).",
    "stat" : "rend",
    "amount" : -1,
    "limit" : -3,
    "weapon" : "Claws",
    "taken" : 0,
    "max" : 3,
  },
  {
    "name" : "Savage Frenzy",
    "cost" : 1,
    "effect" : "Pick either the bestial companion's Claws or Maw. Add 1 to the Attacks characteristic of that weapon. For Gargantuan Beasts, add 1 to each row of the appropriate column in the damage table.",
    "stat" : "attacks",
    "amount" : 1,
    "limit" : 0,
    "weapon" : "all",
    "taken" : 0,
    "max" : 3,
  },
  {
    "name" : "Savage Ferocity",
    "cost" : 1,
    "effect" : "Pick either the bestial companion's Claws or Maw. Improve the To Hit characteristic of that weapon by 1.",
    "stat" : "hit",
    "amount" : -1,
    "limit" : 1,
    "weapon" : "all",
    "taken" : 0,
    "max" : 3,
  },
  {
    "name" : "Savage Strength",
    "cost" : 1,
    "effect" : "Pick either the bestial companion's Claws or Maw. Improve the To Wound characteristic of that weapon by 1.",
    "stat" : "wound",
    "amount" : -1,
    "limit" : 1,
    "weapon" : "all",
    "taken" : 0,
    "max" : 3
  },
]