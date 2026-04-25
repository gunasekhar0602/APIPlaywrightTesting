import{test,expect,Locator} from"@playwright/test"

test.only('getrequest by path parameter',async({request})=>
{
    const bookingId=1;   // we can use this as path parameter

    // sending get request and capturing the response by using path parameter

    // here we are using backtik operator for url and booking id
    // by using backtik operator me can get booking id value

    coast baseurl = "https://restful-booker.herokuapp.com/booking/"
    const response=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`)

    // parse the response and print
    const responsebody=await response.json();
    console.log(responsebody);


    // add assertions
    expect(response.ok()).toBeTruthy;
    expect(response.status()).toBe(200);





test.only('getrequest by query parameter',async({request})=>
{
    const firstname = "jim";
    const lastname = "Brown";

    // sending get request and capturing the response by using path parameter

    // here we are using backtik operator for url and booking id
    // by using backtik operator me can get booking id value

    coast baseurl = "https://restful-booker.herokuapp.com/booking/"
    const response=await request.get("https://restful-booker.herokuapp.com/booking/", {params:
    {
        firstname,
        lastname
    }
        });

    // parse the response and print
    const responsebody=await response.json();
    console.log(responsebody);


    // add assertions
    expect(response.ok()).toBeTruthy;
    expect(response.status()).toBe(200);

    // check response should not be empty
    expect(responsebody.length).toBeGreaterThan(0);



    for (const item of responseBody)
    {
        expect (item). toHaveProperty 'bookingid');
        expect (typeof item. bookingid).toBe("number");
        expect (item. bookingid). toBeGreaterThan (0);
    }   

})




