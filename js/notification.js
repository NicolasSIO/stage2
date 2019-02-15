// Au chargement de la fenêtre (ou de la popup),
// vérifions que nous avons la permission de publier des notifications.
// Si ce n'est pas le cas, on la demande
window.addEventListener('load', function () {
	if (window.Notification && Notification.permission !== "granted") {
		Notification.requestPermission(function (status) {
		if (Notification.permission !== status) {
			Notification.permission = status;
		}});
	}

	// Ensuite, créons la notification lorsqu'il y a un click sur le bouton d'id "btn"
	$('#btn').click(function(){
		let notification = new Notification('Test',{
			icon: '../img/icon_popup.png',
			body: 'Ceci est un test (ne pas cliquer)'
		});
	});
});