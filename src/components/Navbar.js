import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `);
  console.log("the data=====", data);
  return (
    <nav>
      <h1>web warrior</h1>
      <div className="links">
        <Link to="/about">about</Link>
        <Link to="/">home page</Link>
        <Link to="/project">project</Link>
      </div>
    </nav>
  );
};

export default Navbar;
