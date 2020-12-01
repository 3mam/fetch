import React from "react"

export default function Home() {
	fetch('.netlify/fn/foo', {
		method: 'GET',
		headers: {
			'X-foo': 'fooX',
		}
	}).then(data => console.log(data))
	return <div>Hello world!</div>
}
