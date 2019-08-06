import { authApi } from './api';
import storage from './storage';

class Auth {
    accessTokenKey = 'accessToken';

    async authenticate(credentials) {
        const data = await authApi.getAccessToken(credentials);
        const {
            access_token: accessToken,
            expires_in: expiresIn,
            scope,
            token_type: tokenType,
        } = data;
        await storage.set(this.accessTokenKey, {
            accessToken,
            expiresIn,
            scope,
            tokenType,
        });
    }

    async isAuthenticated() {
        const accessToken = await storage.get(this.accessTokenKey);
        if (accessToken) {
            return true;
        }
    }
}

const auth = new Auth();

export default auth;
