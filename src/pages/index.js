import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/display"

const IndexPage = () => {

  const eatJam = () => {
    alert("Eat")

  }
  const stackJam = () => {
    alert("Stack")
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Chill out, it's ok!</h1>
      <Display jam={2} eatJam={() => eatJam()} stackJam={() => stackJam()}></Display>
      <Link to="/redux-page/">Page with Redux</Link> <br />
    </Layout>
  )
}

export default IndexPage
