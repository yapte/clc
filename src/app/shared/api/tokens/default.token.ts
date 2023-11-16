import { HttpContextToken } from "@angular/common/http";
import { TokenType } from "./token-type.enum";

export const DEFAULT_TOKEN = new HttpContextToken<TokenType>(() => TokenType.Default);