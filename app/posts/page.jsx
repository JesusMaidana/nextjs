import Link from "next/link";


async function loadPosts () {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    await new Promise ((resolve => setTimeout (resolve,1000)))
    return data;

}


async function PostPage () {
    const posts = await loadPosts ();
    return (
        <div>
            {
               posts.map(post=> (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`}>
                        <h3> {post.id} {post.title}</h3>
                    </Link>
                    <p>{post.body}</p>
                </div>
               )) 
            }
        </div>
    );
}

export default PostPage;