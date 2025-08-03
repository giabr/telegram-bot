// index.js
export default {
  async fetch(request) {
    const url = new URL(request.url);
    const targetUrl = `https://telegram-bot.giabusyra.workers.dev${url.pathname}`;
    const res = await fetch(targetUrl, {
      method: request.method,
      headers: request.headers,
      body: request.body,
    });
    return res;
  },
};
