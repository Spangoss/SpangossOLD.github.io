function checkValue(wishlistItem) {
	var inputGroupId = document.getElementById(wishlistItem + '-input-group');
	var selectId = document.getElementById(wishlistItem);
	var value =
		selectId.options[selectId.selectedIndex].value;
	if (value == 0) {
		selectId.classList.remove("valid-wishlist-item");
		inputGroupId.classList.remove("valid-wishlist-item");
	} else {
		selectId.classList.add("valid-wishlist-item");
		inputGroupId.classList.add("valid-wishlist-item");
	}
}

function selectWishlistItem() {
	alert('Hello World!')
}
