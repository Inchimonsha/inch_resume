require 'sinatra'
require 'json'
require_relative 'controllers/chat_controller'

class MyApp < Sinatra::Base
    set :port, 4568

    use ChatController

    run! if __FILE__ == $0
end
