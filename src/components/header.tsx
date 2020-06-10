import { Link } from "gatsby"
import React from "react"
import Image from "./image"

const Header = ({ siteTitle }: { siteTitle: string }) => (
  <header
    style={{
      margin: '0px auto',
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  ><div style={{ margin: '0px auto', maxWidth: '960px' }}>
      <div
        style={{
          display: 'inline-block',
          maxWidth: 960,
          padding: `1.45rem 1.0875rem`,
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div style={{ display: 'inline-block', width: '50px', position: 'relative', top: '10px' }}>
        <Image />
      </div>
    </div>
  </header>
)

export default Header
