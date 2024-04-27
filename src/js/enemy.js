import { HEALTH_ENEMY, SPEED_ENEMY } from './settings.js'

class Enemy {
	x = 10
	y = 20
	health = 100
	width = 100 // размеры врага
	height = HEALTH_ENEMY
	speed = SPEED_ENEMY
	direction = 1
	element
}

export { Enemy }
