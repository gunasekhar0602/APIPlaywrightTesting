/* 
prerequisities:
Install the required packages:
npm install --save-dev playwright ajv

AJV used for JSON schema validation.
*/




import{test,expect}from'@playwright/test'
import ajv, { Ajv } from 'ajv'

test('Validate JSON Schema',async({request})=>
{
    const response=await request.get('https://mocktarget.apigee.net/json');
    const responsebody=await response.json()
    console.log(responsebody)
    // take the response body from the terminal and paste it in the online schema validation pages
    // now we will get the schema of the JSON body

    const schema={
      type: "object",
      properties: {
        firstName: { type: "string"},
        lastName: {type: "string"},
        city: {type: "string"},
        state: {type: "string"}
      },
      required: ["firstName","lastName","city","state"],
      
  };

  // for validating schema we can use ajv class
  // so we can create a object for ajv class
  const ajv=new Ajv();
  // for this object to compile schema we have to call a method call compile
  // in compile method pass the schema
  const validate=ajv.compile(schema) // ajv.compile will returns a validator function and we can store in a variable

  // calling the function
  const isvalid=validate(responsebody) // validate(data) checks if the response matches the schema
  expect(isvalid).toBeTruthy();


})


