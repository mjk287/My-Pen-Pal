class User < ApplicationRecord
  include Rails.application.routes.url_helpers

  has_one :penpal
  has_one :my_penpal, through: :penpal
  has_many :posts
  has_many :comments
  has_one_attached :image
  has_one_attached :song

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

  def getSong
    rails_blob_path(self.song, only_path: true) if self.song.attached?
  end

  def getImage
    rails_blob_path(self.image, only_path: true) if self.image.attached?
  end

  def appear
    ActionCable.server.broadcast "penpal_channel_#{self.my_penpal.id}", { event: "appear" }
  end

  def disappear
    ActionCable.server.broadcast "penpal_channel_#{self.my_penpal.id}", { event: "disappear" }
  end
end
