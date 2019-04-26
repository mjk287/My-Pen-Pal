module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end

    private
      def find_verified_user
        token = request.headers[:HTTP_SEC_WEBSOCKET_PROTOCOL].split(' ').last
        user_id = JWT.decode(token, nil, false)[0]["user_id"]
        if current_user = User.find(user_id)
          current_user
        else
          reject_unauthorized_connection
        end
      end
  end
end
