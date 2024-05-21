class User < ApplicationRecord
  validates :name, presence: true
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

	enum gender: { man: 0, woman: 1 }
end
