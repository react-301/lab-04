import React from 'react';
import Footer from './Components/Footer.js';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import hornsData from './Components/hornsData.json';
import SelectedBeast from './Components/SelectedBeast';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component{

    constructor(props){
      super(props);
      this.state={
        hornsData : hornsData,
        displayModal:false,
        selectedBeast:hornsData
      }
    }

    handleClose = () =>{
      this.setState({
        displayModal:false
      })
    }

    displayAsModal =(title)=>{
      const selectedBeast2 = hornsData.find(beast=>{
        if (beast.title===title){
          return beast
        }
      })
        this.setState({
          displayModal:true,
          selectedBeast : selectedBeast2
        })
    }

    displayFilteredImages=(newHorns)=>{
      this.setState({
        hornsData:newHorns
      })
    }

  render(){
    return(
      <>
      <Header/>
      <Main
      hornsData={this.state.hornsData}
      displayAsModal={this.displayAsModal}
      displayFilteredImages={this.displayFilteredImages}
      />
      <SelectedBeast
      selectedBeast={this.state.selectedBeast}
      handleClose={this.handleClose}
      show={this.state.displayModal}
      />
      <Footer/>
      </>
    )
  }


}
export default App; 