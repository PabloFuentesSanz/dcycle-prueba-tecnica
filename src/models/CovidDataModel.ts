export interface GeneralData{
    data : CovidData
}

export interface CovidData{
    date: string,
    cases: Cases,
    outcomes: Outcomes,
    states: number,
    testing: Testing,
}

export interface Cases{
    total: {
        calculated: {
            change_from_prior_day:number,
            population_percent:number,
            seven_day_change_percent:number,
        } ,
        value: number,
    }
}

export interface Outcomes{
    
}

export interface Testing{
    
}