Notification.requestPermission().then(function(permission) {
	new Notification(`LvivCSS'19`, {
		image: '/assets/images/speakers/shpilevska.jpg',
		body: `13:00 "Ніч темна і повна анти-pattern'ів"
Олена Шпілевська`,
		icon: '/assets/favicon.png'
	});
});