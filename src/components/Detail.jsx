import React from 'react';

export const Detail = (props) => {
  const { service, index, idOpen } = props;
  return (
      <div className={`details ${idOpen === index ? "visible" : "hidden"}`}>
        <div className="detail__list--container free">
          <h3>Free</h3>
          <ul className="detail__list">
            {service.filter(item => item = item.Free)
              .map((detail, index) => 
                <li className="detail__list--item" key={index}>
                  <label htmlFor="detail-free">
                    <input type="checkbox" id="detail-free" name="detail-free" />
                    {detail.Name}
                  </label>
                </li>
              )
            }
          </ul>
        </div>
        <div className="detail__list--container extra">
          <h3>Extra</h3>
          <ul className="detail__list">
            {service.filter(item => item = !item.Free)
              .map((detail, index) => 
                <li className="detail__list--item" key={index}>
                  <label htmlFor="detail-free">
                    <input type="checkbox" id="detail-free" name="detail-free" />
                    {detail.Name}
                  </label>
                </li>
              )
              }
          </ul>
        </div>
      </div>
  );
};