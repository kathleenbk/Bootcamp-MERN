import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Main = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then((res) => {
            console.log(res.data);
            setPlayers(res.data);
        })
        .catch((err) => console.log(err))
    }, []);

    const deletePlayer = (deleteId) => {
        axios.delete('http://localhost:8000/api/players/' + deleteId)
            .then((res) => {
                console.log(res.data);
                setPlayers(players.filter((player) => player._id !== deleteId));
            })
            .catch((err) => console.log(err))
    }

    const confirmDelete = (deleteId, deleteName) => {
        if (window.confirm(`Are you sure you want to delete ${deleteName}?`)) {
            deletePlayer(deleteId);
        }
    }

    return (
        <div className='main'>
            <div className='box'>
            
            <h2><Link to='/players/list'>List</Link>  |  <Link to='/players/addplayer'>Add Player</Link></h2>
            <table className='table table-bordered table-striped table1'>
                <tr>
                    <th>Team Name</th>
                    <th>Preferred Position</th>
                    <th>Playing</th>
                    <th>Actions</th>
                </tr>
                {
                    players.map((player, idx) => {
                        return(
                            <tr key={player._id}>
                                <td className='bigger'>{player.name}</td>
                                <td className='big'>{player.position}</td>
                                <td>Game 1 - {player.status.game1status}<br />Game 2 - {player.status.game2status}<br />Game 3 - {player.status.game3status}
                                </td>
                                <td><button onClick={() => confirmDelete(player._id, player.name)}>Delete</button></td>
                            </tr>
                        )

                    })
                }
            </table>
            </div>
        </div>
    )
}

export default Main;