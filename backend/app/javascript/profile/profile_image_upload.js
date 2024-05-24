document.getElementById("profile_image_upload").addEventListener("change", function(e) {
	if (e.target.files.length) {
		let reader = new FileReader();
		reader.onload = function(e) {
			// Remove the 'hidden' class from elements
			document.querySelectorAll('.hidden').forEach(function(element) {
				element.classList.remove('hidden');
			});
			// Remove the 'profile-default-img' class from elements
			document.querySelectorAll('.profile-default-img').forEach(function(element) {
				element.classList.remove('profile-default-img');
			});
			// Remove the element with id 'profile-img' if it exists
			let profileImg = document.getElementById('profile-img');
			if (profileImg) {
				profileImg.remove();
			}
			// Set the src attribute of the element with id 'profile-img-prev' to the image data
			document.getElementById('profile-img-prev').setAttribute('src', e.target.result);
		};
		reader.readAsDataURL(e.target.files[0]);
	}
});

