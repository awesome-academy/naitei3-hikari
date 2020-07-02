class CreateComments < ActiveRecord::Migration[6.0]
  def change
    create_table :comments do |t|
      t.text :content
      t.boolean :from_channel
      t.integer :parent_id
      t.integer :object_id
      t.string :object_type

      t.timestamps
    end
  end
end
