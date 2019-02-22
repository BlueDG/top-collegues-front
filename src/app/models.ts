export interface Collegue {
    pseudo: string,
    score: number,
    photoURL: string
}

export enum Avis {
    Aimer,
    Détester
}

export interface PostCollegue { // après l(html on crée le component dans model.ts 
    matricule?: string,
    pseudo?: string,
    photoURL?: string

}