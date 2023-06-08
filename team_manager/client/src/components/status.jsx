import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';


const Status = (props) => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  
  if (gameId > 3 || gameId < 1) {
    navigate('/status/game/1');
  };
  const [players, setPlayers] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:8000/api/players")
      .then((res) => {
        // console.log(res.data[0].status[0]);
        setPlayers(res.data);
        
      })
      .catch((err) => console.log(err))
  }, []);



  const updatePlayer =(num, playerId, thing) => {

    let updatedPlayer = players.filter((player) => player._id === playerId)[0];

    if(num === '1'){
      updatedPlayer.status.game1status = thing;
    } else if(num === '2'){
      updatedPlayer.status.game2status = thing;
    } else if(num === '3'){
      updatedPlayer.status.game3status = thing;
    }

    
    
    axios.put('http://localhost:8000/api/players/' + playerId, updatedPlayer)
    .then((res) => {
      
      navigate('/status/game/' + gameId)
    })
    .catch((err) => console.log(err))
  }







  return (
    <div className='container'>
      <div className='box'>
        <h1 className='playerstatus'>Player Status - Game {gameId}</h1>
        <h3><Link to='/status/game/1'>Game 1</Link> | <Link to='/status/game/2'>Game 2</Link> | <Link to='/status/game/3'>Game 3</Link></h3>
        <table className='table table-bordered'>
          <thead>
          <tr>
            <th>Team Name</th>
            <th>Actions</th>
          </tr>
          </thead>
          <tbody>
          {
            players.map((player, idx) => {
              return (
                
                <tr key={player._id}>
                  <td>{player.name}</td>
                  <td className='buttons'>

                    <button   onClick={(e) => updatePlayer(gameId, player._id, (e.target.value))} value={'Playing'} style={{ backgroundColor: player.status['game' + gameId+ 'status']=== 'Playing' ? 'green' : '' }}>Playing</button>
                    <button onClick={(e) => updatePlayer(gameId, player._id, (e.target.value))} value={'Not Playing'} style={{ backgroundColor: player.status['game' + gameId+ 'status'] === 'Not Playing' ? 'red' : '' }}>Not Playing</button>
                    <button onClick={(e) => updatePlayer(gameId, player._id, (e.target.value))} value={'Undecided'} style={{ backgroundColor: player.status['game' + gameId+ 'status'] === 'Undecided' ? 'yellow' : '' }}>Undecided</button>

                  </td>
                  <td>

                  </td>
                </tr>
              )

            })
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Status;