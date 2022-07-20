
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { getClient } from '../lib/sanity.server';
import groq from 'groq';
import Card from '../components/Card';


const Home = ({ posts }) => {
  // console.log(posts);

  return (
    <div>
      <Head>
        <title>The Uncanny Epicurean Food & Travel Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="posts-container">
        {posts?.map(post => ()

        )}

      </div>
    </div>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = await getClient(preview).fetch(groq`
    *[_type == "post" && publishedAt < now()] | order(publishedAt desc){
      _id,
      title,
      "username": author->username,
      "categories": category[]->{id, title},
      "authorImage": author->image,
      body,
      mainImage,
      slug,
      publishedAt
    }`)
  return {
    props: {
      posts,
    },
  }
}
export default Home;
