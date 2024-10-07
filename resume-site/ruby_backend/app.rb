require 'sinatra'
require 'json'
require_relative 'controllers/chat_controller'

class MyApp < Sinatra::Base
    # Set a different port if needed
    set :port, 4568  # Change to your desired port

    # Здесь вы можете определить маршруты или использовать контроллеры
    use ChatController

    # Запуск сервера
    run! if __FILE__ == $0
end
