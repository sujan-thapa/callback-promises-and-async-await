function getUser(id, callback) {
    setTimeout(() => {
      console.log("Fetched user");
      callback({ id: id, name: "John" });
    }, 1000);
  }
  
  function getPosts(userId, callback) {
    setTimeout(() => {
      console.log("Fetched posts for user", userId);
      callback(["Post 1", "Post 2"]);
    }, 1000);
  }
  
  function getComments(post, callback) {
    setTimeout(() => {
      console.log("Fetched comments for post", post);
      callback(["Comment 1", "Comment 2"]);
    }, 1000);
  }
  
  // Nesting callbacks to handle async tasks in sequence
  getUser(1, (user) => {
    // console.log(user); // This is the callback function for getUser

    getPosts(user.id, (posts) => {
      getComments(posts[0], (comments) => {
        console.log("Comments on first post:", comments);
        // More nested callbacks if we had further steps...
      });
    });
  });

//   Explanation
// getUser fetches a user by ID and calls its callback once the user data is fetched.
// getPosts fetches the posts of that user, using the user ID from the previous step.
// getComments fetches comments on the first post retrieved from the previous step.
// Each function nests deeper into the next, leading to callback hell.
  