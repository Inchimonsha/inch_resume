require 'sinatra'
require 'json'
require 'rack/cors'
require 'open3'

# Define the ChatController class properly
class ChatController < Sinatra::Base
  post '/inch_resume/chat-bot' do
    request.body.rewind
    data = JSON.parse(request.body.read)
    user_input = data['message']

    # Run the Python script with Open3
    stdout, stderr, status = Open3.capture3("python resume-site/backend/app.py #{user_input}")

    content_type :json
    if status.success?
      { result: stdout.strip }.to_json  # Return the output from the Python script
    else
      { error: stderr.strip }.to_json  # Return any errors from the script
    end
  end
end

# require 'sinatra'
# require 'json'
# require 'rack/cors'

# use Rack::Cors do
#   allow do
#     origins '*'  # Adjust this for production (e.g., specify your frontend URL)
#     resource '*',
#       headers: :any,
#       methods: [:get, :post]
#   end
# end

# class ChatController < Sinatra::Base
#   post '/api/chat' do
#     request.body.rewind
#     data = JSON.parse(request.body.read)

#     user_message = data['message']
#     response_message = process_message(user_message)

#     content_type :json
#     { response: response_message }.to_json
#   end

#   private

#   def process_message(message)
#     "Вы сказали: #{message}"
#   end
# end