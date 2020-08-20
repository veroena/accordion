import React from 'react';
import './App.scss';

const ENDPOINT = 'https://debug-api.fastpayhotels.net/DataService/EntityService.svc/ServiceType?$filter=(IdServiceCategory%20eq%202)%20or%20(IdServiceCategory%20eq%203)%20or%20(IdServiceCategory%20eq%204)&$format=json&$expand=ServiceCategory&$select=Id,Free,Caption,Name,ServiceCategory/Id,ServiceCategory/Name,ServiceCategory/Caption';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idOpen: 0,
      services: [],
    }
    this.fetchData = this.fetchData.bind(this);
    this.handleAccordion = this.handleAccordion.bind(this);
  }
  
  handleAccordion(event) {
    const elementValue = +event.currentTarget.id;
    if (elementValue === this.state.idOpen) {
      this.setState({idOpen : ""});
    } else {
      this.setState({idOpen : elementValue});
    }
  }
            
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    fetch(ENDPOINT)
      .then(response => response.json())
      .then(data => {

        // getting the categories name
        const categories = data.value.map(item => item.ServiceCategory.Name );
        const newSet = new Set(categories);
        const filteredCategories = [...newSet];

        // filter data and classify them into categories for storing them in state
        filteredCategories.forEach(item => {
          const services = data.value.filter(element => element.ServiceCategory.Name === item);
          this.setState({services: [...this.state.services, services]})
        })
      })
  }

  render() {
    return (
      <div className="App">
        <ul className="accordion">
          {this.state.services.map((service, index) =>
            <li className="accordion__list--item" id={index} key={index} onClick={this.handleAccordion}>
              <h2 className="accordion__list--title">
                {service.map(item => item.ServiceCategory.Name)[0]}
              </h2>
              <div className={`details ${this.state.idOpen === index ? "visible" : "hidden"}`}>
                <div className="detail__list--free">
                  <h3>Free</h3>
                  <ul className="detail__list">
                    {service.map((detail, index) =>
                      <li className="detail__list--item" key={index}>
                        <h4>{detail.Free ? detail.Name : null}</h4>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="detail__list--extra">
                  <h3>Extra</h3>
                  <ul className="detail__list">
                    {service.map((detail, index) =>
                      <li className="detail__list--item" key={index}>
                        <h4>{!detail.Free ? detail.Name : null}</h4>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </li>  
          )}
        </ul>
      </div>
    );
  }
}

export default App;
