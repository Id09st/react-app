import React from 'react'

export default function PlayersPresentation({players}) {
    return (
        <div className='container-fluid'>
                <div class= "row d-inline-flex">
                {players.map((player)=>(
                    <div class ="col-12 col-sm-6 col-md-4 p-2">
                    <div class="d-flex flex-column text-center border height100" key={player.id}>
                    {/* <div className='column' key={player.id}>
                    <div className='card'> */}
                    <img src={player.img} alt=''/>
                      <h3>{player.name}</h3>
                      <p className='title'>{player.club}</p>
                      <button class="btn btn-block btn-dark">Detail</button>
                    </div>
                  </div>    
                ))}
            </div>
            </div>
      
    )
  }

