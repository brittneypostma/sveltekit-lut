<script context="module">
	export async function load() {
		const md = import.meta.globEager('../../posts/*.md')
		let posts = Object.entries(md).map((posts) => {
			const slug = posts[0].substring(posts[0].lastIndexOf('/') + 1).replace('.md', '')
			const title = posts[1].metadata.title
			return {
				slug,
				posts,
				title
			}
		})
		return {
			props: {
				posts
			}
		}
	}
</script>

<!-- <script context="module">
  export async function load() {
      const posts = import.meta.globEager('../../posts/*.md')
      const postsList = Object.values(posts)
      const postsMeta = postsList.map(post => {
        return post.metadata
      })
      console.log(postsMeta)
      return {
        props: {
          posts: postsMeta
        }
      }
    }
</script> -->
<script>
	export let posts
</script>

<h1>Posts</h1>
{#each posts as post}
	<li><a href={`/posts/${post.slug}`}>{post.title}</a></li>
{/each}
