document.addEventListener("DOMContentLoaded", function() {
    const commentList = document.getElementById("comment-list");
    const commentForm = document.getElementById("comment-form");
    const commentText = document.getElementById("comment-text");

    // Sample comments (you can replace this with dynamic data from a database)
    const comments = [
        "This is the first comment.",
        "Nice thread!",
        "I have a question about this topic.",
    ];

    // Function to display comments
    function displayComments() {
        commentList.innerHTML = "";
        comments.forEach(function(comment) {
            const li = document.createElement("li");
            li.textContent = comment;
            commentList.appendChild(li);
        });
    }

    displayComments();

    // Event listener for adding new comments
    commentForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const newComment = commentText.value.trim();
        if (newComment !== "") {
            comments.push(newComment);
            commentText.value = "";
            displayComments();
        }
    });
});
