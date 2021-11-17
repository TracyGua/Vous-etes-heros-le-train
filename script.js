let canFight = false;

function fight() {
  canFight = true;
  localStorage.setItem('canFight', canFight)
  goToChapter("debut_bataille");
}

function impact() {
  if (canFight == true) {
    goToChapter("gagne_bataille");
  } else {
    goToChapter("mort_1");
  }
}

const chaptersObj = {
  le_depart: {
    subtitle: "Le départ",
    text: "Le destin du monde est entre vos mains. Vous êtes dans un train en direction de la bombe dont vous êtes le seul à pouvoir désamorcer.",
    img: "assets/imgs/chap_01.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: 'goToChapter("arret_1")',
      },
    ],
    video: "assets/video/train_passe.mp4",
  },
  arret_1: {
    subtitle: "Le premier arrêt",
    text: "Soudain, le train s'arrête devant l'entrée d'un quartier qui ressemble étrangement à l'endroit de votre destination. Voulez-vous descendre?",
    img: "assets/imgs/chap_02.jpg",
    options: [
      { text: "Descendre du train", action: 'goToChapter("attaque")' },
      { text: "Rester dans le train", action: 'goToChapter("arret_2")' },
    ],
  },
  attaque: {
    subtitle: "Un quartier dangereux",
    text: "Après être descendu, vous parcourez les rues du quartier sans prendre aucune précaution. Soudainement, dans une allée sombre, vous êtes attaqué par des bandits qui vous volent ensuite toutes vos affaires.",
    img: "assets/imgs/chap_03.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: 'goToChapter("prochain_train")',
      },
    ],
  },
  prochain_train: {
    subtitle: "Fuire",
    text: "En panique, vous courez vers la gare et prenez le prochain train vers votre destination.",
    img: "assets/imgs/chap_04.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: 'goToChapter("retrouve")',
      },
    ],
    video: "assets/video/courir.mp4",
  },
  retrouve: {
    subtitle: "Retrouvé",
    text: "Malheureusement, avant de pouvoir embarquer, les bandits vous retrouvent. Vous commencez à regretter la décision de descendre au premier arrêt.",
    img: "assets/imgs/chap_05.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: 'goToChapter("se_battre")',
      },
    ],
  },
  se_battre: {
    subtitle: "Derniers recours",
    text: "Savez-vous vous battre?",
    img: "assets/imgs/chap_06.jpg",
    options: [
      { text: "Oui", action: "fight()" },
      { text: "Non", action: 'goToChapter("debut_bataille")' },
    ],
  },
  debut_bataille: {
    subtitle: "Le premier coup de poing",
    text: "Ils commencent à vous donner des coups",
    img: "assets/imgs/chap_17.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: "impact()",
      },
    ],
    video: "assets/video/fight.mp4",
  },
  mort_1: {
    subtitle: "Trop faible, trop tard",
    text: "Comme vous n'avez aucune expérience en terme de combat, vous vous faites tabasser à mort et vous échouez votre mission. La planète est condamnée!",
    img: "assets/imgs/chap_07.jpg",
    options: [
      {
        text: "Recommencer le voyage",
        action: 'goToChapter("le_depart")',
      },
    ],
  },
  gagne_bataille: {
    subtitle: "De force",
    text: "Grâce à votre expérience en terme de combat physique, vous arrivez à vous défendre et à leur échapper.",
    img: "assets/imgs/chap_08.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: 'goToChapter("quel_transport")',
      },
    ],
  },
  quel_transport: {
    subtitle: "La voie du retour",
    text: "Comment voulez-vous vous continuer le trajet?",
    img: "assets/imgs/chap_09.jpg",
    options: [
      { text: "Marcher", action: 'goToChapter("victoire_1")' },
      {
        text: "Prendre le prochain train",
        action: 'goToChapter("victoire_1")',
      },
    ],
  },
  victoire_1: {
    subtitle: "Une victoire pour l'humanité",
    text: "Arrivée à l'emplacement de la bombe, vous ne perdez aucun instant et utilisez vos talents pour la désammorcer. La planète fut à une seconde proche de la destruction, mais votre mission est un exploit. Vous êtes le héros!",
    img: "assets/imgs/chap_10.jpg",
    options: [
      {
        text: "Recommencer le voyage",
        action: 'goToChapter("le_depart")',
      },
    ],
  },
  arret_2: {
    subtitle: "Le deuxième arrêt",
    text: "Le train continue son trajet en direction du deuxième arrêt. Vous pensez sans cesse à la bombe et espérez fortement arriver à temps. Cependant, arrivé au deuxième arrêt, vous avez extrêmement faim.",
    img: "assets/imgs/chap_11.jpg",
    options: [
      { text: "Rester dans le train", action: 'goToChapter("turbulences")' },
      {
        text: "Descendre acheter à manger rapidement",
        action: 'goToChapter("turbulences")',
      },
    ],
  },
  turbulences: {
    subtitle: "Turbulences",
    text: "Le train reprend sa route, mais au bout de quelques temps, il commence à avoir des turbulences en raison du mauvais temps. Vous commencez à paniquer.",
    img: "assets/imgs/chap_12.jpg",
    options: [
      { text: "Rester dans le train", action: 'goToChapter("accident")' },
      {
        text: "Descendre au prochain arrêt",
        action: 'goToChapter("autre_train")',
      },
    ],
    video: "assets/video/train_passe2.mp4",
  },
  accident: {
    subtitle: "L'Accident",
    text: "Soudain, vous sentez le train basculer vers la gauche en plein dans une falaise. Il n'y a plus aucune issue et vous connaissez déjà le sort qui vous attend.",
    img: "assets/imgs/chap_13.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: 'goToChapter("mort_2")',
      },
    ],
    video: "assets/video/accident.mp4",
  },
  mort_2: {
    subtitle: "Une fin tragique",
    text: "Le train bascule et tombe dans la falaise. Vous essayez de rester en vie, mais lorsque le véhicule commence à prendre feu, tout espoir est perdu. Vous mourrez et quelques heures plus tard, la planète entière est détruite par la bombe.",
    img: "assets/imgs/chap_14.jpg",
    options: [
      {
        text: "Recommencer le voyage",
        action: 'goToChapter("le_depart")',
      },
    ],
  },
  autre_train: {
    subtitle: "Un autre train",
    text: "Vous descendez au troisième arrêt par précaution et prenez le prochain train vers votre destination.",
    img: "assets/imgs/chap_15.jpg",
    options: [
      {
        text: "Prochain chapitre",
        action: 'goToChapter("victoire_2")',
      },
    ],
  },
  victoire_2: {
    subtitle: "Une victoire pour l'humanité",
    text: "Vous êtes enfin arrivé! Vous ne perdez pas un instant et commencez immédiatement à désammorcer la bombe. Le monde fut proche de la catastrophe, mais grâce à votre génie, la planète est sauvée. Vous êtes un héros.",
    img: "assets/imgs/chap_16.jpg",
    options: [
      {
        text: "Recommencer le voyage",
        action: 'goToChapter("le_depart")',
      },
    ],
  },
};

function goToChapter(chapterName) {
  const titre = document.querySelector(".titre");
  const resume = document.querySelector(".resume");

  titre.innerText = chaptersObj[chapterName].subtitle;
  resume.innerText = chaptersObj[chapterName].text;

  let baliseImg = document.querySelector(".imgChapitre");
  baliseImg.innerHTML = `<img class="imageChapitre" src=${chaptersObj[chapterName].img}>`;

  let barreBouton = document.querySelector(".choix");

  const tableauArr = chaptersObj[chapterName].options;

  let bouton = "";
  for (let index = 0; index < tableauArr.length; index++) {
    let choix = tableauArr[index].action;
    bouton += `<ul class="choix"><button type="button" onclick ='${choix}'>${tableauArr[index].text}</button></ul>`;
  }
  barreBouton.innerHTML = bouton;

  if (chaptersObj[chapterName].video != undefined) {
    const vid = chaptersObj[chapterName].video;
    baliseImg.innerHTML = `<video class="imageChapitre" src=${vid} loop muted></video>`;
    let vid2 = document.querySelector(".imageChapitre");
    vid2.play();
  } else {
    baliseImg.innerHTML = `<img class="imageChapitre" src=${chaptersObj[chapterName].img}>`;
  }

  const son = new Audio("assets/son/zoom.wav");
  son.play();

  //sauvegarde
  let chap = chapterName;
  localStorage.setItem("chapitre", chap);
  
}
if (localStorage.getItem("chapitre") != "le_depart") {
  goToChapter(localStorage.getItem("chapitre"));
  
} else {
  goToChapter("le_depart");
}
/*
if(canFight != false){
  localStorage.setItem("canFight", canFight);
  localStorage.getItem("canFight")
} else {
  canFight = false
}*/

canFight = localStorage.getItem('canFight');