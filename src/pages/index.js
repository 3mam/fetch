import React, { useEffect } from "react"

export default function Home() {
	useEffect(() => {
		fetch('.netlify/functions/foo', {
			method: 'GET',
			headers: {
				'X-foo': 'fooX',
				'foo': 'fooX',
			}
		}).then(data => console.log(data))
	})
	return <div>Hello world!</div>
}
