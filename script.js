//je déclare mes constantes de données en rapports avec les btn que j'ai créé en HTML
const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toLocaleUpperCase(); //pareil que dataLowercase mais en maj
const dataNumbers = "0123456789";
const dataSymbols = "&é'(-è_çà~#{[|`^@]}=)$¤^¨ù%*µ!§:/;.,?";
const rangeValue = document.getElementById("password-length"); //const qui recupère la valeur contenu dans l'input avec l'id : password-length
const passwordOutput = document.getElementById("password-output");

//console.log(passwordOutput);

//je créé une fonction pour générer un mdp
function generatePasseword() {
  let data = []; //je déclare un tableau vide pour y stocker mes infos
  let password = "";

  if (lowercase.checked) {
    //si la touche lowercase est cochée je push ma const dataLowercase qui contient les touches en rapport avec le nom de ma const
    data.push(...dataLowercase); //j'ajoute ... pour casser mon tableau et individualiser les éléments dedans
  }
  if (uppercase.checked) {
    data.push(...dataUppercase);
  }
  if (numbers.checked) {
    data.push(...dataNumbers);
  }
  if (symbols.checked) {
    data.push(...dataSymbols);
  }

  if (data.length === 0) {
    alert("Aucun critère séléctionné");
    return; //j'envoie une alerte si mon tableau data est strictement égal à 0 (pas de case cochée donc pas de push dans mon tableau donc pas d'élément dans le array)
  }

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  } //je vais chercher un caractère : que j'arrondie au plus bas / au hasard que je multiplie par la longueur max de mon tableau contenant les caractères à ma dispo

  passwordOutput.value = password; //je définis que la value de ma variable passwordOutPut prend la valeur de ma variable password

  passwordOutput.select(); //permet de selectionner ce qui est contenu dans passwordOutput
  document.execCommand("copy"); //copy ce qui est séléctionné

  generateButton.textContent = "le MDP est copié !"; //affiche le msg dans le btn qui fait générer le mdp

  setTimeout(() => {
    generateButton.textContent = "Générer un mot de passe";
  }, 1500);
}

//j'appelle ma fonction pour générer un mdp et je la relie au btn pour générer un mdp dans mon HTML
generateButton.addEventListener("click", generatePasseword);
