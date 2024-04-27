// SOUND SETTINGS
import { audioMainTheme, sound_pause, sound_resume } from './settings.js'
import { volume } from './engine.js'

function playSound(url) {
	const audio = new Audio(url) // Создание нового объекта Audio
	audio.volume = volume
	audio.play() // Начать воспроизведение
}

function setupAudioLoop() {
	audioMainTheme.addEventListener('ended', function () {
		this.currentTime = 0 // Установка времени на начало трека
		this.play() // Перезапуск воспроизведения
	})

	audioMainTheme.play() // Начальное воспроизведение
}

function toggleAudio(isPaused) {
	if (isPaused) {
		audioMainTheme.pause()
		playSound(sound_pause)
	} else {
		audioMainTheme.play()
		playSound(sound_resume)
	}
}

export { setupAudioLoop, playSound, toggleAudio }
