// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function () {
    var _a, _b, _c;
    // Function to generate the resume content and display it
    (_a = document.getElementById('generate-resume')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var experience = document.getElementById('experience').value;
        if (name && email && experience) {
            var resumeContent = "\n                <h2>".concat(name, "'s Resume</h2>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Experience:</strong></p>\n                <p>").concat(experience, "</p>\n            ");
            document.getElementById('resume-content').innerHTML = resumeContent;
            document.getElementById('resume-result').classList.remove('hidden');
        }
        else {
            alert("Please fill in all fields.");
        }
    });
    // Function to handle PDF download
    (_b = document.getElementById('download-pdf')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var resumeContent = document.getElementById('resume-content').innerHTML;
        // Create a Blob from the resume content (HTML)
        var blob = new Blob([resumeContent], { type: 'text/html' });
        var url = URL.createObjectURL(blob);
        // Create a download link
        var downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'resume.html';
        downloadLink.click();
        // Show the unique "shareable" link (which is actually a local blob link)
        var shareLink = document.getElementById('share-link');
        shareLink.value = url;
        shareLink.classList.remove('hidden');
    });
    // Function to copy the generated link
    (_c = document.getElementById('copy-link')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
        var shareLink = document.getElementById('share-link');
        shareLink.select();
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    });
});
