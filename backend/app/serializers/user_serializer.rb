class UserSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :id, :email, :name, :my_penpal, :image

  def my_penpal
    penpal = self.object.my_penpal
    { id: penpal.id, email: penpal.email, name: penpal.name, image: penpal.getImage, song: penpal.getSong, online: penpal.online } unless penpal.nil?
  end

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end
end
