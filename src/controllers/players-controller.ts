import { Request, Response } from "express"
import { IPlayersTransf } from "../Interfaces/IPlayersTransf"
import * as service from "../services/players-service"

const getListPlayer = async ( req: Request, res: Response) => {
    try {
        const content: IPlayersTransf = await service.getPlayerService() 
        res.status(content.statusCode).json(content.body)
    } catch (error) {
        console.error({message: "Players não encontrado"})
        res.status(500).json({ message: "Houve um erro ao buscar os players", error })
    }
}

const getListById = async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id)
        const response: IPlayersTransf = await service.getPlayerServiceById(id)
        res.status(response.statusCode).json(response.body)
    } catch (error) {
        
    }
}

const createPlayer = async (req: Request, res: Response) => {
    const bodyValue = req.body;
    const responseForm: IPlayersTransf = await service.createPlayerService(bodyValue);
    res.status(responseForm.statusCode).json(responseForm.body);
}

const updatePlayers = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const responseForm: IPlayersTransf = await service.updatePlayersService(id);
    res.status(responseForm.statusCode).json(responseForm.body)
}

const deletePlayers = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const responseForm: IPlayersTransf = await service.deletePlayersService(id);
    res.status(responseForm.statusCode).json(responseForm.body)
}

export {
    getListPlayer,
    getListById, 
    createPlayer,
    updatePlayers,
    deletePlayers
}