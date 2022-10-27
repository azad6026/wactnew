// import { error } from '@sveltejs/kit'

// export const load = async () => {
// 	try {
// 		const ReadMeFile = await import('../../README.md')
// 		const ReadMe = ReadMeFile.default
		
// 		return {
// 			ReadMe
// 		}
// 	}
// 	catch(err) {
// 		throw error(500, err)
// 	}
// }
export const load = async ({ url, fetch }) => {
	const postRes = await fetch(`${url.origin}/api/posts.json`)
	const posts = await postRes.json()

	const totalRes = await fetch(`${url.origin}/api/posts/count`)
	const total = await totalRes.json()

	return { posts, total }
}