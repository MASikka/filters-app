import React, { Component } from "react";
import FilterDataService from "../services/filter.service";

export default class FiltersList extends Component {
  constructor(props) {
    super(props);
    this.retrieveFilters = this.retrieveFilters.bind(this);
    this.setActiveFilter = this.setActiveFilter.bind(this);

    this.state = {
      filters: [],
      currentFilter: null,
      currentIndex: -1,
      searchTitle: ""
    };
  }

  componentDidMount() {
    this.retrieveFilters();
  }

  retrieveFilters() {
    FilterDataService.getAll()
      .then(response => {
        this.setState({
          filters: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  setActiveFilter(filter, index) {
    this.setState({
      currentFilter: filter,
      currentIndex: index
    });
  }

  searchTitle() {
    this.setState({
      currentFilter: null,
      currentIndex: -1
    });

    FilterDataService.findByTitle(this.state.searchTitle)
      .then(response => {
        this.setState({
          filters: response.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { filters, currentFilter, currentIndex } = this.state;

    return (
      <div className="list row">
        <div className="col-md-8">

        </div>
        <div className="col-md-6">
          <h4>Filters List</h4>

          <ul className="list-group">
            {filters &&
              filters.map((filter, index) => (
                <li
                  className={
                    "list-group-item " +
                    (index === currentIndex ? "active" : "")
                  }
                  onClick={() => this.setActiveFilter(filter, index)}
                  key={index}
                >
                  {filter.title}
                </li>
              ))}
          </ul>


        </div>
        <div className="col-md-6">
          {currentFilter ? (
            <div>
              <h4>Filter</h4>
              <div>
                <label>
                  <strong>Title:</strong>
                </label>{" "}
                {currentFilter.title}
              </div>

              <div>
                <label>
                  <strong>Criteria 1:</strong>
                </label>{" "}
                {currentFilter.criteria1}
              </div>

              <div>
                <label>
                  <strong>Criteria 2:</strong>
                </label>{" "}
                {currentFilter.criteria2}
              </div>
              <div>
                <label>
                  <strong>Criteria 3:</strong>
                </label>{" "}
                {currentFilter.criteria3}
              </div>
              <div>
                <label>
                  <strong>Criteria 4:</strong>
                </label>{" "}
                {currentFilter.criteria4}
              </div>
              <div>
                <label>
                  <strong>Criteria 5:</strong>
                </label>{" "}
                {currentFilter.criteria5}
              </div>
              <div>
                <label>
                  <strong>Criteria 6:</strong>
                </label>{" "}
                {currentFilter.criteria6}
              </div>
              <button
                className="badge badge-danger mr-2"
                onClick={() => {FilterDataService.delete(currentFilter.id);window.location.reload(false)} }
              >
                Delete
              </button>


              
            </div>
          ) : (
            <div>
              <br />
              <p>Select a filter to see criteria</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}
