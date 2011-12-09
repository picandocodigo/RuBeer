class Place < ActiveRecord::Base

    validates :latitude, :presence => true
    validates :longitude, :presence => true
    validates :rate, :presence => true
    validates :address, :presence => true
    
end
