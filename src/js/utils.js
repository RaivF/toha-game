function updateKeyState(keys, event, isKeyDown) {
	keys[event.code] = isKeyDown
}

//обновление позиции
function updatePosition(obj) {
	obj.element.style.top = `${obj.y}px`
	obj.element.style.left = `${obj.x}px`
}

//обновление хп-бара
function updateHealthBar(barElement, health, maxHealth) {
	barElement.style.width = `${(health / maxHealth) * 50}%`
}

export { updateHealthBar, updateKeyState, updatePosition }
