import { DECRYPT_REPOSITORY, IDecrypt } from "@/domain/entities/contracts/decrypt-repository";
import { ILoadAccountTokenRepository, LOAD_ACCOUNT_TOKEN_REPOSITORY } from "@/domain/entities/contracts/load-account-repository";
import { Adapter, Service } from "@tsclean/core";
import { ILoadAccountTokenService } from "../load-account-service";

@Service()
export class LoadAccountTokenServiceImpl implements ILoadAccountTokenService {

    constructor(
        @Adapter(DECRYPT_REPOSITORY) private readonly decrypt: IDecrypt,
        @Adapter(LOAD_ACCOUNT_TOKEN_REPOSITORY) private readonly loadAccountTokenRepository: ILoadAccountTokenRepository
    ) {
    }

    async loadToken(token: string): Promise<ILoadAccountTokenService.Result> {
        let accessToken: string;

        try {
            accessToken = await this.decrypt.decrypt(token);
        } catch (e) {
            return null;
        }

        if (accessToken) {
            const account = await this.loadAccountTokenRepository.loadToken(accessToken["account"]);
            console.log("service", account)
            if (account) return account;
        }

        return null;
    }
}