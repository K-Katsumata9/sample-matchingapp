class User < ApplicationRecord
  validates name
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
