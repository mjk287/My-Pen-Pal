class CreatePenpals < ActiveRecord::Migration[5.2]
  def change
    create_table :penpals do |t|
      t.references :user, foreign_key: true
      t.references :my_penpal

      t.timestamps
    end

    add_foreign_key :penpals, :users, column: :my_penpal_id
  end

end
