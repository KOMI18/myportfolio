import React, { useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { event, meta } from "../../content_option";
import { motion } from "framer-motion";

export const Activities = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const closeModal = () => {
    setSelectedEvent(null); 
  };
  
  return (
    <HelmetProvider>
      <Container className="portfolio-section">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Activite | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Mes Evenements</h1>
            <p className="mb-1x">
              Découvrez ici les événements et les activités auxquels je participe
            </p>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="projects-container">
          {event.map((data, i) => (
            <div key={i} className="project-card">
              <img src={data.img} alt={data.title} className="project-image" />
              <div className="project-content">
                <p className="project-title">{data.title}</p>
                <p className="project-description">{data.description}</p>
                <button
                  className="navbar-brand nav_ac"

                  onClick={() => setSelectedEvent(data)}
                >
                  Voir
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        {selectedEvent && (
          <div className="modal-overlay" onClick={() => setSelectedEvent(null)}>
               <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                
                transition={{ type: "tween", stiffness: 100 }}
                className="modal-content overflow-y-auto max-h-screen"
                onClick={(e) => e.stopPropagation()} 
                >
                <button 
                    onClick={closeModal} 
                    className="close-button"
                >
                    ✖
                </button>
              <img src={selectedEvent.img} alt={selectedEvent.title} className="project-image2" />
              <h2 className=" font-bold tx text-xl">{selectedEvent.title}</h2>
                <p className=" text-md tx">{selectedEvent.description}</p>
                <p className=" text-md tx">{selectedEvent.detail}</p>
                <div className="grid grid-cols-3 gap-2 mt-4">
                <a href={selectedEvent.link} className=" navbar-brand nav_ac">En savoir plus</a>

                {selectedEvent.images?.map((image, i) => (
                    <div key={i} className="w-[120px] h-[120px] rounded-lg overflow-hidden shadow-md">
                    <img src={image} alt={`Gallery ${i}`} className="project-image2" />
                    </div>
                ))}
                </div>


                
            </motion.div>
          </div>
        )}
      </Container>
    </HelmetProvider>
  );
};
