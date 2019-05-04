class CommentSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :content, :name, :image

  def name
    self.object.user.name
  end

  def image
    rails_blob_path(object.user.image, only_path: true) if object.user.image.attached?
  end
end
