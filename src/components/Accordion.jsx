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
                {idOpen === index ? <path d="M0 9h24v6h-24z"/> : <path d="M24 9h-9v-9h-6v9h-9v6h9v9h6v-9h9z"/>}
              </svg>
            </div>
            <Detail service={service} index={index} idOpen={idOpen} />
          </li>  
        )}
      </ul>
  );
};
