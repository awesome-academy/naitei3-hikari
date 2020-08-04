require 'rails_helper'

RSpec.describe Stream, type: :model do
  describe "associations" do
    it {is_expected.to belong_to(:user)}
    it {is_expected.to have_many(:media)}
    it {is_expected.to have_many(:categories)}
    it {is_expected.to have_many(:comments)}
  end
end
