import { updateHealthBar, updateKeyState, updatePosition } from './utils.js'
import { setupAudioLoop, playSound, toggleAudio } from './sound-control.js'
import {
	sound_hit,
	sound_hitToPlayer,
	sound_gameOver,
	sound_killEnemy,
	audioMainTheme,
	HEALTH_PLAYER,
	SPEED_BULLET_PLAYER,
	DAMAGE_BULLET_PLAYER,
	HEALTH_ENEMY,
	SPEED_BULLET,
	DAMAGE_BULLET_ENEMY,
	RATE_OF_FIRE,
} from './settings.js'
import { Player } from './player.js'
import { Enemy } from './enemy.js'
import { createBullet, firePlayerBullet, fireEnemyBullet } from './bullets.js'
import { myAlert } from './alert-txt.js'
import './burger.js'

const player = new Player()
player.element = document.createElement('div') //хитбокс игрока (всё тело не включая шляпу)
player.sprite = document.createElement('div') //спрайт игрока

player.sprite.className = 'sprite'
player.element.appendChild(player.sprite)
player.element.className = 'player'
gameContainer.appendChild(player.element)

/* Для enemy - то же самое, что и для Player */
const enemy = new Enemy()
enemy.element = document.createElement('div')

let volume = 0.2
let isPaused = true
let canUnPause = true
let keys = {} // Для отслеживания состояния клавиш
let playerBullets = []
let enemyBullets = []

// Добавление кнопок
const saveButton = document.createElement('div')

saveButton.textContent = 'Сохранить'

const loadButton = document.createElement('div')
loadButton.innerText = 'Загрузить'

menu.prepend(loadButton)
menu.prepend(saveButton)

//проверка попадания снарядов
function checkCollisions() {
	playerBullets.forEach((bullet, index) => {
		if (
			bullet.x < enemy.x + enemy.width &&
			bullet.x + bullet.vx > enemy.x &&
			bullet.y < enemy.y + enemy.height &&
			bullet.y + bullet.vy > enemy.y
		) {
			// Снаряд попал во врага
			enemy.health -= DAMAGE_BULLET_PLAYER
			bullet.element.remove()
			playerBullets.splice(index, 1)
			playSound(sound_hit)
			if (enemy.health <= 0) {
				enemy.element.classList.add('hide')
				playSound(sound_killEnemy)
				togglePause()
				canUnPause = false
				myAlert('Вы выиграли')
			}
		}
	})

	enemyBullets.forEach((bullet, index) => {
		if (
			bullet.x + bullet.vx > player.x &&
			bullet.x < player.x + player.width &&
			bullet.y < player.y + player.height &&
			bullet.y + bullet.vy > player.y
		) {
			// Снаряд попал в игрока
			player.health -= DAMAGE_BULLET_ENEMY
			bullet.element.remove()
			enemyBullets.splice(index, 1)
			playSound(sound_hitToPlayer)
			updateHealthBar(
				document.getElementById('playerHealth'),
				player.health,
				100
			)
			enemy.speed = 2 + 6 * (1 - enemy.health / 100)
			if (player.health <= 0) {
				player.health = 0
				playSound(sound_gameOver)
				togglePause()
				canUnPause = false

				myAlert('Вы проиграли :(')
			}
		}
	})
}

// Функция смены паузы
function togglePause() {
	isPaused = !isPaused
	toggleAudio(isPaused)
	if (isPaused) {
		myAlert('Пауза')
	} else {
		myAlert('Пауза снята')
	}
}

function reload() {
	player.x = 350
	player.y = 400
	player.health = HEALTH_PLAYER
	updatePosition(player) // Обновление позиции игрока

	audioMainTheme.play()

	enemy.element.classList.remove('hide')
	enemy.x = 100
	enemy.y = 20
	enemy.health = HEALTH_ENEMY
	updatePosition(enemy) // Обновление позиции врага

	isPaused = false // Восстановление состояния паузы
	canUnPause = true

	// Очистка снарядов

	playerBullets.forEach(bullet => bullet.element.remove())
	enemyBullets.forEach(bullet => bullet.element.remove())
	playerBullets = []
	enemyBullets = []
}

function saveGame() {
	togglePause()
	audioMainTheme.pause()
	const gameState = {
		player: { x: player.x, y: player.y, health: player.health },
		enemy: { x: enemy.x, y: enemy.y, health: enemy.health },
		playerBullets: playerBullets.map(bullet => ({
			x: bullet.x,
			y: bullet.y,
		})),
		enemyBullets: enemyBullets.map(bullet => ({
			x: bullet.x,
			y: bullet.y,
		})),
		isPaused: isPaused, // Сохранение состояния паузы
		volume: volume,
	}
	localStorage.setItem('gameState', JSON.stringify(gameState))
	myAlert('Игра сохранена!')
}

function loadGame() {
	togglePause()
	myAlert('Игра загружена!')
	const savedState = JSON.parse(localStorage.getItem('gameState'))
	if (savedState) {
		player.x = savedState.player.x
		player.y = savedState.player.y
		player.health = savedState.player.health
		updatePosition(player) // Обновление позиции игрока
		enemy.x = savedState.enemy.x
		enemy.y = savedState.enemy.y
		enemy.health = savedState.enemy.health
		updatePosition(enemy) // Обновление позиции врага

		isPaused = savedState.isPaused // Восстановление состояния паузы
		volume = savedState.volume
		// Очистка и восстановление снарядов
		playerBullets.forEach(bullet => bullet.element.remove())
		enemyBullets.forEach(bullet => bullet.element.remove())
		playerBullets = savedState.playerBullets.map(bullet =>
			createBullet(bullet.x, bullet.y, 0, -SPEED_BULLET_PLAYER, 'bullet')
		)
		enemyBullets = savedState.enemyBullets.map(bullet =>
			createBullet(
				bullet.x,
				bullet.y,
				Math.cos(Math.PI / 4) * SPEED_BULLET,
				Math.sin(Math.PI / 4) * SPEED_BULLET,
				'enemy-bullet'
			)
		)
	}
	audioMainTheme.play()
	audioMainTheme.volume = savedState.volume
}

// Инициализация игры
function startGame() {
	const gameContainer = document.getElementById('gameContainer')
	const menu = document.getElementById('menu')
	const volumeControl = document.getElementById('volumeControl')

	saveButton.addEventListener('click', saveGame)
	loadButton.addEventListener('click', loadGame)

	//контроль громкости
	// Перенес в функцию, чтобы просто так не валялась
	volumeControl.addEventListener('input', function () {
		volume = this.value // Обновляем громкость аудио в соответствии со значением ползунка
	})

	updatePosition(player)
	updatePosition(enemy)

	document.addEventListener('keydown', event => {
		if (event.code === 'Space' && !keys[event.code]) {
			firePlayerBullet(player, playerBullets)

			player.sprite.style.backgroundImage = 'url(./img/wizard_attack.png)'

			setTimeout(() => {
				player.sprite.style.backgroundImage = 'url(./img/wizard.png)'
			}, 500)
		}
		if (event.code === 'KeyP') {
			if (canUnPause) togglePause()
		}

		if (event.code === 'KeyR') {
			reload()
		}
		updateKeyState(keys, event, true)
	})
	document.addEventListener('keyup', event => {
		updateKeyState(keys, event, false)
	})

	enemy.element.className = 'enemy'
	gameContainer.appendChild(enemy.element)

	audioMainTheme.addEventListener('ended', setupAudioLoop)

	function gameLoop() {
		if (isPaused) return
		audioMainTheme.volume = volume

		player.handlePlayerMovement(keys, gameContainer)

		updatePosition(player)

		enemy.x += enemy.speed * enemy.direction
		if (enemy.x > gameContainer.offsetWidth - enemy.width || enemy.x < 0) {
			enemy.direction *= -1
		}
		// Обновление позиций игрока и врага
		updatePosition(player)
		updatePosition(enemy)

		// Обновление позиций снарядов
		playerBullets.forEach((bullet, index) => {
			bullet.y += bullet.vy
			updatePosition(bullet)
			if (bullet.y < 0) {
				bullet.element.remove()
				playerBullets.splice(index, 1)
			}
		})

		enemyBullets.forEach((bullet, index) => {
			bullet.x += bullet.vx
			bullet.y += bullet.vy
			updatePosition(bullet)
			if (
				bullet.y > gameContainer.offsetHeight ||
				bullet.x < 0 ||
				bullet.x > gameContainer.offsetWidth
			) {
				bullet.element.remove()
				enemyBullets.splice(index, 1)
			}
		})

		// Проверка столкновений
		checkCollisions()

		// Обновление полос здоровья
		updateHealthBar(
			document.getElementById('playerHealth'),
			player.health,
			HEALTH_PLAYER
		)

		enemy.speed = 2 + 6 * (1 - enemy.health / 100)
		updateHealthBar(
			document.getElementById('enemyHealth'),
			enemy.health,
			HEALTH_ENEMY
		)
		enemy.speed = 2 + 6 * (1 - enemy.health / 100)
	}

	// Запуск игрового цикла
	setInterval(gameLoop, 16) // Запускаем игровой цикл с частотой ~60 кадров в секунду

	// Запуск стрельбы врага с интервалом
	setInterval(() => {
		fireEnemyBullet(isPaused, enemyBullets, enemy)
	}, RATE_OF_FIRE) // Враг стреляет каждые 0.1 секунды
}

export { startGame, volume }
