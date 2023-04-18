import React, { useState } from 'react';

const User = () => {
    // Стан для збереження даних форми
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        website: ''
    });

    // Обробник зміни полів форми
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // Обробник подачі форми
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Відправка POST-запиту на сервер
            const response = await fetch('http://jsonplaceholder.typicode.com/users', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error('Помилка при створенні користувача');
            }
            alert('Новий користувач успішно створений!');
            // Очистка форми після успішного створення користувача
            setFormData({
                name: '',
                username: '',
                email: '',
                phone: '',
                website: ''
            });
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div>
            <h2>Створення нового користувача</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Ім'я:
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Логін:
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Електронна пошта:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Телефон:
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </label>
                <label>
                    Веб-сайт:
                    <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                    />
                </label>
                <button type="submit">Створити</button>
            </form>
        </div>
    );
};


export default User;