import { APIGatewayProxyResult, APIGatewayProxyHandler } from 'aws-lambda';

/** a function that handles the api gateway event and returns the response */
type APIHandler<T extends object> = (APIGatewayProxyEvent) => Promise<T>;


/** create the api gateway response from a response object  */
function createResponse (body: object | null, statusCode: number = 200): APIGatewayProxyResult 
{
  return {
    statusCode,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(body)
  };
}

/** wrap a simple handler function and return a proper API gateway proxy handler */
export function wrapAPI<T extends object>(handler: APIHandler<T>): APIGatewayProxyHandler
{
  return async (event) => {
    try {
      const resp = await handler(event);
      return createResponse(resp || null, 200);
    }
    catch (err) {
      console.log(err);
      return createResponse({ message: 'internal error' }, 500);
    }
  }
}
