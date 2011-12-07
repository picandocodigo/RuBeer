class MapsController < ApplicationController

    def index
        
        @places = Place.all
        
        respond_to do |format|
            format.html 
            format.json { render json: @places }
        end
    end

end
