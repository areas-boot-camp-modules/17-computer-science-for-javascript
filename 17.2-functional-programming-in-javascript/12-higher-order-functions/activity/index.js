const grades = [56, 78, 99, 85]

// TODO: Complete the 'findAverage' function below.
function findAverage(accumulator, currentValue, index, array) {
	const sum = accumulator + currentValue
	if (index === array.length - 1) {
		const average = sum / array.length
		return average
	}
	return sum
}

// TODO: Pass the 'findAverage' into the reduce method.
let gradeAverage = grades.reduce(findAverage)

console.log(gradeAverage)
