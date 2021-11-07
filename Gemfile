source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '3.0.2'
gem 'rails', github: 'rails/rails', branch: 'main'

gem 'bootsnap', '>= 1.4.4', require: false
gem "cssbundling-rails", "~> 0.2.4"
gem 'jsbundling-rails', '~> 0.1.0'
gem 'pg', '~> 1.1'
gem 'puma', '~> 5.0'
gem 'redis', '~> 4.0'
gem 'sprockets-rails', require: 'sprockets/railtie'
gem 'stimulus-rails', '>= 0.4.0'
gem 'turbo-rails', '0.8.3'
gem 'tzinfo-data', platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  gem 'ruby_jard'
end

group :development do
  gem 'annotate', '~> 3.1'
  gem 'web-console', '>= 4.1.0'
end

group :test do
  gem 'capybara', '>= 3.26'
  gem 'selenium-webdriver'
  gem 'webdrivers'
end
