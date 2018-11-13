import { StatusAPIResponse } from '@showgoat/showgoat-common';

(async () => {

  const resp = await fetch(`https://api.showgoat.net/status`);

  const body: StatusAPIResponse = await resp.json();

  console.log(body);

})();



