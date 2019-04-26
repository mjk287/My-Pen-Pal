class PenpalChannel < ApplicationCable::Channel
  def subscribed
    stream_from "penpal_channel_#{params[:room]}"
    ActionCable.server.broadcast "penpal_channel_#{params[:room]}", { isOnline: true }
  end
end
