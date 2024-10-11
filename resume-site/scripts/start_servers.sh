#!/bin/bash

# Запуск Rails API
cd my-rails-api
rails server -p 3001 &

# Запуск React приложения
cd ../my-react-app
npm start &

# Запуск Python чат-бота
cd ../my-python-bot
python app.py &

# Ожидание завершения всех процессов
wait

# Не забудьте сделать скрипт исполняемым:
# chmod +x start_servers.sh

# Теперь вы можете запустить все три сервиса одной командой:
# ./start_servers.sh