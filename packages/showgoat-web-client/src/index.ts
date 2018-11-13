import { GetStatusAPIResponse } from '@showgoat/showgoat-common';

(async () => {

  const resp = await fetch(`https://api.showgoat.net/status`);

  const body: GetStatusAPIResponse = await resp.json();

  console.log(body);

})();



