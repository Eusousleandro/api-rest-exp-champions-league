export interface IPlayers {
    id: number,
    name: string,
    club: string,
    nationality: string,
    position: string,
    statistics: {
            Overall: number,
            Pace: number,
            Shooting: number,
            Passing: number,
            Dribbing: number,
            Defending: number,
            Physical: number
    }
}