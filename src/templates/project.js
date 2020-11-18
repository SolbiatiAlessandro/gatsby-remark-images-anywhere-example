import React from "react"
import { graphql } from "gatsby"

import rehypeReact from "rehype-react"
import CustomImage from "../components/CustomImage"

import "../styles/main.css"

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { "custom-image": CustomImage },
}).Compiler

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        featured_image
      }
      htmlAst
    }
  }
`

const Project = props => {
  return (
    <div className="container">
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      {renderAst(props.data.markdownRemark.htmlAst)}
    </div>
  )
}

export default Project
