
function loading(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function doLater() {
  const usersData = localStorage.getItem('users')
  if (usersData !== null) {
    const usersArray = JSON.parse(usersData)
    console.log("Нашли данные", usersArray);
    returnCards(usersArray)
    return;
  }
  console.log("Пусто..")
  const message = document.getElementById("status-message")
  message.textContent = "Данные загружаются"

  try {
    await loading(3000);
    const response = await fetch('async.json');

    if (!response.ok) {
      throw new Error("Файла не найден..")
    }

    console.log("Данные найдены")
    const data = await response.json();
    localStorage.setItem('users', JSON.stringify(data));
    message.textContent = '';
    returnCards(data)

  }catch(error) {
    console.error('Данные не найдены')
    message.textContent = "Ошибка при загрузке данных";
  }
}

function returnCards(cardsArray) {
  console.log(cardsArray)
  const container = document.getElementById('users-container')
  container.innerHTML = ""

  cardsArray.forEach(user => {
    const card = document.createElement('div')
    card.classList.add('user-card');
    card.innerHTML = `
    <p class = "user-card__name"> имя: ${user.name}</p>
    <p class = "user-card__surname"> фамилия: ${user.surname}</p>
    <p class = "user-card__age"> возраст: ${user.age}</p>
    <p class = "user-card__email"> почта: ${user.email}</p>
    <button class = "user-card__delete-btn">X</button>
    `;

    const deleteButton = card.querySelector('.user-card__delete-btn');
    deleteButton.addEventListener('click', () => {
      const newCardsArray = cardsArray.filter(item => item.id !== user.id);

      localStorage.setItem('users', JSON.stringify(newCardsArray));

      returnCards(newCardsArray)
    })

    container.appendChild(card)
  });
}


const deleteBtnAll = document.getElementById('clear-all-btn')
const restoreBtnAll = document.getElementById('restore-all-btn')

deleteBtnAll.addEventListener('click', () => {
  const emptyArray = [];
  localStorage.setItem('users', JSON.stringify(emptyArray));
  returnCards(emptyArray);
})

restoreBtnAll.addEventListener('click', async () => {
  const currentUsersData = localStorage.getItem('users')
  const currentUsers = JSON.parse(currentUsersData) || [];

  const response = await fetch('async.json');
  
  const originalUsers = await response.json();

  if (currentUsers.length === originalUsers.length) {
    alert("Все пользователи и так на экране!")
  }
  else {
    localStorage.setItem('users', JSON.stringify(originalUsers))
    returnCards(originalUsers);
  }


})


