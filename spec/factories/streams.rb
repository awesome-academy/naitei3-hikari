FactoryBot.define do
  factory :stream do
    key { Faker::Crypto.md5 }
    title { Faker::Lorem.word }
    description { Faker::Lorem.word }
    likes { Faker::Number.number(digits: 4) }
    views { Faker::Number.number(digits: 4) }
    is_streaming { Faker::Boolean.boolean }
  end
end
