
import React, { Component } from "react";
import FilterDataService from "../services/filter.service";

export default class AddFilter extends Component {
  amount = ["more than", "less than", "equals"];
  title = ["starts with", "ends with", "contains"];
  date = ["from", "to", "equals"];
  index = 0;
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);

    this.onChangeValue = this.onChangeValue.bind(this);
    this.onChangeValue1 = this.onChangeValue1.bind(this);
    this.onChangeValue2 = this.onChangeValue2.bind(this);
    this.onChangeValue3 = this.onChangeValue3.bind(this);
    this.onChangeValue4 = this.onChangeValue4.bind(this);
    this.onChangeValue5 = this.onChangeValue5.bind(this);
    this.changeSelectOptionHandler = this.changeSelectOptionHandler.bind(this);
    this.changeSelectOptionHandler1 = this.changeSelectOptionHandler1.bind(this);
    this.changeSelectOptionHandler2 = this.changeSelectOptionHandler2.bind(this);
    this.changeSelectOptionHandler3 = this.changeSelectOptionHandler3.bind(this);
    this.changeSelectOptionHandler4 = this.changeSelectOptionHandler4.bind(this);
    this.changeSelectOptionHandler5 = this.changeSelectOptionHandler5.bind(this);
    this.onChangeModifier = this.onChangeModifier.bind(this);
    this.onChangeModifier1 = this.onChangeModifier1.bind(this);
    this.onChangeModifier2 = this.onChangeModifier2.bind(this);
    this.onChangeModifier3 = this.onChangeModifier3.bind(this);
    this.onChangeModifier4 = this.onChangeModifier4.bind(this);
    this.onChangeModifier5 = this.onChangeModifier5.bind(this);


this.checkCriteria = this.checkCriteria.bind(this);
    this.showRow = this.showRow.bind(this);
    this.hideRow = this.hideRow.bind(this);
    this.saveFilter = this.saveFilter.bind(this);


    this.state = {
      id: null,
      title: "",

      value: "",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      value5: "",

      selected: "Amount",
      selected1: "Amount",
      selected2: "Amount",
      selected3: "Amount",
      selected4: "Amount",
      selected5: "Amount",

      modifier: "more than",
      modifier1: "more than",
      modifier2: "more than",
      modifier3: "more than",
      modifier4: "more than",
      modifier5: "more than",

      showing1: false,
      showing2: false,
      showing3: false,
      showing4: false,
      showing5: false,
      showingAddRow: true,

      type: this.amount,
      type1: this.amount,
      type2: this.amount,
      type3: this.amount,
      type4: this.amount,
      type5: this.amount,

      inputType: "number",
      inputType1: "number",
      inputType2: "number",
      inputType3: "number",
      inputType4: "number",
      inputType5: "number",
    };
  }

  showRow() {
    if(this.index<5){
      this.index++;
    }
    if(this.index === 1){
      this.setState({
      showing1: true,
    });}
    if(this.index === 2){
      this.setState({
      showing2: true,
    });}
    if(this.index === 3){
      this.setState({
      showing3: true,
    });}
    if(this.index === 4){
      this.setState({
      showing4: true,
    });}
    if(this.index === 5){
      this.setState({
      showing5: true,
      showingAddRow: false,
    });
    }
    
  }
  hideRow() {
    if(this.index>0){
      this.index--;
    }
    
    if(this.index === 0){
      this.setState({
      showing1: false,
      value1: "",
    });
    }
    if(this.index === 1){
      this.setState({
      showing2: false,
      value2: "",
    });
    }
    if(this.index === 2){
      this.setState({
      showing3: false,
      value3: "",
    });
    }
    if(this.index === 3){
      this.setState({
      showing4: false,
      value4: "",
    });
    }
    if(this.index === 4){
      this.setState({
      showing5: false,
      showingAddRow: true,
      value5: "",
    });
    }
    
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeValue(e) {
    this.setState({
      value: e.target.value
    });
  }

  onChangeValue1(e) {
    this.setState({
      value1: e.target.value
    });
  }
  onChangeValue2(e) {
    this.setState({
      value2: e.target.value
    });
  }
  onChangeValue3(e) {
    this.setState({
      value3: e.target.value
    });
  }
  onChangeValue4(e) {
    this.setState({
      value4: e.target.value
    });
  }
  onChangeValue5(e) {
    this.setState({
      value5: e.target.value
    });
  }

  onChangeModifier(e) {
    this.setState({
      modifier: e.target.value
    });
  }
  onChangeModifier1(e) {
    this.setState({
      modifier1: e.target.value
    });
  }
  onChangeModifier2(e) {
    this.setState({
      modifier2: e.target.value
    });
  }
  onChangeModifier3(e) {
    this.setState({
      modifier3: e.target.value
    });
  }
  onChangeModifier4(e) {
    this.setState({
      modifier4: e.target.value
    });
  }
  onChangeModifier5(e) {
    this.setState({
      modifier5: e.target.value
    });
  }

  changeSelectOptionHandler = (e) => {
    this.setState({ selected: e.target.value }, function () {
      if (this.state.selected === "Amount") {
        this.setState({ type: this.amount });
        this.setState({ inputType: "number" });
        this.setState({ modifier: "more than" });
      } else if (this.state.selected === "Title") {
        this.setState({ type: this.title });
        this.setState({ inputType: "text" });
        this.setState({ modifier: "starts with" });
      } else {
        this.setState({ type: this.date });
        this.setState({ inputType: "date" });
        this.setState({ modifier: "from" });
      }


    })

  }
  

  changeSelectOptionHandler1 = (e) => {
    this.setState({ selected1: e.target.value }, function () {
      if (this.state.selected1 === "Amount") {
        this.setState({ type1: this.amount });
        this.setState({ inputType1: "number" });
        this.setState({ modifier1: "more than" });
      } else if (this.state.selected1 === "Title") {
        this.setState({ type1: this.title });
        this.setState({ inputType1: "text" });
        this.setState({ modifier1: "starts with" });
      } else {
        this.setState({ type1: this.date });
        this.setState({ inputType1: "date" });
        this.setState({ modifier1: "from" });
      }


    })

  }
  changeSelectOptionHandler2 = (e) => {
    this.setState({ selected2: e.target.value }, function () {
      if (this.state.selected2 === "Amount") {
        this.setState({ type2: this.amount });
        this.setState({ inputType2: "number" });
        this.setState({ modifier2: "more than" });
      } else if (this.state.selected2 === "Title") {
        this.setState({ type2: this.title });
        this.setState({ inputType2: "text" });
        this.setState({ modifier2: "starts with" });
      } else {
        this.setState({ type2: this.date });
        this.setState({ inputType2: "date" });
        this.setState({ modifier2: "from" });
      }


    })

  }
  changeSelectOptionHandler3 = (e) => {
    this.setState({ selected3: e.target.value }, function () {
      if (this.state.selected3 === "Amount") {
        this.setState({ type3: this.amount });
        this.setState({ inputType3: "number" });
        this.setState({ modifier3: "more than" });
      } else if (this.state.selected3 === "Title") {
        this.setState({ type3: this.title });
        this.setState({ inputType3: "text" });
        this.setState({ modifier3: "starts with" });
      } else {
        this.setState({ type3: this.date });
        this.setState({ inputType3: "date" });
        this.setState({ modifier3: "from" });
      }


    })

  }
  changeSelectOptionHandler4 = (e) => {
    this.setState({ selected4: e.target.value }, function () {
      if (this.state.selected4 === "Amount") {
        this.setState({ type4: this.amount });
        this.setState({ inputType4: "number" });
        this.setState({ modifier4: "more than" });
      } else if (this.state.selected4 === "Title") {
        this.setState({ type4: this.title });
        this.setState({ inputType4: "text" });
        this.setState({ modifier4: "starts with" });
      } else {
        this.setState({ type4: this.date });
        this.setState({ inputType4: "date" });
        this.setState({ modifier4: "from" });
      }


    })

  }
  changeSelectOptionHandler5 = (e) => {
    this.setState({ selected5: e.target.value }, function () {
      if (this.state.selected5 === "Amount") {
        this.setState({ type5: this.amount });
        this.setState({ inputType5: "number" });
        this.setState({ modifier5: "more than" });
      } else if (this.state.selected5 === "Title") {
        this.setState({ type5: this.title });
        this.setState({ inputType5: "text" });
        this.setState({ modifier5: "starts with" });
      } else {
        this.setState({ type5: this.date });
        this.setState({ inputType5: "date" });
        this.setState({ modifier5: "from" });
      }


    })

  }
  checkCriteria(providedValue,index){
    let selected;
    let modifier;
    let value;
    if(providedValue===""){
      return null;
    }

    if(index === 0){
      selected = this.state.selected;
      modifier = this.state.modifier;
      value = this.state.value;
    }else if(index === 1){
      selected = this.state.selected1;
      modifier = this.state.modifier1;
      value = this.state.value1;
    }else if(index === 2){
      selected = this.state.selected2;
      modifier = this.state.modifier2;
      value = this.state.value2;
    }else if(index === 3){
      selected = this.state.selected3;
      modifier = this.state.modifier3;
      value = this.state.value3;
    }else if(index === 4){
      selected = this.state.selected4;
      modifier = this.state.modifier4;
      value = this.state.value4;
    }else if(index === 5){
      selected = this.state.selected5;
      modifier = this.state.modifier5;
      value = this.state.value5;
    }
    return selected + " " + modifier + " " + value;
    
  }

  saveFilter() {

    var data = {
      title: this.state.title,
      criteria1: this.checkCriteria(this.state.value,0),
      criteria2: this.checkCriteria(this.state.value1,1),
      criteria3: this.checkCriteria(this.state.value2,2),
      criteria4: this.checkCriteria(this.state.value3,3),
      criteria5: this.checkCriteria(this.state.value4,4),
      criteria6: this.checkCriteria(this.state.value5,5),
    };
    if (this.state.title === "" || this.state.value=== "") {
      return false;
    } else {
      FilterDataService.create(data)
        .then(response => {
          this.setState({
            id: response.data.id,
            title: response.data.title,
            criteria1: response.data.criteria1,
            criteria2: response.data.criteria2,
            criteria3: response.data.criteria3,
            criteria4: response.data.criteria4,
            criteria5: response.data.criteria5,
            criteria6: response.data.criteria6,

          });

        })
        .catch(e => {
          console.log(e);
        });
    }
  }


  render() {

    return (
      <form>
        <div className="submit-form">
          <div>

            <div className="form-group">

              <label htmlFor="title">Name of filter</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
            </div>

            <div>


              <div className="form-group" >

                <select id="criteriaType" onChange={this.changeSelectOptionHandler}>
                  <option value="Amount">Amount</option>
                  <option value="Title">Title</option>
                  <option value="Date">Date</option>
                </select>
                <select onChange={this.onChangeModifier}>
                  {this.state.type.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                </select>
                <input id="criteriaValue" className="form-control" onChange={this.onChangeValue} type={this.state.inputType} required></input>


              </div>


              {this.state.showing1 ? (
                <div className="form-group" >

                  <select id="criteriaType" onChange={this.changeSelectOptionHandler1}>
                    <option value="Amount">Amount</option>
                    <option value="Title">Title</option>
                    <option value="Date">Date</option>
                  </select>
                  <select onChange={this.onChangeModifier1}>
                    {this.state.type1.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                  </select>
                  <input id="criteriaValue" className="form-control" onChange={this.onChangeValue1} type={this.state.inputType1} required></input>


                </div>
              ) : null}



              {this.state.showing2 ? (
                <div className="form-group" >

                  <select id="criteriaType" onChange={this.changeSelectOptionHandler2}>
                    <option value="Amount">Amount</option>
                    <option value="Title">Title</option>
                    <option value="Date">Date</option>
                  </select>
                  <select onChange={this.onChangeModifier2}>
                    {this.state.type2.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                  </select>
                  <input id="criteriaValue" className="form-control" onChange={this.onChangeValue2} type={this.state.inputType2} required></input>


                </div>
              ) : null}

              {this.state.showing3 ? (
                <div className="form-group" >

                  <select id="criteriaType" onChange={this.changeSelectOptionHandler3}>
                    <option value="Amount">Amount</option>
                    <option value="Title">Title</option>
                    <option value="Date">Date</option>
                  </select>
                  <select onChange={this.onChangeModifier3}>
                    {this.state.type3.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                  </select>
                  <input id="criteriaValue" className="form-control" onChange={this.onChangeValue3} type={this.state.inputType3} required></input>


                </div>
              ) : null}
              {this.state.showing4 ? (
                <div className="form-group" >

                  <select id="criteriaType" onChange={this.changeSelectOptionHandler4}>
                    <option value="Amount">Amount</option>
                    <option value="Title">Title</option>
                    <option value="Date">Date</option>
                  </select>
                  <select onChange={this.onChangeModifier4}>
                    {this.state.type4.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                  </select>
                  <input id="criteriaValue" className="form-control" onChange={this.onChangeValue4} type={this.state.inputType4} required></input>


                </div>
              ) : null}

              {this.state.showing5 ? (
                <div className="form-group" >

                  <select id="criteriaType" onChange={this.changeSelectOptionHandler5}>
                    <option value="Amount">Amount</option>
                    <option value="Title">Title</option>
                    <option value="Date">Date</option>
                  </select>
                  <select onChange={this.onChangeModifier5}>
                    {this.state.type5.map(arrayItem => <option value={arrayItem}>{arrayItem}</option>)}
                  </select>
                  <input id="criteriaValue" className="form-control" onChange={this.onChangeValue5} type={this.state.inputType5} required></input>


                </div>
              ) : null}



                <div id="rowButtons">
                {this.state.showingAddRow ? (
              <button type="button" className="btn btn-success" onClick={this.showRow}>+</button>
              ) : null}
            {this.state.showing1 ? (
              <button onClick={this.hideRow} class="btn btn-danger" type="button">-</button>
              ) : null}
              </div>
            </div>

            <button onClick={this.saveFilter} className="btn btn-success">
              Submit
            </button>
          </div>


        </div></form>
    );
  }

}
