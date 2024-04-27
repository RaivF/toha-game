//SOUND CONSTANT
const sound_pause = './sound/pause.mp3'
const sound_hit = './sound/hit.mp3'
const sound_resume = './sound/resume.mp3'
const sound_hitToPlayer = './sound/hitToPlayer.mp3'
const sound_gameOver = './sound/gameOver.mp3'
const sound_killEnemy = './sound/killEnemy.mp3'
const audioMainTheme = new Audio('./sound/mainTheme.mp3')

//SETTINGS
const HEALTH_PLAYER = 100 //здоровье игрока
const SPEED_BULLET_PLAYER = 10 // скорость пули игрока
const DAMAGE_BULLET_PLAYER = 5 //урон игрока
const SPEED_PLAYER = 5 //скорость игрока

const HEALTH_ENEMY = 100 //здоровье врага
const SPEED_ENEMY = 4 // скорость врага
const RANDOM_ANGLE_SHOOT_FOR_ENEMY = 1.6 //значение угла полёта снаряда врага, чем меньше, тем тем больше угол
const SPEED_BULLET = 3 // скорость снаряда врага
const DAMAGE_BULLET_ENEMY = 30 //урон врага
const RATE_OF_FIRE = 100 // темп стрельбы, чем меньше значение, тем выше темп

export {
	sound_pause,
	sound_hit,
	sound_resume,
	sound_hitToPlayer,
	sound_gameOver,
	sound_killEnemy,
	audioMainTheme,
	HEALTH_PLAYER,
	SPEED_BULLET_PLAYER,
	DAMAGE_BULLET_PLAYER,
	SPEED_PLAYER,
	HEALTH_ENEMY,
	SPEED_ENEMY,
	RANDOM_ANGLE_SHOOT_FOR_ENEMY,
	SPEED_BULLET,
	DAMAGE_BULLET_ENEMY,
	RATE_OF_FIRE,
}
