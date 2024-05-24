document.addEventListener("change", function(e) {
  if (e.target.id === "profile_image_upload") {
    if (e.target.files.length) {
      let reader = new FileReader();
      reader.onload = function(e) {
        document.querySelectorAll('.hidden').forEach(function(element) {
          element.classList.remove('hidden');
        });
        document.querySelectorAll('.profile-default-img').forEach(function(element) {
          element.classList.remove('profile-default-img');
        });
        let profileImg = document.getElementById('profile-img');
        if (profileImg) {
          profileImg.remove();
        }
        document.getElementById('profile-img-prev').setAttribute('src', e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  }
});
