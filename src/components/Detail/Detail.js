import React from 'react';
import { useParams } from 'react-router-dom';
import { Players } from '../../Shared/ListOfPlayers';
import './Detail.css';

export default function Detail() {
  const { id } = useParams();
  const player = Players.find((obj) => obj.id == id);
  const cost = player.cost.toLocaleString();

  return (
    <div className="detail-container">
      <div className="product-card">
        <div className="player-name-overlay">
          <div className="badge bg-danger text-white">{player.name}</div>
        </div>
        <div className="product-tumb">
        <img src={`../${player.img}`} alt='' />
        </div>
        <div className="product-details">
          <h4 className="text-dark font-weight-bold">{player.club}</h4>
          <div className="product-price text-warning">
            Market value: € {cost}
          </div>
          <p className="text-muted">{player.info}</p>
          <div className="product-bottom-details"></div>
        </div>
      </div>
    </div>
  );
}
