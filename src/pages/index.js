import React from 'react';
// import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Layout from '../components/layout';
// import GalleryItem from '../components/GalleryItem';
import Footer from '../components/Footer';
// import pic1 from '../images/banner-background.jpg';

const imageNames = [''];
const IndexPage = (props) => (
  <Layout>
    <main className="main-grid">
      <header className="header">
        <div>
          <p className="leading-bigtext">Welcome to Sherwood Wedding Decor</p>
          <p className="leading-text">
            Make your special day even more special for your guests.
            <br />
            Our decor will add that memorable touch to your event.
          </p>
          <a href="#" className="button">
            View Our Rentals
          </a>
        </div>
      </header>
      <div className="container">
        <h2>Our Rentals</h2>
        <div className="cards-grid">
          {/* {Object.keys(props.data).map((image, index) => (
            <GalleryItem
              image={props.data[image].childImageSharp.fluid}
              key={index + 1}
            />
          ))} */}
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image1.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Guest Seating Chart Trellis</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image2.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Flower Arrangements</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image3.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Beautiful Flower Arrangements</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image4.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Box Heart</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image5.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Custom Flower Arrangement</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image6.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Steamer Trunk</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image7.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Relaxation Chair</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image8.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Vintage Chair</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image10.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Red Leather Chair</h3>
            </div>
          </div>
        </div>

        <div className="cards-grid-landscape">
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image11.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Sherwood Group One</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image12.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Gracie Group One</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image13.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Nuptual Arch</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image14.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Guest Card Holders</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image23.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Guest Card Holders</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image15.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Sherwood Group Two</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image16.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Victorian Group One</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image17.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Louise Group One</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image18.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Occasional Chairs</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image19.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Honor Group One</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image20.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>After Party Group One</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image21.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Floral Sofa</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image22.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Hanging Floral Ladders</h3>
            </div>
          </div>
          <div className="card">
            <Img
              className="picture"
              fluid={props.data.image24.childImageSharp.fluid}
            />
            <div className="card-text">
              <h3>Head Table Canopy & Chandelier</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    image1: file(relativePath: { eq: "1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image2: file(relativePath: { eq: "2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image3: file(relativePath: { eq: "3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image4: file(relativePath: { eq: "4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image6: file(relativePath: { eq: "6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image7: file(relativePath: { eq: "7.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image8: file(relativePath: { eq: "8.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image9: file(relativePath: { eq: "9.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image10: file(relativePath: { eq: "10.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image11: file(relativePath: { eq: "11.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image12: file(relativePath: { eq: "12.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image13: file(relativePath: { eq: "13.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image14: file(relativePath: { eq: "14.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image15: file(relativePath: { eq: "15.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image16: file(relativePath: { eq: "16.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image17: file(relativePath: { eq: "17.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image18: file(relativePath: { eq: "18.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image19: file(relativePath: { eq: "19.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image20: file(relativePath: { eq: "20.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image21: file(relativePath: { eq: "21.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image22: file(relativePath: { eq: "22.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image23: file(relativePath: { eq: "23.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image24: file(relativePath: { eq: "24.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image25: file(relativePath: { eq: "25.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image26: file(relativePath: { eq: "26.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image27: file(relativePath: { eq: "27.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image28: file(relativePath: { eq: "28.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image29: file(relativePath: { eq: "29.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image30: file(relativePath: { eq: "30.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image31: file(relativePath: { eq: "31.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image32: file(relativePath: { eq: "32.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image33: file(relativePath: { eq: "33.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image34: file(relativePath: { eq: "34.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image35: file(relativePath: { eq: "35.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image36: file(relativePath: { eq: "36.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image37: file(relativePath: { eq: "37.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image38: file(relativePath: { eq: "38.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
