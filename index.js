let health = 100
let hunger = 0
let happiness = 100 

const buttons = document.querySelectorAll('button')
buttons.forEach(button => {
	button.onclick(
		() => console.log(this.name)
	)
})

const fills = document.querySelectorAll('.fill')
console.log(fills)

fills.forEach(fill => {
	fill.style.width = `60%`
})


/*
Functions needed:
	Incrementer
		modifies corresponding value, then accordingly modifies bar
		takes "button ID" as a parameter

	Time ticker
		every X seconds applies aging modifiers

*/
