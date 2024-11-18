# Django + React Project

Этот проект демонстрирует интеграцию Django и React.

## Структура проекта
- `mysite/` — серверная часть на Django.
- `react-app/` — клиентская часть на React.

## Требования
- Python 3.10+
- Node.js 16+
- npm или yarn
- Virtualenv (для Django)

---

## Установка

### 1. Установка и запуск Django
1. Перейдите в папку `djangotutorial/`:
   ```bash
   cd djangotutorial/

2. Создайте виртуальное окружение 
   python -m venv venv
   source venv/bin/activate  # Для Windows: venv\Scripts\activate

3. Установите зависимости
   pip install -r requirements.txt

4. Выполните миграции
   python manage.py migrate

5. Запустите сервер
   python manage.py runserver

Django будет доступен по адресу: http://127.0.0.1:8000

### 2. Установка и запуск React
1. Перейдите в папку react-app/
   cd react-app/

2. Установите зависимости
   npm install

3. Запустите сервер разработки
   npm run dev

React будет доступен по адресу: http://localhost:5173 либо с главной страницы Django.


###
На главной странице Django есть кнопка, которая открывает React-приложение.
В React-приложении есть кнопка для возврата на сервер Django.
Для работы необходимо, чтобы было запущено оба проекта одновременно.
