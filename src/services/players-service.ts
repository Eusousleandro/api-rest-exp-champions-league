import * as PlayersRepositories from "../repositories/players-repository"
import { IPlayersTransf } from "../Interfaces/IPlayersTransf";
import { StatusCode } from "../utils/status-code";
import { IPlayers } from "../Interfaces/IPlayers";

const getPlayerService = async ():Promise<IPlayersTransf> => {

    let responseFormat: IPlayersTransf = {
        statusCode: 0,
        body: []
    };

    const data = await PlayersRepositories.findAllPlayer();

    responseFormat = {
        statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data
    }

    return responseFormat;
}

const getPlayerServiceById = async (id: number) => {
    let responseFormat: IPlayersTransf = {
        statusCode: 0,
        body: []
    }

    const data = await PlayersRepositories.findPlayerById(id);
    const datas: IPlayers[] = data ? [data] : []

    responseFormat.statusCode = data?.id !== data ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = datas
    return responseFormat;
}

const createPlayerService = async (players: IPlayers) => {
    let responseForm: IPlayersTransf = {
        statusCode: 0,
        body: []
    }

    const datas: IPlayers[] = players ? [players] : [];

    if(players) {
        await PlayersRepositories.createPlayers(players);
        responseForm.statusCode = StatusCode.OK;
        responseForm.body = datas
    } else {
        responseForm.statusCode = StatusCode.NO_CONTENT;
        responseForm.body = datas
    }

    
    return responseForm

}

const updatePlayersService = async (id: number) => {
    let responseForm: IPlayersTransf = {
        statusCode: 0,
        body: []
    }

    const data = await PlayersRepositories.updatesPlayers(id);
    const datas: IPlayers[] = data ! ? [data] : []

    responseForm.statusCode = data !== data ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseForm.body = datas;

    return responseForm
}

const deletePlayersService = async (id: number) => {
    let responseForm: IPlayersTransf = {
        statusCode: 0,
        body: []
    }

    const data = await PlayersRepositories.deletePlayers(id)
    const datas: IPlayers[] = data ! ? [data] : []

    responseForm.statusCode = data !== data ? StatusCode.OK : StatusCode.NO_CONTENT;
    responseForm.body = datas;

    return responseForm
}


export { 
    getPlayerService, 
    getPlayerServiceById,
    createPlayerService,
    updatePlayersService,
    deletePlayersService
 }