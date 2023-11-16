import { HttpContext } from "@angular/common/http";
import { TokenType } from "./token-type.enum";
import { DEFAULT_TOKEN } from "./default.token";

export const RPC_CONTEXT = new HttpContext().set(DEFAULT_TOKEN, TokenType.Rpc);