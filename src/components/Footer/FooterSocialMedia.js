import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

// A list of Social Media
const FooterSocialMedia = () => (
  <StaticQuery
    query={socialMediaQuery}
    // Render all the images.
    render={data => {
      return (
        <ul
          style={{
            display: `flex`,
            flexDirection: `row`,
            flexWrap: `wrap`,
            justifyContent: `center`,
            textAlign: `center`,
            listStyle: `none`,
            margin: `0`,
            marginBottom: `2em`
          }}
        >
          {data.images.edges.map(image => {
            switch (image.node.name) {
              case "note":
                return (
                  <li key={image.node.name} style={{ margin: `0` }}>
                    <a
                      href="https://note.mu/bizjapan"
                      aria-label="Check our Note.mu page."
                    >
                      <Img
                        fixed={image.node.childImageSharp.fixed}
                        imgStyle={{
                          objectFit: "contain",
                          objectPosition: "50% 50%"
                        }}
                        style={{
                          width: `2.5em`,
                          maxWidth: ` 220px`,
                          margin: `0 4vw`
                        }}
                      />
                    </a>
                  </li>
                );
              case "facebook":
                return (
                  <li key={image.node.name} style={{ margin: `0` }}>
                    <a
                      href="https://www.facebook.com/Bizjapan.org/"
                      aria-label="Check our facebook page."
                    >
                      <Img
                        fixed={image.node.childImageSharp.fixed}
                        imgStyle={{
                          objectFit: "contain",
                          objectPosition: "50% 50%"
                        }}
                        style={{
                          width: `2.5em`,
                          maxWidth: ` 220px`,
                          margin: `0 4vw`
                        }}
                      />
                    </a>
                  </li>
                );
              case "twitter":
                return (
                  <li key={image.node.name} style={{ margin: `0` }}>
                    <a
                      href="https://twitter.com/BizjapanOrg"
                      aria-label="Check our twitter page."
                    >
                      <Img
                        fixed={image.node.childImageSharp.fixed}
                        imgStyle={{
                          objectFit: "contain",
                          objectPosition: "50% 50%"
                        }}
                        style={{
                          width: `2.5em`,
                          maxWidth: ` 220px`,
                          margin: `0 4vw`
                        }}
                      />
                    </a>
                  </li>
                );
              default:
                return console.log("error");
            }
          })}
        </ul>
      );
    }}
  />
);

// Import all the logos of social media.
const socialMediaQuery = graphql`
  query {
    images: allFile(filter: { relativeDirectory: { eq: "socialmedia" } }) {
      edges {
        node {
          relativePath
          name
          childImageSharp {
            fixed(height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`;

export default FooterSocialMedia;
