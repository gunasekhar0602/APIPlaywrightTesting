import{test,expect,Locator}from'@playwright/test'
test('getrequest by query parameter',async({request})=>
{
    const firstname="Jim";   // we can use this as path parameter
    const lastname="Brown"

    // sending get request and capturing the response by using query parameter
    const response=await request.get("https://restful-booker.herokuapp.com/booking",{params:{firstname,lastname}})

    // parse the response and print

    const responsebody=await response.json();
    console.log(responsebody);


    // add assertions
    expect(response.ok()).toBeTruthy;
    expect(response.status()).toBe(200);
    

    // response should not be empty
    expect(responsebody.length).toBeGreaterThan(0);

    for(const item of responsebody)
    {
        expect(item).toHaveProperty("bookingid");
        expect(typeof item.bookingid).toBe("number");
    }
})