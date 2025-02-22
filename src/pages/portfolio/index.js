// import React from "react";
// import "./style.css";
// import { Helmet, HelmetProvider } from "react-helmet-async";
// import { Container, Row, Col } from "react-bootstrap";
// import { dataportfolio, meta } from "../../content_option";

// export const Portfolio = () => {
//   return (
//     <HelmetProvider>
//       <Container className="About-header">
//         <Helmet>
//           <meta charSet="utf-8" />
//           <title> Portfolio | {meta.title} </title>{" "}
//           <meta name="description" content={meta.description} />
//         </Helmet>
//         <Row className="mb-5 mt-3 pt-md-3">
//           <Col lg="8">
//             <h1 className="display-4 mb-4"> Mes projets </h1>{" "}
//             <hr className="t_border my-4 ml-0 text-left" />
//           </Col>
//         </Row>
//         <div className="mb-5 po_items_ho">
//           {dataportfolio.map((data, i) => {
//             return (
//               <div key={i} className="po_item">
//                 <img src={data.img} alt="" />
//                 <div className="content">
//                   <p>{data.description}</p>
//                   <a href={data.link}>voir le projet</a>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </Container>
//     </HelmetProvider>
//   );
// };
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="portfolio-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Mes projets</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="projects-container">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="project-card">
                <img src={data.img} alt={data.title} className="project-image" />
                <div className="project-content">
                  <p className="project-title">{data.title}</p> 
                  <p className="project-description">{data.description}</p>
                  <a href={data.link} className="project-link">Voir le projet</a>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </HelmetProvider>
  );
};
