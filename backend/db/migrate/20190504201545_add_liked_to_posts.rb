class AddLikedToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :liked, :boolean, default: false
  end
end
