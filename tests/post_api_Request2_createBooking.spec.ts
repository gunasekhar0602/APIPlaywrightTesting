/* 
Test - create booking     Request type - post      Request body - JSON
*/
// Here are getting the request body details from the json file.

import{test,expect}from'@playwright/test'
import fs from 'fs';     // for getting file

test('create request using JSON file',async({request})=>
{
    // read data from json(request body)
    const jsonfile="testdata/post_request.json"
    const requestbody=JSON.parse(fs.readFileSync(jsonfile,'utf-8'))

    // send post request and capture in response
    // for posting request we need to mention the url and requestbody

    const baseurl='https://restful-booker.herokuapp.com/booking'
    const response=await request.post(baseurl,{data:requestbody})

    const responsebody=await response.json()   // returns the body from response
    console.log(responsebody)

    // validation of status code
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200)

    // validate response body
    expect(responsebody).toHaveProperty("bookingid")
    expect(responsebody).toHaveProperty("booking")
    expect(responsebody).toHaveProperty("booking.additionalneeds")

    // validate booking details
    const booking=responsebody.booking
// here no need to hardcore the values instead say resquestbody.property
    expect(responsebody.booking).toMatchObject({
        firstname:requestbody.firstname, lastname:requestbody.lastname,
        totalprice:requestbody.totalprice, depositpaid:requestbody.depositpaid,
        additionalneeds:requestbody.additionalneeds,
        });

    // validate booking dates
    
    expect(booking.bookingdates).toMatchObject({
        checkin:requestbody.booking.checkin,
        checkout:requestbody.bboking.checkout,
    })
})
