import { useState, useEffect } from 'react'

export default function useFetch(url) {
	const [data, setData] = useState(null)
	const [isLoading, setIsLoading] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		// Associate AbortController with fetch
		const abortCont = new AbortController()

		setTimeout(() => {
			fetch(url, { signal: abortCont.signal })
				.then((res) => {
					if (!res.ok) {
						//response NOT ok
						throw Error('ERROR: could not fetch data for that resource')
					}
					return res.json()
				})
				.then((data) => {
					setData(data)
					setIsLoading(false)
					setError(null)
				})
				.catch((err) => {
					if (err.name === 'AbortError') {
						console.log('fetch aborted')
					} else {
						// console.log(err.message)
						setError(err.message)
						setIsLoading(false)
					}
				})
		}, 1000)

		//Cleanup here, ex when fetching
		return () => abortCont.abort()
	}, [url]) //only run ONCE on initial render

	return { data, isLoading, error }
}
