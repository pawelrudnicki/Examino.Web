import { HttpClient, json } from "aurelia-fetch-client";
import { AuthService } from "./auth-service";

export abstract class DataService {
    
    protected constructor(private httpClient: HttpClient, private authService: AuthService) {
        this.configureHttpClient();
    }

    protected get<TResult>(endpoint: string, isProtected: boolean) : Promise<TResult> {
        return this.createRequest('GET', endpoint, null, isProtected);
    }

    protected post<TResult>(endpoint: string, data: any, isProtected: boolean) : Promise<TResult> {
        return this.createRequest('POST', endpoint, data, isProtected);
    }

    protected put<TResult>(endpoint: string, data: any, isProtected: boolean) : Promise<TResult> {
        return this.createRequest('PUT', endpoint, data, isProtected);
    }

    protected delete<TResult>(endpoint: string, isProtected: boolean) : Promise<TResult> {
        return this.createRequest('DELETE', endpoint, null, isProtected);
    }

    private createRequest<TResult>(method: string, endpoint: string, data: any, isProtected: boolean) : Promise<TResult> {
        let requestInit : RequestInit = {
            method: method
        };

        if(data != null)
            requestInit.body = json(data);

        if(isProtected)
            requestInit.headers = this.createAuthorizationHeader();
        
        return this.httpClient.fetch(endpoint, requestInit).then(response => response.json());
    }

    private configureHttpClient() {
        this.httpClient.configure(config => {
            config.withBaseUrl("http://localhost:5000/")
        });
    }

    private createAuthorizationHeader() : any {
        let accessToken = this.authService.getAccessToken();
        return { 'Authorization': `Bearer ${accessToken}` };
    }
}