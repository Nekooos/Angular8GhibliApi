import { People } from './People';
import { Specie } from './Specie';
import { Vehicle } from './Vehicle';

export class Movie {
    id: string;
    title:string;
    description: string;
    producer: string;
    releaseDate: number;
    score: number;
    people: string[];
    species: string[];
    locations: string[];
    vehicles: string[];
}
