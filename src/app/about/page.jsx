"use client"
import { useRouter } from "next/navigation";

export default function AboutPage () {
    const router = useRouter()
    return (
        <section>
            <h1>About</h1>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus unde error illum ut provident tenetur, distinctio neque et assumenda similique eaque consequuntur reprehenderit illo sed pariatur officia deserunt expedita tempore numquam mollitia animi eius laboriosam ipsa. Exercitationem unde, laborum asperiores officia consectetur, aperiam eius praesentium minima doloribus illo deserunt voluptas aliquam a perspiciatis sequi dignissimos ad ab voluptate repellendus ex velit officiis iste blanditiis? Id totam ea quaerat dolore facilis nihil veritatis eum maxime accusantium, dolorem maiores at asperiores, cumque tenetur architecto ab! Reiciendis asperiores vitae laboriosam quia corporis ducimus soluta blanditiis? Est dolor hic reprehenderit, dolorem consequuntur quos minus.
            </p>
            <button className="bg-sky-600 px-3 py-4 rounded-md" onClick={()=>{
                
                router.push("/")
            }}>
                click
            </button>
        </section>
    );
}