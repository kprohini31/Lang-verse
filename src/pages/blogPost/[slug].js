import React from "react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import * as fs from "fs/promises"
import style from "../../styles/blogPost.module.css";

function blogPost(props) {
  const router = useRouter();
  const [blog, setblog] = useState();
  //  const [blog, setblog] = useState(props.myblog)

  const fetchblog = async () => {
    const { slug } = router.query;

    const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`);
    const myBlog = await data.json();
    setblog(myBlog);
  };

  useEffect(() => {
    fetchblog();
  }, [router.isReady]);

  return (
    blog && (
      <div className={style.con}>
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={style.title}>{blog.title}</div>
              <hr></hr>
              <h5>Description: </h5>
              <span className={style.description}>{blog.description}</span>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

// export async function getStaticPaths() {
//     return {
//         paths: [
//             // See path selection below
//             { params: {slug: "learn-js"} },
//             { params: {slug: "learn-react"} }
//         ],

//         // // See the fallback section below
//         fallback: false
//     };
// }

// export async function getStaticProps(context) {

//     const {slug} = context.params

//      const content = await fs.readFile(`blogData/${slug}.json`,"utf-8")

//     return {

//     // data added inside props will be
//     // received by page component as `props`
//     props: {myblog: JSON.parse(content)},
//   };
// }

export default blogPost;

// export async function getServerSideProps(context) {

//     const {slug} = context.query
//     const data = await fetch(`http://localhost:3000/api/getBlog?slug=${slug}`)
//     const myblog = await data.json()
//     console.log(context)

//     return {
//         props: {myblog},
//     }
// }

// export default blogPost
