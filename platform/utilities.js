module.exports = {
	mirrorKeys(array) {
		var object = {};

		for (var i = 0; i < array.length; i++) {
			object[array[i]] = array[i];
		}

		return object;
	}
}