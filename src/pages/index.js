import React, { useEffect } from "react"

export default function Home() {
	useEffect(() => {
		fetch('.netlify/fn/foo', {
			method: 'GET',
			headers: {
				'X-foo': 'fooX',
			}
		}).then(data => console.log(data))
	})
	return <div>Hello world!</div>
}
