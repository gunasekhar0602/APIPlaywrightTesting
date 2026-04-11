
/* 

pre - requists
data: json file
1) create a new booking (Post) ---> booking ID
2) Create a token
3) Update booking(Put)  // required token

*/


import{test,expect} from'@playwright/test'
import fs from 'fs'

function readJson(filepath:string)
{
    const data=fs.readFileSync(filepath,'utf8')
}

readJson("testdata/post_request.json")