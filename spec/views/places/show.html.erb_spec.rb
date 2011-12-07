require 'spec_helper'

describe "places/show.html.erb" do
  before(:each) do
    @place = assign(:place, stub_model(Place,
      :address => "Address",
      :rate => 1
    ))
  end

  it "renders attributes in <p>" do
    render
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/Address/)
    # Run the generator again with the --webrat flag if you want to use webrat matchers
    rendered.should match(/1/)
  end
end
