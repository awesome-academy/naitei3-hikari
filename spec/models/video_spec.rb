require 'rails_helper'

RSpec.describe Video, type: :model do
  describe "associations" do
    it {is_expected.to have_many(:media).dependent(:destroy)}
    it {is_expected.to have_many(:categories).through(:media).dependent(:destroy)}
    it {is_expected.to have_many(:comments).dependent(:destroy)}
  end
end
