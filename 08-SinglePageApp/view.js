var view = {
	display: function (data) {
		let self = this;
		// create new data view to be displayed
		var elem, text, i;
		this.clear();

		let dataView = document.querySelector("#dataview");

		let table = document.createElement("table");
		dataView.appendChild(table);
		let tableHead = document.createElement("thead");
		let tableBody = document.createElement("tbody");

		let headCode = document.createElement("th");
		headCode.innerText = "Code";
		let headName = document.createElement("th");
		headName.innerText = "Name";
		let headRate = document.createElement("th");
		headRate.innerText = "Rate";
		let tr = document.createElement("tr");

		tr.appendChild(headCode);
		tr.appendChild(headName);
		tr.appendChild(headRate);

		tableHead.appendChild(tr);

		table.appendChild(tableHead);


		for (let i = 0; i < data.length; i++) {
			let elem = document.createElement("tr");

			let code = document.createElement("td");
			code.innerText = data[i].code;
			let name = document.createElement("td");
			name.innerText = data[i].name;
			let rate = document.createElement("td");
			rate.innerText = data[i].rate;

			elem.addEventListener("dblclick", function (event) {
				self.removeLine(data[i]);
			});

			elem.appendChild(code);
			elem.appendChild(name);
			elem.appendChild(rate);
			tableBody.appendChild(elem);
		}
		table.appendChild(tableBody);
	},
	clear: function () {
		// remove old data
		var dataView = document.getElementById('dataview');
		while (dataView.firstChild) {
			dataView.removeChild(dataView.firstChild);
		}
	},
	removeLine: function (obj) {
		controller.delCurrency(obj);
	},
	addCurrency: function () {
		var currency = {
			code: document.getElementById('curCode').value,
			rate: document.getElementById('rate').value,
			name: document.getElementById('curName').value
		}
		controller.storeCurrency(currency);
	}
};
