document.getElementById("moreBtn").addEventListener("click", function() {
    const moreText = document.getElementById("moreText");
    if (moreText.style.display === "none") {
        moreText.style.display = "block";
        this.textContent = "Show less";
    } else {
        moreText.style.display = "none";
        this.textContent = "More about me";
    }
});
