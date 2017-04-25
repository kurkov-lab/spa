var model = {
	getData: function () { return this.storage; },
	addData: function (data) { this.storage.push(data); },
	delData: function (obj) { 
		let copy = this.storage.slice();
		console.log(copy);

		this.copy.forEach(function(elem, index, array) {
			if (elem.code === obj.code) {
				console.log("index", index);
				console.log("array", )
				copy.splice(index, 1);
			}
		});

		console.log("storage", this.storage);
		console.log("copy", copy);
		this.storage = copy;
	},
	storage: [] // array of objects {code, rate, name}
};;