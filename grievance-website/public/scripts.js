document.getElementById('grievanceForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const Name = formData.get('Name');
    const Email = formData.get('Email');
    const Subject = formData.get('Subject');
    const Description = formData.get('Description');

    console.log(Name, Email, Subject, Description);


    try {
        const response = await fetch('/submit-grievance', {
            method: 'POST',
            body: formData,
        });

        const result = await response.json();

        document.getElementById('message').textContent = result.message;
    } catch (error) {
        document.getElementById('message').textContent = 'Error submitting grievance.';
    }
});
