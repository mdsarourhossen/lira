document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // ফর্ম সাবমিট বন্ধ করে

    // ইউজার ইনপুট নেওয়া
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // অনুমোদিত ব্যবহারকারীদের লিস্ট
    const users = [
        { username: "admin", password: "1234" },
        { username: "user1", password: "abcd" },
        { username: "munna", password: "sk" },
        { username: "user2", password: "pass123" }
    ];

    // ইউজার যাচাই
    const validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        alert("Login successful! Redirecting to dashboard...");
        window.location.href = "index.html"; // সফল হলে ড্যাশবোর্ডে নিয়ে যাবে
    } else {
        alert("Invalid username or password. Try again!");
    }
});