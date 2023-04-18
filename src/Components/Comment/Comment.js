import React, { useState } from 'react';

const Comment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Формуємо об'єкт з даними коментаря
        const newComment = {
            name,
            email,
            body
        };

        try {
            // Виконуємо постовий запит для створення нового коментаря
            const response = await fetch('http://jsonplaceholder.typicode.com/comments', {
                method: 'POST',
                body: JSON.stringify(newComment),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (response.ok) {
                alert('Коментар успішно створено!');
                setName('');
                setEmail('');
                setBody('');
            } else {
                alert('Помилка при створенні коментаря');
            }
        } catch (error) {
            console.error('Помилка при виконанні запиту:', error);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Ім'я:
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
                Email:
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label>
                Коментар:
                <textarea value={body} onChange={(e) => setBody(e.target.value)} />
            </label>
            <button type="submit">Створити коментар</button>
        </form>
    );
};

export default Comment;
