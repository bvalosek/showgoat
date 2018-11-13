import { CloudFrontRequestHandler } from 'aws-lambda';

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
