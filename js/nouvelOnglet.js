// Créer un nouvel onglet avec une URL défini lorsqu'il y a un clic sur le bouton d'id "btn"
$('#btn').click(function(){
	chrome.tabs.create({url :'http://newbery:8080/socleCrm-front-refonte/webexts/onglet?param='
		+ document.getElementById('identifiant').value
		+ "&"
		+ document.getElementById('motDePasse').value
	})
});
// chrome.tabs.create() fonctionne aussi avec firefox
// browser.tabs.create() est aussi utlisable mais ne fonctionne pas sur Chrome