import React, { Component } from 'react';
import './Home.css';
// import axios from 'axios';

export default class Home extends Component
{
    constructor(props) {
      super(props)
    
      this.state = {
         csv: ''
      };
    };
    
    onChange = (e) => {
        let files=e.target.files;
        let render= new FileReader();
        render.readAsDataURL(files[0])

        render.onload=(e)=>{
            console.log("csv data",e.target.result)
        }
    }

   render()
   {
      return(
          <div className="container">
            <form onSubmit={this.onFormSubmit}>
                <h1>Upload the csv...</h1>
                <input type="file" name="file"  onChange={(e)=>this.onChange(e)} accept=".csv"  />
                <button type="submit" className="btn btn-success btn-block">Upload</button>
            </form>
          </div>
      )
   }
}
