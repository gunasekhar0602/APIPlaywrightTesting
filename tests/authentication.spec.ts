/* 
1) No Auth(public API)
2) Basic Auth/ Preemtive auth(user name and password)
3) Bearer token
4) API Key Authentication
*/


// 1) No Auth(public API)
// No Authentication is required for public API

import{test,expect,request} from'@playwright/test'
test("public API No Auth", async({request})=>
{
    // https://jsonplaceholder.typicode.com/posts/1 - path parameter
    // Getting response
    const response=await request.get("https://jsonplaceholder.typicode.com/posts/1");
    
    // Assertion of response
    expect(response.ok()).toBeTruthy();
    
    // capturing response and printing response
    const responsebody=await response.json()
    console.log(responsebody);
})






// 2) Basic Auth (Need to pass the username and password)

test.only("Basic Authentication",async({request})=>
{
    // we need to pass the user name and password inside the header
    // Every header is having key and value pair
    // Autherization is key
    // Buffer is class and from is method in buffer
    // toString is method.
    // base64 is parameter
    const response=await request.get("https://httpbin.org/basic-auth/user/pass",{
        headers:{
                Authorization:"Basic "+ Buffer.from("user:pass").toString('base64')
                }
    });
    expect(response.ok).toBeTruthy();
    expect(response.status()).toBe(200);
})












// 3) Token Authentication

test("Token Authentication1",async({request})=>
{
     const bearerToken="ghp_VDjmWcQUBwTCIukSJSOXvghDgeA1jGd2vhxFo"
    // we need to pass the user name and password inside the header
    const response=await request.get("https://api.github.com/user/repos",{
        headers:{
                Authorization:`Bearer ${bearerToken}`
                }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
})


//2 returns user information

test("Token Authentication2",async({request})=>
{
     const bearerToken="ghp_VDjmWcQUBwTCIukSJSOXvghDgeA1jGd2vhxFo"
    // we need to pass the user name and password inside the header
    const response=await request.get("https://api.github.com/user",{
        headers:{
                Authorization:`Bearer ${bearerToken}`
                }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    console.log(await response.json());
})



// 4) API key authentication

test("API key Auth1",async({request})=>
{
    const response=await request.get("https://api.openweathermap.org/data/2.5/weather",
        {
            params:
            {
                q:"Hyderabad",
                appid:"fe9c5cddb7e01d747b4611c3fc9eaf2c"
            }
        }
    );
    expect(response.ok).toBeTruthy()
    expect(response.status()).toBe(200)
    console.log(await response.json())
})

