import  axios from 'axios';
import _ from 'lodash';

axios.defaults.headers.common = {
    'X-Riot-Token': 'RGAPI-3ef84816-cf35-4e5a-b14a-86c67c4a1630'
};

export const fetchChampions = () => {
    return axios.get('https://euw1.api.riotgames.com/lol/static-data/v3/champions?locale=en_US&dataById=false').then(result => {
        // console.log(result.data.data);
        // const data = _.map(function(result.data.data, item) {
        //     return item;
        // });
        // _.forEach(result.data.data);

        return result.data.data;
    });
}; 


/*
{
    "Origin": "https://developer.riotgames.com",
    "Accept-Charset": "application/x-www-form-urlencoded; charset=UTF-8",
    "X-Riot-Token": "RGAPI-cdf9d8a7-ce4e-4def-bdee-4a37125175b3",
    "Accept-Language": "en-US,en;q=0.9",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36"
}
*/