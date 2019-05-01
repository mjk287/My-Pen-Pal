class PenpalChannel < ApplicationCable::Channel
  def subscribed
    stream_from "penpal_channel_#{params[:room]}"
    current_user.appear
  end

  def unsubscribed
    current_user.disappear
  end

  def receive(data)
    ActionCable.server.broadcast "penpal_channel_#{current_user.my_penpal.id}", data
  end

  private

  # def require_penpal
  #
  # end
end
