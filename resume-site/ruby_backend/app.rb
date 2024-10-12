require 'sinatra'
require 'json'
require_relative 'controllers/chat_controller'

# Enable CORS
use Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: [:get, :post, :options]
    end
  end
  
class MyApp < Sinatra::Base
    set :port, 4568

    use ChatController  # Use the ChatController that handles /chat-bot endpoint

    run! if __FILE__ == $0
end