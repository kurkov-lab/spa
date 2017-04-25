var controller = {
	getCurrency: function () {
		return this.model.getData();
	},
	storeCurrency: function (currency) {
		this.model.addData(currency);
		this.updateView();
	},
	delCurrency: function (obj) {
		model.delData(obj);
	},
	updateView: function () {
		this.data = this.getCurrency();
		this.view.display(this.data);
	},
	model: model,
	view: view,
	data: null
};