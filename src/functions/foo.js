exports.handler = async function (event) {
	console.log(event.multiValueHeaders)
	return {
		statusCode: 200,
		body: JSON.stringify(event.multiValueHeaders),
	}
}