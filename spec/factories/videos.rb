FactoryBot.define do
  factory :video do
    name { Faker::Lorem.word }
    description { Faker::Lorem.word }
    url { Faker::Internet.url }
  end
end
