// Wrap the entire script in a DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        const dataContainer = document.getElementById('api-data');

        try {
            const response = await fetch(apiUrl);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const users = await response.json();

            dataContainer.innerHTML = '';

            const userList = document.createElement('ul');
            // userList.classList.add('list-disc', 'pl-5', 'space-y-2');

            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                // listItem.classList.add('text-gray-700');
                userList.appendChild(listItem);
            });

            dataContainer.appendChild(userList);

        } catch (error) {
            // In the catch block, clear the existing content and display an error message
            dataContainer.innerHTML = '';
            dataContainer.textContent = 'Failed to load user data.';
            // dataContainer.style.color = '#dc3545';
            // console.error('Error fetching user data:', error);
        }
    }

    fetchUserData();
});