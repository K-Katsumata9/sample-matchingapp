class CreateReactions < ActiveRecord::Migration[7.1]
  def change
    create_table :reactions do |t|
			t.integer :status, null: false
			t.references :to_user, null: false, foreign_key: { to_table: :users }
      t.references :from_user, null: false, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
