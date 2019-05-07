class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :content, :image, :user_id, :liked, :pic, :voice

  def image
    rails_blob_path(object.user.image, only_path: true) if object.user.image.attached?
  end

  def pic
    rails_blob_path(object.pic, only_path: true) if object.pic.attached?
  end

  def voice
    rails_blob_path(object.voice, only_path: true) if object.voice.attached?
  end
end
