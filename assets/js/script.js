(() => {
    const apiUrl = 'https://randomuser.me/api/?results=10';

    const fetchUserData = async () => {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayUsers(data.results);
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.getElementById('user-data').innerHTML = 'Error fetching user data.';
    }
    };

    const displayUsers = (users) => {
    const userDataDiv = document.getElementById('user-data');
    userDataDiv.innerHTML = ''; 

    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'user-card'; 

        const userImage = document.createElement('img');
        userImage.src = user.picture.large;
        userImage.alt = `${user.name.first} ${user.name.last}`;

        const userName = document.createElement('p');
        userName.textContent = `${user.name.first} ${user.name.last}`;

        const userEmail = document.createElement('p');
        userEmail.textContent = user.email;

        const userPhone = document.createElement('p');
        userPhone.textContent = `Tel: ${user.phone}`;

        userCard.appendChild(userImage);
        userCard.appendChild(userName);
        userCard.appendChild(userEmail);
        userCard.appendChild(userPhone);
        userDataDiv.appendChild(userCard);
    });
    };

    fetchUserData();
})();