class MapsController < ApplicationController

    def index
    
        respond_to do |format|
            format.html 
            format.json { render json: @places }
        end
    end

end
