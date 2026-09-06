/*
  Serves the invite page for /invite/<token> without changing the URL.

  _redirects cannot do this: Pages honours a `/invite/* /<page>.html 200` rule but downgrades
  it to a 308, stripping the token off the path before the page can read it. Pages Functions
  run ahead of both _redirects and static asset routing, so this is the only layer that can
  hold the original URL.
*/
export async function onRequest(context) {

  const AssetUrl = new URL(context.request.url);

  /*
    Ask for the EXTENSIONLESS path. Pages normalizes /vault-invite.html to /vault-invite with
    a 308, and a 308 carries no body — fetching the .html form here returned an empty page.
  */
  AssetUrl.pathname = "/vault-invite";

  /*
    Build a bare GET rather than copying context.request. Forwarding the caller's conditional
    headers (If-None-Match / If-Modified-Since) would let the asset answer 304, which is also
    a bodyless response.
  */
  const AssetResponse = await context.env.ASSETS.fetch(new Request(AssetUrl, { method: "GET" }));

  // Pass status and headers straight through, so a miss surfaces as itself instead of an empty 200.
  return new Response(AssetResponse.body, {
    status: AssetResponse.status,
    headers: AssetResponse.headers
  });

}
