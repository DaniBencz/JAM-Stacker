//https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux

import React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/display"

const IndexPage = () => {
  let [jam, setJam] = useState<number>(0)

  const eatJam = () => {
    setJam(prev => prev - 1)
  }
  const stackJam = () => {
    setJam(prev => prev + 1)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>React State</h1>
      <Display jam={jam} eatJam={eatJam} stackJam={() => stackJam()}></Display>
      <Link to="/redux-page/">Page with Redux</Link> <br />
    </Layout>
  )
}

export default IndexPage
