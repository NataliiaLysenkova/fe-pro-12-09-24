// Додаткова задача 
// Створіть клас Book, який представляє книгу з наступними властивостями:
// Властивості:
// title (назва книги)
// author (автор)
// year (рік публікації)
// genres (масив жанрів)
// ratings (масив чисел, що представляють оцінки читачів)
// Геттери та сеттери:
// Геттер averageRating — обчислює та повертає середню оцінку книги.
// Сеттер для year — дозволяє встановити рік публікації з перевіркою, що рік не в майбутньому.
// Сеттер для genres — дозволяє додавати нові жанри, але не допускає дублювання жанрів.
// Методи:
// addRating(rating) — додає оцінку до масиву ratings, перевіряючи, що оцінка є числом від 1 до 5.
// getInfo() — повертає рядок з інформацією про книгу у форматі: "Назва: ..., Автор: ..., Рік: ..., Жанри: ..."..

class Book {
    constructor(title, author, year, genres = [], ratings = []) {
        this._title = title;
        this._author = author;
        this._year = year; 
        this._genres = [];
        this._ratings = [];

        this.addGenres(genres); 
        this.addRatings(ratings); 
    }

    getInfo() {
        return `Назва: ${this._title}, Автор: ${this._author}, Рік: ${this._year}, Жанри: ${this._genres.join(', ')}`;
    }

    addRating(rating) {
        if (rating >= 1 && rating <= 5) {
            this._ratings.push(rating);
        }
    }

    addRatings(ratings) {
        ratings.forEach(rating => this.addRating(rating));
    }

    get averageRating() {
        if (this._ratings.length === 0) return 0;
        const sum = this._ratings.reduce((acc, curr) => acc + curr, 0);
        return Math.round(sum / this._ratings.length);
    }

    set year(newYear) {
        const currentYear = new Date().getFullYear(); 
        if (newYear <= currentYear) {
            this._year = newYear;
        } else {
            console.error("Рік публікації не може бути в майбутньому.");
        }
    }

    addGenres(genres) {
        genres.forEach(genre => {
            if (!this._genres.includes(genre)) {
                this._genres.push(genre);
            }
        });
    }

    static createBookFromCSV(csvString) {
        const [title, author, year, ...genres] = csvString.split(",").map(item => item.trim());
        return new Book(title, author, parseInt(year), genres);
    }
}

let book = new Book("Великий Гетсбі", "Френсіс Скотт Фіцджеральд", 1925, ["Роман", "Класика"]);
book.addRating(5);
book.addRating(4);
console.log(book.getInfo());
console.log(`Середня оцінка: ${book.averageRating}`);

// Ще задачі на робботу з класами
// Клас User
// Властивості:
// username (ім'я користувача)
// password (пароль користувача)
// role (роль користувача, наприклад, "admin", "editor", "viewer")
// isActive (логічне значення, чи активний користувач)
// Методи:
// login(password) — перевіряє, чи збігається введений пароль з паролем користувача. Якщо так, виводить повідомлення про успішний вхід; якщо ні, виводить повідомлення про помилку.
// logout() — виводить повідомлення про вихід користувача.
// Геттер info — повертає рядок з інформацією про користувача у форматі: "Користувач: ..., Роль: ..., Статус: ...".

class User {
    constructor(username, password, roles = ["admin", "editor", "viewer"], isActive = true) {
        this._username = username;
        this._password = password;
        this._roles = roles; 
        this._isActive = isActive; 
    }

    login(password) {
        if (this._isActive) { 
            if (password === this._password) {
                console.log(`Вхід виконано успішно!`);
            } else {
                console.log(`Помилка! Пароль невірний.`);
            }
        } 
    }

    logout() {
        if (this._isActive) {
            console.log(`Користувач ${this._username} вийшов.`);
        } 
    }

    get info() {
        return `Користувач: ${this._username}, Ролі: ${this._roles.join(', ')}, Статус: ${this._isActive ? 'Активний' : 'Неактивний'}`;
    }

    setActive(status) {
        this._isActive = status;
    }
}

const user = new User("ivan123", "secretPassword", ["admin", "editor"]);
console.log(user.info); 
user.login("wrongPassword");
user.login("secretPassword");
user.logout(); 
 
// Клас UserManager
// Властивості:
// users (масив користувачів)
// Методи:
// addUser(user) — додає користувача до системи. Перевіряє, чи користувач з таким username вже існує; якщо так, виводить повідомлення про помилку.
// removeUser(username) — видаляє користувача з системи за іменем користувача.
// getUser(username) — повертає користувача з системи за іменем користувача.
// getActiveUsers() — повертає масив активних користувачів.
// authenticate(username, password) — перевіряє, чи існує користувач з таким іменем та паролем; якщо так, повертає користувача; якщо ні, виводить повідомлення про помилку.
// updateUserRole(username, newRole) — оновлює роль користувача, перевіряючи, що нова роль є однією з дозволених ("admin", "editor", "viewer").

class UserManager {
    constructor(users = []) {
        this._users = users; 
    }

    addUser(user) {
        if (this._users.some(existingUser => existingUser._username === user._username)) {
            console.log(`Помилка: користувач з таким username "${user._username}" вже існує!`);
        } else {
            this._users.push(user);
            console.log(`Користувача "${user._username}" додано до системи.`);
        }
    }

    removeUser(username) {
        const index = this._users.findIndex(user => user._username === username);
        if (index !== -1) {
            this._users.splice(index, 1);
            console.log(`Користувача "${username}" видалено з системи.`);
        } else {
            console.log(`Помилка: користувача з іменем "${username}" не знайдено.`);
        }
    }

    getUser(username) {
        const user = this._users.find(user => user._username === username);
        if (user) {
            return user;
        } else {
            console.log(`Користувача з іменем "${username}" не знайдено.`);
            return null;
        }
    }

    getActiveUsers() {
        return this._users.filter(user => user._isActive);
    }

    authenticate(username, password) {
        const user = this.getUser(username);
        if (user && password === user._password) {
            console.log(`Аутентифікація успішна для користувача "${username}".`);
            return user;
        } else {
            console.log(`Помилка: невірне ім'я користувача або пароль.`);
            return null;
        }
    }

    updateUserRole(username, newRole) {
        const allowedRoles = ["admin", "editor", "viewer"];
        const user = this.getUser(username);
        if (user) {
            if (allowedRoles.includes(newRole)) {
                user._roles.push(newRole);
                console.log(`Роль користувача "${username}" оновлено на "${newRole}".`);
            } else {
                console.log(`Помилка: роль "${newRole}" не є дозволеною.`);
            }
        }
    }
}

let userManager = new UserManager();
let user1 = new User("ivan123", "secretPassword", ["admin"], true);
let user2 = new User("petro321", "password123", ["editor"], true);

userManager.addUser(user1);
userManager.addUser(user2);
console.log(userManager.addUser(user1)); // Спроба додати того ж користувача

console.log(userManager.getUser("ivan123")); // Отримати користувача
console.log(userManager.getActiveUsers()); // Отримати активних користувачів

userManager.authenticate("ivan123", "secretPassword"); // Успішна аутентифікація
userManager.authenticate("ivan123", "wrongPassword"); // Невірний пароль

userManager.updateUserRole("ivan123", "editor"); // Оновлення ролі
userManager.removeUser("petro321"); // Видалення користувача
console.log(userManager.getActiveUsers()); // Отримати активних користувачів
