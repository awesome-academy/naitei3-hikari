source "https://rubygems.org"
git_source(:github){|repo| "https://github.com/#{repo}.git"}

ruby "2.7.1"
gem "active_model_serializers"
gem "bcrypt"
gem "bootsnap", ">= 1.4.2", require: false
gem "jwt"
gem "paranoia"
gem "pg", ">= 0.18", "< 2.0"
gem "puma", "~> 4.3"
gem "rack-cors"
gem "rails", "~> 6.0.3", ">= 6.0.3.2"
gem "simple_command"
gem "stream-chat-ruby"

group :development, :test do
  gem "byebug", platforms: [:mri, :mingw, :x64_mingw]
  gem "factory_bot_rails"
  gem "faker"
  gem "rspec-rails"
  gem "shoulda-matchers", "~> 4.0"
end

group :development do
  gem "listen", "~> 3.2"
  gem "rubocop", "~> 0.74.0", require: false
  gem "rubocop-rails", "~> 2.3.2", require: false
  gem "spring"
  gem "spring-watcher-listen", "~> 2.0.0"
end

gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
