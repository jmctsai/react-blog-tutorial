import useFetch from '../hooks/useFetch'
import BlogList from './BlogList'

export default function Home() {
	const {
		data: blogs,
		isLoading,
		error,
	} = useFetch('http://localhost:8000/blogs')

	return (
		<div className='home'>
			{error && <div>{error}</div>}
			{isLoading && <div>Loading...</div>}
			{/* conditional template: output if 'blogs' loaded, then load */}
			{blogs && <BlogList blogs={blogs} title='All Blogs!' />}
		</div>
	)
}
