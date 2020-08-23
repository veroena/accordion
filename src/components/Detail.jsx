import React from 'react';

export const Detail = (props) => {
  const { service, index, idOpen } = props;
  return (
      <div className={`details ${idOpen === index ? "visible" : "hidden"}`}>
        <div className="detail__list--free">
          <h3>Free</h3>
          <ul className="detail__list">
            {service.map((detail, index) =>
              <li className="detail__list--item" key={index}>
                {detail.Free ? 
                  <label htmlFor="detail-free">
                    <input type="checkbox" id="detail-free" name="detail-free" />
                    {detail.Name}
                  </label>
                :
                  null
                }
              </li>
            )}
          </ul>
        </div>
        <div className="detail__list--extra">
          <h3>Extra</h3>
          <ul className="detail__list">
            {service.map((detail, index) =>
              <li className="detail__list--item" key={index}>
                {!detail.Free ?
                  <label htmlFor="detail-extra">
                    <input type="checkbox" id="detail-extra" name="detail-extra" />
                    {!detail.Free ? detail.Name : null}
                  </label>
                :
                  null
                }
              </li>
            )}
          </ul>
        </div>
      </div>
  );
};