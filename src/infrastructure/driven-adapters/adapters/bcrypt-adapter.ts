import bcrypt from "bcrypt"; 
import { IHashCompare } from "@/domain/entities/contracts/hash-compare-repository";
import { IHashRepository } from "@/domain/entities/contracts/hash-repository";

export class BcryptAdapter implements IHashRepository, IHashCompare {
    private readonly salt: number = 12;

    constructor() {}

    // Méthode pour comparer le texte avec le mot de passe haché
    async compare(text: string, hashedPassword: string): Promise<boolean> {
        try {
            return await bcrypt.compare(text, hashedPassword);
        } catch (error) {
            console.error("Error during password comparison:", error);
            return false;
        }
    }

    // Méthode pour hacher le texte (mot de passe)
    async hash(text: string): Promise<string> {
        try {
            return await bcrypt.hash(text, this.salt);
        } catch (error) {
            console.error("Error during password hashing:", error);
            throw new Error("Hashing failed");
        }
    }
}
