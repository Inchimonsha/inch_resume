require 'sinatra/base'
require 'json'

class ChatController < Sinatra::Base
  post '/api/chat' do
    request.body.rewind
    data = JSON.parse(request.body.read)

    user_message = data['message']
    response_message = process_message(user_message)

    content_type :json
    { response: response_message }.to_json
  end

  private

  def process_message(message)
    "Вы сказали: #{message}"  # Example processing of the message
  end
end
