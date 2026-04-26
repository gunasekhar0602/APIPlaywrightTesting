/* 
pre - requists    data: json file
1) create a new booking (Post) ---> booking ID
2) Create a token for updating the booking
3) Update booking(Put)  // required token
*/
import{test,expect} from'@playwright/test'
import fs from 'fs';

function readJson(filepath:string)
{
    JSON.parse(fs.readFileSync(filepath,'utf-8'))
}

test('update Booking(PUT)',async({request})=>
{
    // 1) Create a booking(post)
    // reading data from the file
    const requestbody=readJson("testdata/requestbody.json");

    const response=await request.post("https://restful-booker.herokuapp.com/booking/",
                                                                        {data:requestbody});
    expect(response.ok()).toBeTruthy();


    const responsebody=await response.json();
    const bookingid=responsebody.bookingid;
    console.log(bookingid)

    // 2) Update booking (PUT)  // required token
    // token creation

    const tokenrequestbody=readJson("testdata/token_requestbody.json");
    const tokenresponse=await request.post("https://restful-booker.heroapp.com/auth",
                                                                    {data:tokenrequestbody});
    expect(tokenresponse.ok()).toBeTruthy();

    const tokenresponsebody=await tokenresponse.json();
    const token=tokenresponsebody.token();
    console.log("Token", token)


    // 3) Sending update (Put)

    // For update request along with the request we need to token through headers
    const updaterequestbody =readJson("testdata/putrequestbody.json");
    const updateresponse=await request.put(`https://restful-booker.heroapp.com/booking/ ${bookingid}`,
                    {
                            headers:{"cookie":`token=${token}`},
                                        data:updaterequestbody
        
                    })
    expect(updateresponse.ok()).toBeTruthy();
    expect(updateresponse.status()).toBe(200);

    const updateresponsebody=await updateresponse.json();
    console.log(updateresponsebody);
    console.log("Booking details updated successfully.....");


})