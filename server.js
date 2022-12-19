const http = require("http");
const url = require("url");
const db = require("./db.json");

const folderMap = {
  important: "Важное",
  sent: "Отправленные",
  drafts: "Черновики",
  archive: "Архив",
  spam: "Спам",
  trash: "Корзина",
};

const server = http.createServer((req, res) => {
  // Parse the request URL to get the path and query parameters
  const parsedUrl = url.parse(req.url, true);
  const path = parsedUrl.pathname;
  const query = parsedUrl.query;
  console.log(query, path);

  // Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  // Check the request method and path to handle different operations
  if (req.method === "GET" && path === "/api/email_list") {
    // Return a list of users in the response body
    const { folder } = query;
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
  //    else if (req.method === "POST" && path === "/users") {
  //     // Add a new user to the list and return the updated list in the response body
  //     const user = req.body;
  //     users.push(user);
  //     res.end(JSON.stringify(users));
  //   } else if (req.method === "PUT" && path === "/users/:id") {
  //     // Update the user with the specified ID and return the updated user in the response body
  //     const userId = query.id;
  //     const updatedUser = req.body;
  //     users = users.map((user) => {
  //       if (user.id === userId) {
  //         return { ...user, ...updatedUser };
  //       }
  //       return user;
  //     });
  //     res.end(JSON.stringify(updatedUser));
  //   } else if (req.method === "DELETE" && path === "/users/:id") {
  //     // Delete the user with the specified ID and return the deleted user in the response body
  //     const userId = query.id;
  //     const deletedUser = users.find((user) => user.id === userId);
  //     users = users.filter((user) => user.id !== userId);
  //     res.end(JSON.stringify(deletedUser));
  //   }
  else {
    // Return a 404 Not Found error if the request method and path are not supported
    res.statusCode = 404;
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

// Start the server on port 3000
server.listen(3001, () => {
  console.log("Server running on port 3000");
});
