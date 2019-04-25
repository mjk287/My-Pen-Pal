class User < ApplicationRecord
  has_one :penpal
  has_one :my_penpal, through: :penpal
  has_many :posts

  has_secure_password

  def our_posts
    if !!self.my_penpal
      merged_array = self.posts + self.my_penpal.posts
      merged_array.sort_by do |post|
        post.created_at
      end
    else
      self.posts
    end
  end
end
