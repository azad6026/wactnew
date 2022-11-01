<script>
	import { siteTitle } from '$lib/config';

	import PostsList from '$lib/components/PostsList.svelte'
	import Pagination from '$lib/components/Pagination.svelte'
	import { siteDescription } from '$lib/config'
	export let data;
</script>

<svelte:head>
	<title>{siteTitle}</title>
</svelte:head>
<!-- <svelte:component this={data.ReadMe} /> -->
<h1>Lets learn tips and tricks around web development fundamentals</h1>

<PostsList posts={data.posts} />

<Pagination currentPage={1} totalPosts={data.total} />
