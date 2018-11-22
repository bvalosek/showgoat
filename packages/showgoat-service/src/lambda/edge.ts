import { CloudFrontRequestHandler, CloudFrontResponseHandler, CloudFrontResponse } from 'aws-lambda';

const CACHE_FOREVER = 'public, max-age=31536000, immutable';

export const onViewerRequest: CloudFrontRequestHandler = async (event) => {
  const { request } = event.Records[0].cf;
  const host = request.headers.host[0].value;

  // 301 redirect for www subdomain

  if (host.match(/^www\./)) {
    const rewrite = host.replace(/^www\./, '');
    return {
      status: '301',
      headers: {
        location: [ { key: 'Location', value: `https://${rewrite}` } ]
      }
    };
  }

  return request;
};

export const onOriginResponse: CloudFrontResponseHandler = async (event) =>
{
  const { request, response } = event.Records[0].cf;
  const { uri } = request;

  setCacheHeaders(uri, response);

  return response;
};

const setCacheHeaders = (uri: string, response: CloudFrontResponse): void =>
{
  let value: string = '';

  // all of static is cached

  if (uri.startsWith('/static/')) {
    value = CACHE_FOREVER;
  }
  else {
    value = 'public, max-age=0, must-revalidate';
  }

  response.headers['cache-control'] = [ {
    key: 'Cache-Control',
    value,
  } ];

  console.log(`uri=${uri}, cache-control=${value}`);
}