class PenpalChannel < ApplicationCable::Channel
  def subscribed
    stream_from "penpal_channel_#{params[:room]}"
    current_user.appear
  end
end
