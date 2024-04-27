import { HEALTH_PLAYER, SPEED_PLAYER } from './settings.js'

class Player {
	x = 100
	y = 350
	health = HEALTH_PLAYER
	width = 30 // Ширина для вычисления столкновений
	height = 25 // Высота для вычисления столкновений
	element
	sprite

	handlePlayerMovement(keys, gameContainer) {
		let totalPlayerSpeed = SPEED_PLAYER

		if (keys['KeyF']) {
			totalPlayerSpeed = SPEED_PLAYER * 2
		}

		if (keys['KeyW']) {
			this.y -= totalPlayerSpeed
		}
		if (keys['KeyS']) {
			this.y += totalPlayerSpeed
		}
		if (keys['KeyA']) {
			this.x -= totalPlayerSpeed
		}
		if (keys['KeyD']) {
			this.x += totalPlayerSpeed
		}

		// Ограничить движение в пределах контейнера
		this.x = Math.max(
			0,
			Math.min(gameContainer.offsetWidth - this.width, this.x)
		)
		this.y = Math.max(
			200,
			Math.min(gameContainer.offsetHeight - this.height, this.y)
		)
	}
}

export { Player }
