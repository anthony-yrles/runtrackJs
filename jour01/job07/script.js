function jourTravaille(date) {
    let jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    let fériés = ['1/1', '1/5', '8/5', '14/7', '15/8', '1/11', '11/11', '25/12'];
    let jour = jours[date.getDay()];
    let specialeDate = date.getDate() + '/' + (date.getMonth() + 1);
    console.log('Nous sommes le ' + specialeDate);
    if ((jour === 'Samedi' || jour === 'Dimanche') && fériés.includes(specialeDate)){
        console.log('Non, ' + jour + ' est un week-end et un jour férié');
    }
    else if (fériés.includes(specialeDate)) {
        console.log('Non, ' + jour + ' est un jour férié');
    } 
    else if (jour === 'Samedi' || jour === 'Dimanche') {
        console.log('Non, ' + jour + ' est un week-end');
    } else {
        console.log('Oui, ' + jour + ' est un jour travaillé');
    }
}

jourTravaille(new Date('2021-05-01'));
jourTravaille(new Date('2021-05-02'));
jourTravaille(new Date('2021-05-03'));
jourTravaille(new Date('2021-05-04'));
jourTravaille(new Date('2021-05-05'));
jourTravaille(new Date('2021-05-06'));
jourTravaille(new Date('2021-05-07'));
jourTravaille(new Date('2021-05-08'));
jourTravaille(new Date('2021-05-09'));
jourTravaille(new Date('2021-05-10'));
jourTravaille(new Date('2021-05-11'));
