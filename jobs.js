document.addEventListener('DOMContentLoaded', () => {
    fetch('http://localhost:5000/jobs')  // Backend API endpoint
        .then(response => response.json())
        .then(data => {
            const jobList = document.getElementById('job-list');
            data.forEach(job => {
                const jobDiv = document.createElement('div');
                jobDiv.classList.add('job');
                jobDiv.innerHTML = `
                    <h3>${job.title}</h3>
                    <p>Company: ${job.company}</p>
                    <p>Location: ${job.location}</p>
                    <a href="apply.html?jobId=${job._id}" class="button">Apply</a>
                `;
                jobList.appendChild(jobDiv);
            });
        })
        .catch(error => console.error('Error fetching jobs:', error));
});
