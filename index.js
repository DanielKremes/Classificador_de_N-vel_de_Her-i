let nameHero = "Super Green";
let xp = 1000;
let result = "no result";

if (xp <= 1000) {
  result = "The hero " + nameHero + " is level IRON";
} else if (xp > 1000 && xp <= 2000) {
  result = "The hero " + nameHero + " is level BRONZE";
} else if (xp > 2000 && xp <= 5000) {
  result = "The hero " + nameHero + " is level SILVER";
} else if (xp >= 6000 && xp <= 7000) {
  result = "The hero " + nameHero + " is level GOLD";
} else if (xp > 7000 && xp <= 8000) {
  result = "The hero " + nameHero + " is level PLATINE";
} else if (xp > 8000 && xp <= 9000) {
  result = "The hero " + nameHero + " is level ASCENDING";
} else if (xp > 9000 && xp <= 10000) {
  result = "The hero " + nameHero + " is level IMORTAL";
} else if (xp > 10000) {
  result = "The hero " + nameHero + " is level RADIANT";
}

console.log(result);
