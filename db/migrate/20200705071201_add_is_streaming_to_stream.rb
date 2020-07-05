class AddIsStreamingToStream < ActiveRecord::Migration[6.0]
  def change
    add_column :streams, :is_streaming, :boolean
  end
end
