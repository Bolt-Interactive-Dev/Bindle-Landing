/*
  Serves the invite page for /invite/<token> without changing the URL.

  _redirects cannot do this. A `/invite/* /vault-invite.html 200` rule is honoured by Pages
  but downgraded to a 308 redirect, which strips the token off the path before the page can
  read it — verified live twice on 2026-09-06, first against /invite and then against
  /vault-invite. Pages Functions run ahead of both _redirects and static asset routing, so
  this is the only layer that can return the page under the original URL.
*/
export async function onRequest(context) {

  const RequestUrl = new URL(context.request.url);

  // Serve the page's bytes while leaving context.request.url — token included — untouched.
  const AssetUrl = new URL(RequestUrl);
  AssetUrl.pathname = "/vault-invite.html";

  const AssetResponse = await context.env.ASSETS.fetch(new Request(AssetUrl, context.request));

  // Rebuild the response so the status is a plain 200 rather than whatever asset routing set.
  return new Response(AssetResponse.body, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate"
    }
  });

}
