// TODO: Complete the 'counter' function below.
function counter() {
	let count = 0
	return {
		increment: () => {
			count++
			return count
		}
	}
}

module.exports = counter;
