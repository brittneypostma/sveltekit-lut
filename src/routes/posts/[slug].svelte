<script context="module">
	// available through params
	
  // page: {
  //   host: string,
  //   path: string,
  //   params: Record[string, string | string[]]
  //   query: URLSearchParams
  // }
  // fetch: Function(info, init +> Promise)
  // session: any
  // context: Record[string, any]
  
	//  Returned from load
	
  // status: number, 
  // error: Error,
  // redirect: string,
  // props: Record[string, any],
  // context: Record[string, any],
  // maxage: number
 
	export async function load({page}) {
    const Post = (await import(`../../posts/${page.params.slug}.md`)).default
    // const Md = (await import(`../../posts/${page.params.slug}.md`)).default
		// const post = {
		// 	title: page.params.slug,
		// 	date: new Date(),
		// 	body:
		// 		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, similique soluta est quibusdam commodi quisquam iure earum esse, beatae neque, pariatur numquam non itaque iusto sequi totam? Soluta, itaque saepe?'
		// }
		return {
			props: {
        Post
        // metadata: Md.metadata
			}
		}
	}
</script>

<script>
  // import Hello from '@posts/hello.md'
  export let Post
</script>

<article>
  <Post />
</article>
