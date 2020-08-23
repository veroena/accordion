import React from 'react';
import { Detail } from './Detail';

export const Accordion = (props) => {
  const { services, idOpen, handleAccordion } = props;
  return (
    <ul className="accordion">
        {services.map((service, index) =>
          <li className="accordion__list--item" key={index}>
            <h2 className="accordion__list--title" id={index} onClick={handleAccordion}>
              {service.map(item => item.ServiceCategory.Name)[0]}
            </h2>
            <Detail service={service} index={index} idOpen={idOpen} />
          </li>  
        )}
      </ul>
  );
};
