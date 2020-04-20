import { Profile } from './profile.model';

export interface User {
    username: string;
    active: boolean;
    role: string;
    createdIn: Date,
    profile: Profile
}