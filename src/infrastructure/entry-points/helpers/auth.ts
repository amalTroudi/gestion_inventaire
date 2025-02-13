import {applyDecorators, AccessResource} from "@tsclean/core";
import {JwtAdapter} from "@/infrastructure/driven-adapters/adapters/jwt-adapter";

export function Auth(role: string[]) {
    return applyDecorators(AccessResource(new JwtAdapter(role)));
}