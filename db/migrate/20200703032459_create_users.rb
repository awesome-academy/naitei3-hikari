class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.text :session_token
      t.string :email
      t.date :date_of_birth
      t.integer :role, default: 0

      t.timestamps
    end
  end
end
