import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

import Layout from "../containers/Layouts";

const HomePage = ({ serverData }) => {
  // const gatsbyRepoData = useStaticQuery(graphql`
  // query {
  //   graphQlSource {
  //     json-placeholder{

  //         userId

  //     }
  //   }
  // }
  // `);
  // console.log("the gatsbyrepodata======", gatsbyRepoData);
  return (
    <div>
      <Layout>
        <h2>this is the home page</h2>
      </Layout>
      <img alt="Happy dog" src={serverData.message} />
      <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />
    </div>
  );
};

export default HomePage;

export async function getServerData() {
  try {
    const res = await fetch(`https://dog.ceo/api/breeds/image/random`);

    if (!res.ok) {
      throw new Error(`Response failed`);
    }

    return {
      props: await res.json(),
    };
  } catch (error) {
    return {
      status: 500,
      headers: {},
      props: {},
    };
  }
}
