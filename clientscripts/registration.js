BASE_URL = '/registration'

class UserApi {
    
    static create(user) {
      return fetch(BASE_URL, {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
    }
  
}
  
function onCreateUser() {
    const $username = document.querySelector('#username')
    const $password = document.querySelector('#password')
    const $password2 = document.querySelector('#password2')
  
    if ($password.value && $username.value && $password2.value) {
      const newUser = {
        username: $username.value,
        password: $password.value,
        password2: $password2.value
      }
      UserApi.create(newUser);
      
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#createUser').addEventListener('click', onCreateUser);
})