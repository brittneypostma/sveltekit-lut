// goes to /post.json, returns json

export async function get({ params }) {
	console.log(params);
	return {
		status: 200,
		body: {
			data: 'test'
		}
	};
}
