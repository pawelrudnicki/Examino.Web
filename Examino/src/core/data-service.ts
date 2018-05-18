import { HttpClient, json } from "aurelia-fetch-client";

export abstract class DataService {
    
    protected constructor(private httpClient: HttpClient) {
        this.configureHttpClient();
    }

    protected get<TResult>(endpoint: string) : Promise<TResult> {
        return this.createRequest('GET', endpoint, null);
    }

    protected post<TResult>(endpoint: string, data: any) : Promise<TResult> {
        return this.createRequest('POST', endpoint, data);
    }

    protected put<TResult>(endpoint: string, data: any) : Promise<TResult> {
        return this.createRequest('PUT', endpoint, data);
    }

    protected delete<TResult>(endpoint: string) : Promise<TResult> {
        return this.createRequest('DELETE', endpoint, null);
    }

    private createRequest<TResult>(method: string, endpoint: string, data: any) : Promise<TResult> {
        let requestInit : RequestInit = {
            method: method
        };

        if(data != null)
            requestInit.body = json(data);
        
        return this.httpClient.fetch(endpoint, requestInit).then(response => response.json());
    }

    private configureHttpClient() {
        this.httpClient.configure(config => {
            config.withBaseUrl("http://localhost:5000/")
        });
    }
}