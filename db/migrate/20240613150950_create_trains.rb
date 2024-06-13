class CreateTrains < ActiveRecord::Migration[7.1]
  def change
    create_table :trains do |t|
      t.string :name
      t.boolean :wrecked

      t.timestamps
    end
  end
end
