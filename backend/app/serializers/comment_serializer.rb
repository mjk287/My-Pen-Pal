class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :name

  def name
    self.object.user.name
  end
end
