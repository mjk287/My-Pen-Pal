class User < ApplicationRecord
  has_one :penpal
  has_one :my_penpal, through: :penpal

  has_secure_password
end
