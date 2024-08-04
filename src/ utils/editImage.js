export function openImagePicker() {
	const input = document.createElement('input');
	input.type = 'file';
	input.accept = 'image/*';
	input.style.display = 'none';

	input.onchange = function (e) {
		const file = e.target.files[0];
		if (file) {
			const imageUrl = URL.createObjectURL(file);
			const imageContainer = document.getElementById('imageContainer');
			imageContainer.style.backgroundImage = `url(${imageUrl})`;

			imageContainer.onload = () => {
				URL.revokeObjectURL(imageUrl);
			};
		}
	};

	document.body.appendChild(input);
	input.click();
	document.body.removeChild(input);
}
