<script>
	export let posts = []
</script>


<div class="posts-list">
	{#each posts as post}
			<article>
				<a href="/blog/{post.slug}">
					<h2 class="post-title">
						{post.title}
					</h2>
					<img
					class="post-image"
					src={post.coverImage}
					alt={post.title}
					style="ratio: {post.coverWidth} / {post.coverHeight}"
					/>
				</a>
			</article>
			<p>{post.excerpt}</p>
	{/each}
</div>