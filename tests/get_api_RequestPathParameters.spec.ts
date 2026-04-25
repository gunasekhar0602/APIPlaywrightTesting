import{test,expect,Locator} from"@playwright/test"

test.only('getrequest by path parameter',async({request})=>
{
    const bookingId=1;   // we can use this as path parameter

    // sending get request and capturing the response by using path parameter

    // here we are using backtik operator for url and booking id
    // by using backtik operator we can get booking id value

    const response=await request.get(`https://restful-booker.herokuapp.com/booking/${bookingId}`)

    // parse the response and print
    const responsebody=await response.json();
    console.log(responsebody);

    // add assertions
    expect(response.ok()).toBeTruthy;
    expect(response.status()).toBe(200);

})



