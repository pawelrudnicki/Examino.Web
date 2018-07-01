export class AuthService {

    private rememberMe: boolean;
    private readonly storageKey = 'access_token';
    private get storage() { return this.rememberMe? localStorage : sessionStorage };

    constructor() {
        this.setStorage();
    }

    setAccessToken(accessToken: string, rememberMe: boolean) : void {
        this.rememberMe = rememberMe;
        this.storage.setItem(this.storageKey, accessToken);
    }

    getAccessToken() : string {
        return this.storage.getItem(this.storageKey);
    }

    clearAccessToken() : void {
        this.storage.clear();
    }

    private setStorage() {
        this.rememberMe = localStorage.getItem(this.storageKey) !== null;
    }
}
