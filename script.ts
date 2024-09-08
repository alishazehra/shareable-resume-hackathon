// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Function to generate the resume content and display it
    document.getElementById('generate-resume')?.addEventListener('click', () => {
        const name = (document.getElementById('name') as HTMLInputElement).value;
        const email = (document.getElementById('email') as HTMLInputElement).value;
        const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

        if (name && email && experience) {
            const resumeContent = `
                <h2>${name}'s Resume</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Experience:</strong></p>
                <p>${experience}</p>
            `;

            document.getElementById('resume-content')!.innerHTML = resumeContent;
            document.getElementById('resume-result')!.classList.remove('hidden');
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Function to handle PDF download
    document.getElementById('download-pdf')?.addEventListener('click', () => {
        const resumeContent = document.getElementById('resume-content')!.innerHTML;

        // Create a Blob from the resume content (HTML)
        const blob = new Blob([resumeContent], { type: 'text/html' });
        const url = URL.createObjectURL(blob);

        // Create a download link
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'resume.html';
        downloadLink.click();

        // Show the unique "shareable" link (which is actually a local blob link)
        const shareLink = document.getElementById('share-link') as HTMLInputElement;
        shareLink.value = url;
        shareLink.classList.remove('hidden');
    });

    // Function to copy the generated link
    document.getElementById('copy-link')?.addEventListener('click',() => {
        const shareLink = document.getElementById('share-link') as HTMLInputElement;
        shareLink.select();
        document.execCommand('copy');
        alert('Link copied to clipboard!');
    });
});

    