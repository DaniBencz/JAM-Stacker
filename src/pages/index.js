import React from "react"
import { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Display from "../components/display"

const IndexPage = () => {
  let [jam, setJam] = useState(0)

  const eatJam = () => {
    setJam(prev => prev - 1)
    console.log(jam)
  }
  const stackJam = () => {
    setJam(prev => prev + 1)
    console.log(jam)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <h1>Chill out, it's ok!</h1>
      <Display jam={jam} eatJam={() => eatJam()} stackJam={() => stackJam()}></Display>
      <Link to="/redux-page/">Page with Redux</Link> <br />
    </Layout>
  )
}

export default IndexPage
