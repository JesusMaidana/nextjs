import Link from "next/link";


async function loadPosts () {
    const res = await fetch ("https://jsonplaceholder.typicode.com/posts")
    const data = await res.json()
    // await new Promise ((resolve => setTimeout (resolve,1000)))
    return data;

}


async function PostPage () {
    const posts = await loadPosts ();
    return (
        <div className="grid grid-cols-3 gap-6 my-6 bg-gray-800">
            {
               posts.map(post=> (
                <div key={post.id}>
                    <Link href={`posts/${post.id}`}>
                        <h3 className="font-bold text-lg p-4 py-4  "> {post.id} {post.title}</h3>
                    </Link>
                    <p className="text-slate-300">{post.body}</p>
                </div>
               )) 
            }
        </div>
    );
}

export default PostPage;