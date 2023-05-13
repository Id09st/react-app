import React, { Component } from 'react'

export default class Players extends Component {
  render() {
    return (
      <div className='container-fluid'>
        <div class= "row d-inline-flex">
            
            <div class ="col-12 col-sm-6 col-md-4 p-2">
               <div class="d-flex flex-column text-center border height100">
                    <img src='assets/images/cr.jpg'/>
                    <h3>Cristiano Ronaldo</h3>
                    <p className='title'>Manchester United</p>
                    <button class="btn btn-block btn-dark">Detail</button>
               </div>
            </div>
            
            <div class ="col-12 col-sm-6 col-md-4 p-2">
               <div class="d-flex flex-column text-center border height100">
                    <img src='assets/images/kante.jpg'/>
                    <h3>Kante</h3>
                    <p className='title'>Chelsea</p>
                    <button class="btn btn-block btn-dark">Detail</button>
               </div>
            </div>
            
            <div class ="col-12 col-sm-6 col-md-4 p-2">
               <div class="d-flex flex-column text-center border height100">
                    <img src='assets/images/messi.jpg'/>
                    <h3>Messi</h3>
                    <p className='title'>PSG</p>
                    <button class="btn btn-block btn-dark">Detail</button>
               </div>
            </div>
            
            <div class ="col-12 col-sm-6 col-md-4 p-2">
               <div class="d-flex flex-column text-center border height100">
                    <img src='assets/images/neymar.jpg'/>
                    <h3>Neymar</h3>
                    <p className='title'>PSG</p>
                    <button class="btn btn-block btn-dark">Detail</button>
               </div>
            </div>
            
            <div class ="col-12 col-sm-6 col-md-4 p-2">
               <div class="d-flex flex-column text-center border height100">
                    <img src='assets/images/kane.jpg'/>
                    <h3>Kane</h3>
                    <p className='title'>Tottemham</p>
                    <button class="btn btn-block btn-dark">Detail</button>
               </div>
            </div>
            
            <div class ="col-12 col-sm-6 col-md-4 p-2">
               <div class="d-flex flex-column text-center border height100">
                    <img src='assets/images/haaland.jpg'/>
                    <h3>Haaland</h3>
                    <p className='title'>Manchester City</p>
                    <button class="btn btn-block btn-dark">Detail</button>
               </div>
            </div>
        </div>
      </div>
    )
  }
}
