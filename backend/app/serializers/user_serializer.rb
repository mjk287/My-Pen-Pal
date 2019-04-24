class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :name, :my_penpal

  def my_penpal
    penpal = self.object.my_penpal
    { id: penpal.id, email: penpal.email, name: penpal.name } unless penpal.nil?
  end
end
