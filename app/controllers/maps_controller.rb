class MapsController < ApplicationController

    def index

        @places = Place.all
        @place = Place.new

        respond_to do |format|
            format.html
            format.json { render json: @places }
        end

    end

    def create

        @place = Place.new(params[:place])

        respond_to do |format|

            if @place.save
                format.html { redirect_to(:controller => "maps", :action => "index") }
                format.xml  { render :xml => @place, :status => :created, :location => @place }
            else
                format.html { render :text => "fail" }
                format.xml  { render :xml => @place.errors, :status => :unprocessable_entity }
            end

        end

    end

end
