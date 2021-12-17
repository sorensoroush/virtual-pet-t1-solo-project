let health = 100
let hunger = 0
let happiness = 100 
let isAlive = true
let petAge = 0

const healthFill = document.querySelector('#health-fill')
const hungerFill = document.querySelector('#hunger-fill')
const happinessFill = document.querySelector('#happiness-fill')

const petNameArea = document.querySelector('#pet-name')
const petAgeArea = document.querySelector('#pet-age')
const petImage = document.querySelector('#pet-image')
console.log(petAgeArea)

const reset = () => {
	health = 100
	hunger = 0
	happiness = 100 
	petAge = 0
	isAlive = true
	petImage.src = 'assets/Mametchi-tp.png'

	const petName = prompt('Please type the name of your tamagotchi') || 'Mametchi'
	document.querySelector('#pet-name').innerText = petName

	healthFill.style.width = `${health}%`
	hungerFill.style.width = `${hunger}%`
	happinessFill.style.width = `${happiness}%`
}
reset()

const confineValue = value => {
	let confinedValue = value
	if (value > 100) {confinedValue = 100}
	if (value < 0) {confinedValue = 0}
	return confinedValue
}

const statUpdate = (stat, increment) => {
	switch (stat) {
		case 'health':
			health += increment
			health = confineValue(health)
			healthFill.style.width = `${health}%`
			console.log(`Health: ${health}`)
			console.log(`Health fill: ${healthFill.style.width}`)
			break
		case 'hunger':
			hunger += increment
			hunger = confineValue(hunger)
			hungerFill.style.width = `${hunger}%`
			console.log(`Hunger: ${hunger}`)
			console.log(`Hunger fill: ${hungerFill.style.width}`)
			break
		case 'happiness':
			happiness += increment
			happiness = confineValue(happiness)
			happinessFill.style.width = `${happiness}%`
			console.log(`Happiness: ${happiness}`)
			console.log(`Happiness fill: ${happinessFill.style.width}`)
			break
	}
}

const statTimer = interval => {
	timeTicker = setInterval(() => {
		petAge++
		petAgeArea.innerText = `${petAge} days`
		console.log(`Pet age: ${petAge}`)
		statUpdate('health', -10)
		statUpdate('hunger', 10)
		const randNum = Math.round(Math.random() * 10 + 5)
		console.log(`Random happiness modifier: ${randNum}`)
		statUpdate('happiness', -randNum)
		if (health <= 0) {
			petImage.src = 'assets/Mametchi-dead-tp.png'
			alert('Game over, your pet is dead')
			clearInterval(timeTicker)
			isAlive = false
		}
	}, interval * 1000
	)
}

statTimer(2)

const healthButton = document.querySelector('#health-button')
healthButton.addEventListener('click', () => {
	if (isAlive) {statUpdate('health', 5)}
})

const hungerButton = document.querySelector('#hunger-button')
hungerButton.addEventListener('click', () => {
	if (isAlive) {statUpdate('hunger', -5)}
})

const happinessButton = document.querySelector('#happiness-button')
happinessButton.addEventListener('click', () => {
	if (isAlive) {statUpdate('happiness', 5)}
})

const resetButton = document.querySelector('#reset-button')
resetButton.addEventListener('click', () => {
	reset()
})
