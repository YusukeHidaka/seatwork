class ApplicationController < ActionController::Base
      
  # 以下の1行は消さないでください
  def default_url_options() {privateIp: '172.17.0.18', containerPort: '3000', languageName: 'rails'}.merge(super) end
end

