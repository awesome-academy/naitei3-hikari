class CreateMedia < ActiveRecord::Migration[6.0]
  def change
    create_table :media do |t|
      t.references :category, null: false, foreign_key: true
      t.integer :object_id
      t.string :object_type

      t.timestamps
    end
  end
end
