get '/' do
  erb :index
end
 
post '/grandma' do
  if params[:user_input] == params[:user_input].upcase
    return "No not since 1938!"
  else
    return "Speak up sunny!"
  end
end
