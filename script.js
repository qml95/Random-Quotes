// Définition des variables globales du DOM
var quoteBox    = document.getElementById("quote-box");
var quoteText   = quoteBox.querySelector('.quote');
var sourceText  = quoteBox.querySelector('.source')
var bodyElt     = document.querySelector("body");
var boutonElt   = document.querySelector("button");



// Déclaration des fonctions
function genererCitation(tableauDeCitation) {
  var maCitation = tableauDeCitation[Math.floor(Math.random()*tableauDeCitation.length)]
  return maCitation;
}

function genererCouleur(tableauDeCouleurs) {
  var maCouleur = tableauDeCouleurs[Math.floor(Math.random()*tableauDeCouleurs.length)]
  return maCouleur;
}

function creationcitation() {
  var citation = genererCitation(mesCitations);

  var nouvelleSource = `
  <div id="quote-box">
    <p class="quote" >
      ${citation.citation}
    </p>
    <p class="source">
      ${citation.author}
      <span class="citation">
        ${citation.source}
      </span>
      <span class="year">
        ${citation.year}
      </span>
    </p>
  </div>
  `;

  quoteBox.innerHTML = nouvelleSource;
}


function afficherCouleur() {
  var couleur = genererCouleur(mesCouleurs);

  bodyElt.style.backgroundColor = couleur.backgroundColor;
  bodyElt.style.color = couleur.color;
  boutonElt.style.backgroundColor = couleur.backgroundColorBouton;
  boutonElt.style.color = couleur.colorBouton;
}


function afficherCitation() {//début de la fonction afficherCitation
  quoteBox.innerText = '';
  creationcitation();
  afficherCouleur();
}

// fonction timer pour un interval de 5sc
function timer() {
  afficherCitation();
  setTimeout(timer, 4000);
}


// Event listener
document.getElementById('loadQuote').addEventListener("click", afficherCitation);

// timer
timer();
