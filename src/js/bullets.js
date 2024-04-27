import { RANDOM_ANGLE_SHOOT_FOR_ENEMY, SPEED_BULLET, SPEED_BULLET_PLAYER } from './settings.js'
import { updatePosition } from './utils.js'

//создание снаряда
function createBullet(x, y, vx, vy, className) {
	const bullet = { x, y, vx, vy, element: document.createElement('div') }
	bullet.element.className = className
	const gameContainer = document.getElementById('gameContainer')
	gameContainer.appendChild(bullet.element)
	updatePosition(bullet)
	return bullet
}

// Cоздание снаряда игрока
function firePlayerBullet(player, bulletsContainer) {
	let bullet = createBullet(
		player.x + player.width / 2,
		player.y,
		0,
		-SPEED_BULLET_PLAYER,
		'bullet'
	)
	bulletsContainer.push(bullet)
}

//создание снаряда врага
function fireEnemyBullet(isPaused, enemyBullets, enemy) {
	if (isPaused) return
	let angle =
		Math.PI / 4 + (Math.random() * Math.PI) / RANDOM_ANGLE_SHOOT_FOR_ENEMY // Случайный угол в пределах конуса
	let speed = SPEED_BULLET // Скорость снаряда врага
	let bullet = createBullet(
		enemy.x + enemy.width / 2,
		enemy.y,
		Math.cos(angle) * speed,
		Math.sin(angle) * speed,
		'enemy-bullet'
	)
	enemyBullets.push(bullet)
}

export {createBullet, firePlayerBullet, fireEnemyBullet}