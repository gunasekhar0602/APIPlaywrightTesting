/* 
1) No Auth(public API)
2) Basic Auth/ Preemtive auth(user name and password)
3) Bearer token
4) API Key Authentication
*/




import{test,expect, request} from'@playwright/test'

// 1) No Auth

test("public API No Auth", async({request})=>
{
    const response=await request.get("https://jsonplaceholder.typicode.com/posts/1");
    
    expect(response.ok()).toBeTruthy();

    const responsebody=await response.json()
    console.log(responsebody);
})







// 2) Basic Auth (Need to pass the username and password)

test("Basic Authentication",async({request})=>
{
    // we need to pass the user name and password inside the header
    const response=await request.get("https://httpbin.org/basic-auth/user/pass",{
        headers:{
                Authorization:"Basic "+Buffer.from("user:pass").tostring('base64')
                }
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
})












// 3) Token Authentication
//1
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
    console.log(await response.json())
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
    console.log(await response.json())
})






// 4) API key authentication

