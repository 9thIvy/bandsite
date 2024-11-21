const makeApiKey = () => {
    const set = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
    const length = set.length;
    let key = '';
    for (let i = 0; i < length; i++) { 
        key += set.charAt(Math.floor(Math.random() * length));
    }

    return key;
};

class BandSiteApi{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com/";
    }

    postComment(commentObject){
        axios.post(this.baseUrl + '/comments', commentObject)
        .then( (response) =>{
            console.log(response);
        })
        .catch((error) =>{
            console.log(error);
        });
        

    }
}

let testKey = makeApiKey();
let test = new BandSiteApi(testKey);
test.postComment({
    "name": "Cthulu Allspark",
    "comment": "What a great band."
});