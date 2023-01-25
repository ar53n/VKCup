const http = require("http");
const url = require("url");
const fs = require("fs");
const path = require("path");
const db = require("./db.json");

const folderMap = {
  important: "Важное",
  sent: "Отправленные",
  drafts: "Черновики",
  archive: "Архив",
  spam: "Спам",
  trash: "Корзина",
};

const mimeTypeMap = {
  ".css": "text/css",
  ".html": "text/html",
  ".js": "text/javascript",
};

const server = http.createServer((req, res) => {
  // Parse the request URL to get the path and query parameters
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.path.startsWith("/api/")) {
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;

    // Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    // Check the request method and path to handle different operations
    if (req.method === "GET" && path.startsWith("/api/email_list")) {
      // Return a list of users in the response body
      const [, , , folder, letterId] = path.split("/");
      const { filter } = query;
      console.log(letterId);
      if (letterId) {
        let data = Buffer.from(letterId, "base64").toString();
        const [date, email] = data.split(";");
        res.end(
          JSON.stringify(
            db.find(
              (item) =>
                item.author.email === email &&
                item.date === date
            )
          )
        );
      } else {
        res.end(
          JSON.stringify(
            db
              .filter((item) => item.folder === folderMap[folder])
              .sort((a, b) => {
                return new Date(b.date).getTime() - new Date(a.date).getTime();
              })
          )
        );
      }
    } else {
      // Return a 404 Not Found error if the request method and path are not supported
      res.statusCode = 404;
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  } else {
    const parsedPath = path.parse(parsedUrl.pathname);
    const index = parsedPath.base === "" ? "index.html" : "";
    fs.readFile(`${__dirname}${req.url}${index}`, (err, data) => {
      if (err) {
        // If an error occurred, send a 404 status code
        res.writeHead(404);
        res.end();
      } else {
        const mimeType = mimeTypeMap[parsedPath.ext];
        if (mimeType) {
          // Otherwise, send the contents of the file along with the appropriate content type
          res.writeHead(200, { "Content-Type": mimeType });
        }
        res.write(data);
        res.end();
      }
    });
  }
});

// Start the server on port 3000
server.listen(3001, () => {
  console.log("Server running on port 3000");
});
