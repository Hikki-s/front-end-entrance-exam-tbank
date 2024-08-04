import { createRipple } from './rippleEffect.js';

export function createEditableInput(editableTexts) {
	editableTexts.forEach((textBlock) => {
		const savedText = localStorage.getItem(textBlock.dataset.id);
		if (savedText) {
			textBlock.textContent = savedText;
		}
	});

	function startEditing(event) {
		createRipple(event);
		event.target.contentEditable = true;
		event.target.focus();
	}

	function stopEditing(event) {
		event.target.contentEditable = false;
		const textBlock = event.target;
		localStorage.setItem(textBlock.dataset.id, textBlock.textContent);
	}

	function handleClick(event) {
		editableTexts.forEach((textBlock) => {
			if (textBlock.isContentEditable && !textBlock.contains(event.target)) {
				stopEditing({ target: textBlock });
			}
		});
	}

	function handleKeyDown(event) {
		if (event.key === 'Enter') {
			stopEditing({ target: event.target });
			event.stopPropagation();
		}
	}

	editableTexts.forEach((textBlock) => {
		textBlock.addEventListener('mousedown', startEditing);
		textBlock.addEventListener('blur', stopEditing);
		textBlock.addEventListener('keydown', handleKeyDown);
	});

	document.addEventListener('mousedown', handleClick);
}
