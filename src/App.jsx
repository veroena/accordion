import React from 'react';
import './App.css';
import { reducer, store } from './store/index';

// const ENDPOINT = 'https://debug-api.fastpayhotels.net/DataService/EntityService.svc/ServiceType?$filter=(IdServiceCatego%20ry%20eq%202)%20or%20(IdServiceCategory%20eq%203)%20or%20(IdServiceCategory%20eq%204)&$format=json&$expand=ServiceCategory&$select=Id,Free,Caption,Name,ServiceCategory/Id,Servic%20eCategory/Name,ServiceCategory/Caption';

// const fetchData = () => {
//   fetch(ENDPOINT)
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
// }

const data = [
  {"ServiceCategory": {
    "Id": "1",
    "Caption": "Internet",
    "Name": "Internet"
    },
  "Id": "1",
  "Free": true,
  "Caption": "Internet",
  "Name": "Internet",
  "children": [
    {"name": "1"},
    {"name": "2"},
    {"name": "3"},
    {"name": "4"},
  ]
  },
  {"ServiceCategory": {
    "Id": "2",
    "Caption": "Kids Services",
    "Name": "Kids Services"
    },
  "Id": "2",
  "Free": true,
  "Caption": "Kids Services",
  "Name": "Kids Services",
  "children": [
    {"name": "a"},
    {"name": "b"},
    {"name": "c"},
    {"name": "d"},
  ]
  },
  {"ServiceCategory": {
    "Id": "3",
    "Caption": "Services",
    "Name": "Services"
    },
  "Id": "3",
  "Free": true,
  "Caption": "Services",
  "Name": "Services",
  "children": [
    {"name": "11"},
    {"name": "22"},
    {"name": "33"},
    {"name": "44"},
  ]
  },
]

class App extends React.Component {
  // fetchData();

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     idOpen: 1,
  //   }
  //   this.handleAccordion = this.handleAccordion.bind(this);
  // }

  handleAccordion(event) {
    const elementValue = +event.currentTarget.id;
    if (elementValue === store.getState()) {
      store.dispatch({
        type: "CLOSE_ACCORDION"
      })
    } else {
      store.dispatch({
        type: "TOGGLE_ACCORDION",
        payload: elementValue
      });
    }
    console.log(store.getState());
    // if (elementValue === this.state.idOpen) {
    // this.setState({idOpen : 0});
    // } else {
    //   this.setState({idOpen : elementValue});
    // }
  }


  render() {
    return (
      <div className="App">
        <ul className="accordion">
          {data.map(item => 
            <li className="accordion__item" key={item.Id} id={item.Id} onClick={this.handleAccordion}>
              <h2 className="accordion__item--title">{item.Name}</h2>
              <ul className={`accordion__item--list ${store.getState() === +item.Id ? "visible" : "hidden"}`}>
                  {item.children.map((object, index) =>
                    <li className="detail" key={index}>
                      <input type="checkbox" id={object.name} name={object.name} />
                        <label htmlFor={object.name}>{object.name}</label>
                    </li>
                  )}
              </ul>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;


