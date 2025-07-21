import React, { Component } from 'react';
import './Myapp.css';

class Myapp extends Component {
  render() {
    return (
      <div className='Myinfo'>
        <img src="" alt="photo" />
        <table>
            <tr>
                <td><label>Name-</label></td>
                <td><label>S.V.Raghavan</label></td>
            </tr>
            <tr>
                <td><label>Program-</label></td>
                <td><label>Btech Ai&Ds</label></td>
            </tr>
            <tr>
                <td><label>phone number-</label></td>
                <td>
                    <label>9182424505</label>
                </td>
            </tr>
            <tr>
                <td>
                    <label>email-</label>
                </td>
                <td><label>sreenivasanvenkataraghavan@gmail.com</label></td>
            </tr>
        </table>
        
        
        
        
        
        
        
        
      </div>
    );
  }
}

export default Myapp;
