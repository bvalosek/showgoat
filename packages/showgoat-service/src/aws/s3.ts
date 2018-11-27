import { S3 } from 'aws-sdk';

const PREFIX = process.env.AWS_RESOURCE_PREFIX;

if (!PREFIX) {
  throw new Error('missing AWS_RESOURCE_PREFIX env var');
}

const s3 = new S3();

export async function putObject(key: string, body: string): Promise<void>
{
  const Bucket = `${PREFIX}-content`;

  const params = {
    Bucket,
    Key: key,
    Body: body,
  };

  await s3.putObject(params).promise();
  console.log(`put ${Bucket}/${key}`);
}