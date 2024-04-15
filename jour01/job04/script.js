function bisextile(annee) {
    // If the year is divisible by 4 or 400, it is a leap year
    if ((annee % 4 == 0 && annee % 100 != 0) || annee % 400 == 0) {
        return true;
    }
    return false;
}

var annee = 2020;
console.log("L'année " + annee + " est bisextile " + bisextile(annee));
annee = 2021;
console.log("L'année " + annee + " est bisextile " + bisextile(annee));