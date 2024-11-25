export class BandSiteApi{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }


    async makeRequest(method, endpoint, data = null){
        const url = `${this.baseUrl}${endpoint}?api_key=${this.apiKey}`;
        const config = {
            method,
            url,
            headers: {
                'Content-Type': 'application/json',
            },
            data,
        };

        try{
            const response = await axios(config);
            console.log(`Axios call success`);
            return response;
        }
        catch(error){
            console.error("Axios call failed: ", error.response ? error.response.data : error.message);
            throw error;
        }
    }

    async postComment(commentObject){
        return this.makeRequest('post','comments',commentObject);
    }

    async getComments(){
        return this.makeRequest('get','comments');
    }

    async getShows(){
        return this.makeRequest('get','showdates');
    }

}
