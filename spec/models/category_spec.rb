require 'rails_helper'

RSpec.describe Category, type: :model do
  describe "associations" do
    it {is_expected.to have_many(:media).dependent(:destroy)}
    it {is_expected.to have_many(:videos).through(:media).source(:object).dependent(:destroy)}
    it {is_expected.to have_many(:streams).through(:media).source(:object).dependent(:destroy)}
    it {is_expected.to have_many(:users).through(:media).source(:object).dependent(:destroy)}
  end

  describe "Should have right order" do
    it "should have 2 categories in correct order" do
      old_category = create(:category, created_at: 1.day.ago)
      new_category = create(:category, created_at: 1.hour.ago)
      Category.lastest.should == [new_category, old_category]
    end
  end
end
