FactoryBot.define do
  factory :category do
    title { Faker::Lorem.word }
    viewers { Faker::Number.number(digits: 4) }
    picture { Faker::Avatar.image }
  end
end
