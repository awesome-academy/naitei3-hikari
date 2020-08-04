require 'rails_helper'

RSpec.describe Medium, type: :model do
  describe "associations" do
    it {is_expected.to belong_to :category}
    it {is_expected.to belong_to :object}
  end
end
