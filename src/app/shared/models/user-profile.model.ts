export interface UserProfile {
    id: number;
    email: string;
    role: 'STUDENT' | 'ADMIN' | null;
    firstName: string;
    lastName: string;
    career?: string;
}