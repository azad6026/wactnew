<!-- This file renders each individual blog post for reading. Be sure to update the svelte:head below -->
<script>
export let data

const { title, excerpt, date, updated, coverImage, coverWidth, coverHeight } = data.meta
</script>


<svelte:head>
	<!-- Be sure to add your image files and un-comment the lines below -->
	<title>{title}</title>
	<meta data-key="description" name="description" content="{excerpt}">
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<meta property="og:description" content={excerpt} />
	<meta name="twitter:description" content={excerpt} />
	<!-- <meta property="og:image" content="https://yourdomain.com/image_path" /> -->
	<meta property="og:image:width" content={coverWidth} />
	<meta property="og:image:height" content={coverHeight} />
	<!-- <meta name="twitter:image" content="https://yourdomain.com/image_path" /> -->
</svelte:head>


<article class="post">
	<h1>{ title }</h1>
	<img
		class="cover-image"
		src="{coverImage}"
		alt="{ title }"
		style="aspect-ratio: 16 / 9;"
		width={coverWidth}
		height={coverHeight}
	/>
	<cite>Published:</cite> {new Date(date).toDateString()}
	{@html data.PostContent}

</article> 