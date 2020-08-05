require 'rails_helper'

RSpec.describe Following, type: :model do
  describe "associations" do 
    it {is_expected.to belong_to(:follower).class_name("User").with_foreign_key(:follower_id).inverse_of(:followees)}
    it {is_expected.to belong_to(:followee).class_name("User").with_foreign_key(:followee_id).inverse_of(:followers)}
  end

  describe "scopes" do
    let(:follower) { create(:user) }
    let(:followee) { create(:user) }
    let(:following) { create(:following, follower_id: follower.id, followee_id: followee.id)}
    it "should return correct follower" do
      Following.find_follower(follower.id).should == [following]
    end

    it "should return correct followee" do
      Following.find_followee(followee.id).should == [following]
    end 

    it "should return correct relationship" do
      Following.find_relation(followee.id, follower.id).should == [following]
    end
  end
end
