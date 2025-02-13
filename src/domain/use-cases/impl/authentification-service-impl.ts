import { CHECK_EMAIL_REPOSITORY, ICheckEmailRepository } from "@/domain/entities/contracts/check_email_repository";
import { ENCRYPT_REPOSITORY, IEncrypt } from "@/domain/entities/contracts/encrypt-repositor";
import { HASH_COMPARE_REPOSITORY, IHashCompare } from "@/domain/entities/contracts/hash-compare-repository";
import { IUpdateAccessTokenRepository, UPDATE_ACCESS_TOKEN_REPOSITORY } from "@/domain/entities/contracts/update-access-token-repository";
import { Adapter, Service } from "@tsclean/core";
import { IAuthenticationService } from "../authentification-service";

@Service()
export class AuthenticationServiceImpl implements IAuthenticationService {
    constructor(
        @Adapter(ENCRYPT_REPOSITORY) private readonly encrypt: IEncrypt,
        @Adapter(HASH_COMPARE_REPOSITORY) private readonly hashCompare: IHashCompare,
        @Adapter(CHECK_EMAIL_REPOSITORY) private readonly checkEmailRepository: ICheckEmailRepository,
        @Adapter(UPDATE_ACCESS_TOKEN_REPOSITORY) private readonly updateAccessTokenRepository: IUpdateAccessTokenRepository
        ) {}
        async auth(data: IAuthenticationService.Params): Promise<IAuthenticationService.Result> {
            try {
                // Check if the user exists
                const account = await this.checkEmailRepository.checkEmail(data.email);
                console.log("Account found:", account);
    
            // If user not found, return null
            if (!account) {
                console.log("No account found for email:", data.email);
                return null; 
            }
             // Compare the provided password with the stored password
             const isValid = data.password.trim() === account.password.trim(); // Simple comparison
             console.log("Provided password:", data.password);
             console.log("Stored password:", account.password);
             console.log("Password comparison result:", isValid);
    
            if (!isValid) {
                console.log("Invalid password for email:", data.email);
                return null; 
            }
             // If all is correct, return the result object
             return {
                access_token: "your_generated_access_token_here", // Generate token here
                name: account.name
            };
        } catch (error) {
            console.error("Error during authentication:", error);
            throw new Error("Authentication failed.");
        }}
    
    }