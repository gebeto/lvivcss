	// alert(permission);
	try {
		self.registration.showNotification(`LvivCSS'19`, {
			// image: '/assets/images/speakers/shpilevska.jpg',
			body: `13:00 "Ніч темна і повна анти-pattern'ів"
Олена Шпілевська`,
			icon: '/assets/favicon.png'
		});

	} catch (e) {
		alert(e);
	}