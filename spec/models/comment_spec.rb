require 'rails_helper'

RSpec.describe Comment, type: :model do
  describe "associations" do
    it {is_expected.to belong_to(:object)}
    it {is_expected.to belong_to(:parent).class_name("Comment").with_foreign_key(:parent_id).optional.inverse_of(:object)}
  end
end
