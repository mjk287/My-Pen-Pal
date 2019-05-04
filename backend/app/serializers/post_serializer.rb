class PostSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :title, :content, :image, :user_id

  def image
    rails_blob_path(object.user.image, only_path: true) if object.user.image.attached?
  end
end
