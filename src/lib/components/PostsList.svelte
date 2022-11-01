<script>
	export let posts = [];
</script>

<div class="posts-list">
	{#each posts as post}
		<article class="post-card">
			<h2 class="post-title">
				<a href="/blog/{post.slug}">
					{post.title}
				</a>
			</h2>
			<p class="post-excerpt">{post.excerpt}</p>
			<img
				class="post-image"
				src={post.coverImage}
				alt={post.title}
				style="ratio: {post.coverWidth} / {post.coverHeight}"
			/>
		</article>
	{/each}
</div>
