function champEstVideMdp(){
	var identifiant = document.getElementById('identifiant');
	var motDePasse = document.getElementById('motDePasse');
	var erreur_identifiant = document.getElementById('erreur_identifiant');
	var erreur_motDePasse = document.getElementById('erreur_motDePasse');
	var hasError = false;

	// Test si les champs sont vides si oui ajoute un message d'erreur
	if(identifiant.value == ""){
		erreur_identifiant.innerHTML = 'Le champ identifiant est vide';
		hasError = true;
	}
	if(motDePasse.value == ""){
		erreur_motDePasse.innerHTML = 'Le champ mot de passe est vide';
		hasError = true;
	}
	if (hasError) {
		return;
	}

	// Récupère la valeur des champs
	const formData = new FormData();
	formData.append('login', identifiant.value);
	formData.append('password', motDePasse.value);

	// Crée une requête où on envoie le contenu de formData
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "http://newbery:8080/socleCrm-front-refonte/webexts/auth", true);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4) {
		// JSON.parse does not evaluate the attacker's scripts.
		alert(JSON.parse(xhr.responseText).value);
		}
	}
	xhr.send(formData);
	return;

	$.ajax('http://newbery:8080/socleCrm-front-refonte/webexts/auth', {
		"data" : {"login":identifiant, "password":motDePasse},
		"method" : 'POST'
	}).done(function(data) {
		alert('Ok');
	}).fail(function(errors) {
		alert('Fail');
	});
}

// Execute la fonction lorsque l'on clique sur le bouton de connexion
$(document).ready(function() {
	$('.js-button-connexion').on('click', champEstVideMdp);
});