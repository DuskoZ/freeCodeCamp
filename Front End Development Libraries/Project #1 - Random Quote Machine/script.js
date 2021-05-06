let citat = [
  "Bogatom kapom nećeš sakriti siromaštvo u vlastitoj glavi.",
  "Jezik je više glava poseko nego sablja.",
  "Čista savest ne boji se kucanja noću.",
  "Gospodar si reči koju nisi izgovorio, a rob one koju si rekao.",
  "Ako nekoga pobediš argumentom, to još ne mora da znači da si ga uverio.",
  "Čovek će odustati od skoro svega, osim od svoje patnje.",
  "Ko kontroliše prošlost, kontroliše sadašnjost. Ko kontroliše sadašnjost, kontroliše budućnost.",
  "Mudrome je i ćutanje odgovor.",
  "Ne veruj onima koji mnogo govore o svojoj pravednosti.",
  "Pisati je dobro, razmišljati je bolje. Mudrost je dobra, strpljenje je bolje.",
  "Kada ljubav prema otadžbini zamre, tada i država mora umreti.",
  "Nezadovoljstvo je kao zver, nemoćna kad se rodi, strašna kad ojača.",
  "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.",
  "Kad bi ljudi znali koliko malo pameti upravlja svetom, umrli bi od straha.",
  "Vrhunska veština se sastoji u slamanju neprijateljskog otpora bez borbe.",
  "Ništa više uplašenom čoveku ne daje hrabrost kao tuđi strah.",
  "Bolje je umreti stojeći na nogama, nego živeti klečeći na kolenima."
];

let autor = [
  "Ruska narodna poslovica",
  "Srpska narodna poslovica",
  "Kineska narodna poslovica",
  "Arapska narodna poslovica",
  "Čuang Ce",
  "Džon Kliz",
  "Džordž Orvel",
  "Euripid",
  "Fridrih Niče",
  "Herman Hese",
  "Mihajlo Pupin",
  "Meša Selimović",
  "Jovan Dučić",
  "Ivo Andrić",
  "Sun Cu",
  "Umberto Eko",
  "Žan Pol Sartr"
];

let randomColor = () => {
  return Math.floor(Math.random()*16777215).toString(16);
}


let newQuote = () => {
  let color = '#' + randomColor();
  document.body.style.backgroundColor = color;
  document.body.style.transition = "background-color 1s linear";
  document.getElementById('color').innerHTML = color;

  let randomNum = Math.floor(Math.random() * citat.length);
  document.getElementById("text").innerHTML = '"' + citat[randomNum] + '"';
  document.getElementById("author").innerHTML = '- ' + autor[randomNum];
}

