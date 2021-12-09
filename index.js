let health = 0
let hunger = 100
let happiness = 0 

const reset = () => {
	document.querySelector('#health-fill').style.width = `${health}%`
	document.querySelector('#hunger-fill').style.width = `${hunger}%`
	document.querySelector('#happiness-fill').style.width = `${happiness}%`
}

reset()

const healthButton = document.querySelector('#health-button')
healthButton.addEventListener('click', () => {
	if (health < 100) {
		health += 5
		document.querySelector('#health-fill').style.width = `${health}%`
	}
})

const hungerButton = document.querySelector('#hunger-button')
hungerButton.addEventListener('click', () => {
	if (hunger > 0) {
		hunger -= 5
		document.querySelector('#hunger-fill').style.width = `${hunger}%`
	}
})
const happinessButton = document.querySelector('#happiness-button')
happinessButton.addEventListener('click', () => {
	if (happiness < 100) {
		happiness += 5
		document.querySelector('#happiness-fill').style.width = `${happiness}%`
	}
})


/*
Functions needed:
	Incrementer
		modifies corresponding value, then accordingly modifies bar
		takes "button ID" as a parameter

	Time ticker
		every X seconds applies aging modifiers

*/
