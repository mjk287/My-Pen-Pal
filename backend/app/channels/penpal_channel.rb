class PenpalChannel < ApplicationCable::Channel
  def subscribed
    stream_from "penpal_channel_#{params[:room]}"
    current_user.appear
  end

  def receive(data)
    ActionCable.server.broadcast "penpal_channel_#{current_user.my_penpal.id}", data
  end
end
