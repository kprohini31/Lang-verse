import React from 'react'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import style from '../styles/blog.module.css'
// import * as fs from "fs/promises"
import InfiniteScroll from "react-infinite-scroll-component";
import Head from "next/head";


function Blog() {
   
  // const [blogs, setblogs] = useState(props.allBlogs)
  const [blogs, setblogs] = useState([])
  const [data, setdata] = useState()
  const [pageSize, setpageSize] = useState(6)
  const [blogsShown, setblogsShown] = useState(0)
  const [totalResults, settotalResults] = useState(0)

    const fetchblogs = async () =>  {

    const response = await fetch(`/api/blogs?pageSize=${pageSize}`)
    const data = await response.json()
    setblogs(data.blogs)
    setblogsShown(data.blogs.length)
    settotalResults(data.totalResults)

  }

    const fetchMoreData = async () =>  {
    
    let count;
  

    count = pageSize + 1
    const response = await fetch(`/api/blogs?pageSize=${count}`)
    const data = await response.json()
    // console.log("blogs ",blogs,"data.blogs ",data.blogs)
    setblogs(data.blogs)
    setblogsShown(data.blogs.length)
    setpageSize(count) 

  }
  
  useEffect(() => {

    fetchblogs();


  }, [])
  

  return (
    <>
    <Head>
        <title>Lang Verse | blog</title>
        <link rel="icon" href="/blogger.png" />
    </Head>
    <style jsx>
      {
        `
        h2{
          font-size: 1.3rem;
          font-family: monospace;
          color: white;
          font-weight: bold;

        }
        .container{
          margin-top: 50px; 
          color: rgb(171, 177, 185);
        }  
        `
      }
    </style>  
    
     <InfiniteScroll
          dataLength={blogsShown}
          next={fetchMoreData}
          hasMore={blogsShown !== totalResults}
          loader={<h4>Loading...</h4>}
        >
          <div className="container"> 
          <div className="row gx-4 gy-4"> 
          {blogs.map((blogItem) => {
          return  <div className='col-md-6'>
          <div className={style.col_con}>  
          <h2 className={style.blog_title}>{blogItem.title}</h2>
          <hr></hr>
          <span className={style.blog_text}>{blogItem.description.substring(0,160)}...</span>
          <Link className={style.btn_con} href={`blogPost/${blogItem.slug}`}><button className={style.read_more}>Read More</button></Link>
          </div>
          </div>
          })}
          </div>
          </div>

    </InfiniteScroll>
    </>
  )
}

// export async function getStaticProps() {

//     let allBlogs= [];
 
//     const myFiles = await fs.readdir("blogData")
//     for(let i = 0; i < myFiles.length; i++){
          
//           const d = await fs.readFile(`blogData/${myFiles[i]}`,"utf-8")
//           allBlogs.push(JSON.parse(d)) 
//     }
//     return {
//      props: {allBlogs},
//     };

// }


// export async function getServerSideProps(context) {

//      const data = await fetch("http://localhost:3000/api/blogs")
//      const allBlogs = await data.json()
//      console.log("----------------")
  
//     return {
//         props: {allBlogs},
//     }

// }


export default Blog
