import React from "react"
import { DiscussionEmbed } from "disqus-react"

import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import PostTitle from "gatsby-theme-blog/src/components/post-title"
import PostDate from "gatsby-theme-blog/src/components/post-date"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import PostHero from "gatsby-theme-blog/src/components/post-hero"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => {
  const disqusConfig = {
    shortname: process.env.GATSBY_DISQUS_NAME,
    config: { identifier: title },
  }

  return (
    <Layout location={location} title={title}>
      <SEO
        title={post.title}
        description={post.excerpt}
        imageSource={
          post.socialImage
            ? post.socialImage?.childImageSharp?.fluid.src
            : post.image?.childImageSharp?.fluid.src
        }
        keywords={post.keywords}
        imageAlt={post.imageAlt}
      />
      <main>
        <PostHero post={post} />
        <PostTitle>{post.title}</PostTitle>
        <PostDate>{post.date}</PostDate>
        <MDXRenderer>{post.body}</MDXRenderer>
        <DiscussionEmbed {...disqusConfig} />
      </main>
      <PostFooter {...{ previous, next }} />
    </Layout>
  )
}

export default Post
