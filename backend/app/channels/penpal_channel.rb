class PenpalChannel < ApplicationCable::Channel
  def subscribed
    stream_from "penpal_channel_#{params[:room]}"
    ActionCable.server.broadcast "penpal_channel_#{channel_ids[0]}_#{channel_ids[1]}", { isOnline: true }
  end
end
