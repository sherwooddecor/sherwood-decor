// import React from 'react';
// // import ImageGallery from 'react-image-gallery';
// import Img from 'gatsby-image';

// import GalleryItem from './GalleryItem';

// const Gallery = ({ images, data }) => {
//   if (!images) {
//     return;
//   }
//   return <Img fluid={data.imageOne.childImageSharp.fluid} />;
//   // return images.map(imageGroup => {
//   //   // const imageGroup = imageArray.map((image, i) => (
//   //   //   <article key={i}>
//   //   //     <img className="article-img" src={image} alt=" " />
//   //   //     <h1 className="article-title">title of article</h1>
//   //   //   </article>
//   //   // ));
//   //   // console.log(imageGroup);
//   //   return (
//   //     <article className="article-img">
//   //       <ImageGallery
//   //         items={imageGroup}
//   //         showPlayButton={false}
//   //         showFullscreenButton={false}
//   //       />
//   //     </article>
//   //     // <GalleryItem image={image} />
//   //   );
//   // });
//   <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image1.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image2.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image3.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image4.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image5.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image6.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image7.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image8.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image9.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image10.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image11.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image12.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image13.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image14.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image15.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image16.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image17.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image18.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image19.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image20.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image21.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image22.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image23.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image24.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image25.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image26.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image27.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image28.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image29.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image30.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image31.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image32.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image33.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image34.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image35.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>tool</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image36.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>flowers</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image37.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//           <div className="card">
//             <Img
//               className="picture"
//               fluid={props.data.image38.childImageSharp.fluid}
//             />
//             <div className="card-text">
//               <h3>Chair</h3>
//             </div>
//           </div>
//          <div className="card">
//          <Img
//            className="picture"
//            fluid={props.data[image].childImageSharp.fluid}
//            key={index + 1}
//          />
//          <div className="card-text" key={index + 1}>
//            <h3>Chair</h3>
//          </div>
//        </div>
// };

// export default Gallery;

// export const pageQuery = graphql`
//   query {
//     imageOne: file(relativePath: { eq: "1.jpg" }) {
//       childImageSharp {
//         fluid(maxWidth: 400) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `;
