// etUser fetches a user by ID and calls its callback once the user data is fetched.
// getPosts fetches the posts of that user, using the user ID from the previous step.
// getComments fetches comments on the first post retrieved from the previous step.
// Each function nests deeper into the next, leading to callback hell.
  