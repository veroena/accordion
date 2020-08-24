import React from 'react';
import { Detail } from './Detail';

export const Accordion = (props) => {
  const { services, idOpen, handleAccordion } = props;
  return (
    <ul className="accordion">
        {services.map((service, index) =>
          <li className="accordion__list--item" key={index}>
            <div className="accordion__list--title"  id={index} onClick={handleAccordion}>
              <h2>
                {service.map(item => item.ServiceCategory.Name)[0]}
              </h2>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={`accordion__list--chevron ${idOpen === index ? "open" : "close"}`}>
              <path d="M0 16.67l2.829 2.83 9.175-9.339 9.167 9.339 2.829-2.83-11.996-12.17z"/>
              </svg>
            </div>
            <Detail service={service} index={index} idOpen={idOpen} />
          </li>  
        )}
      </ul>
  );
};
