import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import { ENDPOINT } from './../data';
import { Accordion } from './Accordion';
import { Loading } from './Loading';

const App = (props) => {
  const { storeData, toggleAccordion, idOpen, services } = props;

  useEffect(() => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {
      // getting the categories' names
      const categories = data.value.map(item => item.ServiceCategory.Name );
      const newSet = new Set(categories);
      const filteredCategories = [...newSet];

      // filter data and classify them into categories for storing them in state
      filteredCategories.forEach(item => {
        const services = data.value.filter(element => element.ServiceCategory.Name === item);
        storeData(services);
      })
    })
  }, [storeData]);
  
  const handleAccordion = (event) => {
    const elementValue = +event.currentTarget.id;
    if (elementValue === idOpen) {
      toggleAccordion("");
    } else {
      toggleAccordion(elementValue);
    }
  }

  return (
    <div className="App">
      <h1 className="app-title">Accordion</h1>
      {services.length === 0 ? 
        <Loading />
      :
      <Accordion services={services} idOpen={idOpen} handleAccordion={handleAccordion} />
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    idOpen: state.idOpen,
    services: state.services
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAccordion: (idOpen) => {
      dispatch({
        type: "TOGGLE_ACCORDION",
        payload: idOpen
      })
    },
    storeData: (data) => {
      dispatch({
        type: "STORE_DATA",
        payload: data
      })
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
