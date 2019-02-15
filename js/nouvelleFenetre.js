// Créer une nouvelle fenêtre avec une URL défini lorsqu'il y a un clic sur le bouton d'id "btn"
$('#btn').click(function(){
	chrome.windows.create({url : 'https://www.google.com', type : "popup"})
});