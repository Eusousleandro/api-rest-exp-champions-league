import { IPlayers } from "../Interfaces/IPlayers"
import playersData from "../database/players.json";

const findAllPlayer = async ():Promise<IPlayers[]> => {
        return playersData;
}

const findPlayerById = async (id: number):Promise<IPlayers | undefined> => {
        const player = playersData.find( player => player.id === id);
        return player;
}

const createPlayers = async (player: IPlayers) => {
    const playersCreate = playersData.push()
    return playersCreate;
}

const updatesPlayers = async (id: number) => {
    const index = playersData.findIndex(player => player.id === id)
    
    if(index !== -1) {
        playersData.slice(id)
    }
}

const deletePlayers = async (id: number) => {
    const index = playersData.findIndex(player => player.id === id)
    
    if(index !== -1) {
        playersData.slice(id)
    }
}

export { findAllPlayer, findPlayerById, createPlayers, updatesPlayers, deletePlayers }