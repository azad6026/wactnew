<script>
	export let posts = []
</script>


<div class="posts-list">
	{#each posts as post}
			<article>
				<a href="/blog/{post.slug}">
					<h2>
						{post.title}
					</h2>
				</a>
			</article>
			<p>{post.excerpt}</p>
	{/each}
</div>