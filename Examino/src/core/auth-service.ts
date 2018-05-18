export class AuthService {

    private rememberMe: boolean;
    private readonly storageKey = 'access_token';
    private get storage() { return this.rememberMe? localStorage : sessionStorage };

    setAccessToken(accessToken: string, remeberMe: boolean) : void {
        this.rememberMe = remeberMe;
        this.storage.setItem(this.storageKey, accessToken);
    }

    getAccessToken() : string {
        return this.storage.getItem(this.storageKey);
    }

    clearAccessToken() : void {
        this.storage.clear();
    }
}