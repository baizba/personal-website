const http = require("http");

const port = 8100;

const server = http.createServer((req, res) => {
  // CORS: allow the Angular dev server origin
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Preflight (browser sends OPTIONS before the real POST /chat)
  if (req.method === "OPTIONS") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === "GET" && req.url === "/ready") {
    res.statusCode = 204;
    res.end();
    return;
  }

  if (req.method === "POST" && req.url === "/chat") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(
      JSON.stringify({
        response: "Hello from AI Chat Mock",
      })
    );
    return;
  }

  res.writeHead(404, {
    "Content-Type": "application/json",
  });

  res.end(
    JSON.stringify({
      error: "Not found",
    })
  );
});

server.listen(port, () => {
  console.log(`Local server running at http://localhost:${port}`);
  console.log(`GET endpoint: http://localhost:${port}/ready`);
});
