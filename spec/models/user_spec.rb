require 'rails_helper'

RSpec.describe User, type: :model do
  describe "Acts as paranoid" do
    it { is_expected.to act_as_paranoid }
  end

  describe "Enum" do
    it { should define_enum_for(:role).with_values(
      user: 0,
      admin: 1
      )
  }
  end

  describe "Associations" do
    it {is_expected.to have_one(:stream)}
    it {is_expected.to have_many(:media)}
    it {is_expected.to have_many(:categories)}
    it {is_expected.to have_many(:comments)}
    it {is_expected.to have_many(:followees).class_name("Following")}
    it {is_expected.to have_many(:followers)}
  end

  describe "Has secure password" do
    it { should have_secure_password }
  end

  describe "Should have right order" do
    it "should have 2 users in correct order" do
      old_user = create(:user, created_at: 1.day.ago)
      new_user = create(:user, created_at: 1.hour.ago)
      User.lastest.should == [new_user, old_user]
    end
  end

  describe "Validate the uniqueness of username" do
    let(:user) {user = create(:user)}

    it { should validate_uniqueness_of(:username) }
  end

  describe "Find following by id" do
    let(:user) {user = create(:user)}

    it "should return user object by id" do
      User.find_following(user.id).should == user
    end
  end
end
