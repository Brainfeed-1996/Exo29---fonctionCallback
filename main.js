//Fonction qui sera appelée en deuxième (la fonction de callback)
const func = () => {
  console.log("Je suis appelé par la fonction principale");
};

const fn02 = () => {
  console.log("Je suis appelé par la fonction principale mais je suis func02");
};

const fn03 = () => {
  console.log("Je suis appelé par la fonction principale mais je suis func03");
};
//fonction principale
function fn01(callback) {
  console.log("Je suis la fonction principale");
  callback();
}

fn01(func03);
