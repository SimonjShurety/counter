let valueHandler = {
	element: document.querySelector('#value'),
	value: 0,
	direction: 1,
	add: function() {
		this.value += 1;
		this.element.innerText = this.value;
	},
	minus: function() {
		this.value += -1;
		this.element.innerText = this.value;
	},
	both: function() {
		this.value += this.direction;
		if (this.value > 9) {
			this.direction = -1;
		} else if (this.value < 1) {
			this.direction = 1;
		}
		this.element.innerText = this.value;
	}
};
