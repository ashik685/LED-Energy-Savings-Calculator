$(document).ready(function(){
	$("#original_lamp_wattage,#replacement_lamp_wattage,#watt_saved_per_lamp,#of_lamps_to_replace,#total_watt_saved,#kilowatt,#total_kiowatt_save,#total_kiowatt_saves,#hour_use_per_day,#day_of_use_per_week,#week_of_use_per_year,#total_kilowatt_save_per_year,#total_kilowatt_save_per_years,#energy_cost_per_kilowatt,#total_energy_cost_save_per_year,#led_life_span,#original_bulb_life_span,#your_early_usage,#cost_of_led_bulb,#no_of_led_bulb_for_ten_year,#Cost_of_Original_Bulbs,#no_of_Original_Bulbs_bulb_for_ten_year,#no_of_bulb,#cost_of_led_bulb_for_ten_year,#cost_of_original_bulb_for_ten_year,#Initial_Cost_of_Lighting_Upgrade,#total_energy_cost_saving_per_year,#saving_form_usage,#saving_from_per_bulb_cost_per_year,#return_on_investment,#yearly_saving").keyup(function(){
		var lampwatt=$("#original_lamp_wattage").val();
		var replace_lamp_wattage=$("#replacement_lamp_wattage").val();
		$("#watt_saved_per_lamp").val(lampwatt-replace_lamp_wattage);		
		var watt_saved_per_lamp=$("#watt_saved_per_lamp").val();		
		var no_of_replace_bulb=$("#of_lamps_to_replace").val();
		$("#total_watt_saved").val(watt_saved_per_lamp*no_of_replace_bulb);
		var total_watt_saved=$("#total_watt_saved").val();		
		$("#total_kiowatt_save").val(total_watt_saved/1000);
		var total_kiowatt_save=$("#total_kiowatt_save").val();
		$("#total_kiowatt_saves").val(total_kiowatt_save);
		var total_kiowatt_saves=$("#total_kiowatt_saves").val();
		var hour_use_per_day=$("#hour_use_per_day").val();
		var day_of_use_per_week=$("#day_of_use_per_week").val();
		var week_of_use_per_year=$("#week_of_use_per_year").val();
		$("#total_kilowatt_save_per_year").val(total_kiowatt_saves*hour_use_per_day*day_of_use_per_week*week_of_use_per_year);
		var total_kilowatt_save_per_year=$("#total_kilowatt_save_per_year").val();
		$("#total_kilowatt_save_per_years").val(total_kilowatt_save_per_year);
		var total_kilowatt_save_per_years=$("#total_kilowatt_save_per_years").val();
		var energy_cost_per_kilowatt=$("#energy_cost_per_kilowatt").val();
		$("#total_energy_cost_save_per_year").val(parseFloat(total_kilowatt_save_per_years*energy_cost_per_kilowatt).toFixed(2));
		var total_energy_cost_save_per_year=$("#total_energy_cost_save_per_year").val();
		var led_life_span=$("#led_life_span").val();
		var cost_of_led_bulb=$("#cost_of_led_bulb").val();
		var original_bulb_life_span=$("#original_bulb_life_span").val();
		var Cost_of_Original_Bulbs=$("#Cost_of_Original_Bulbs").val();		
		$("#your_early_usage").val(hour_use_per_day*day_of_use_per_week*week_of_use_per_year);
		var your_early_usage=$("#your_early_usage").val();		
		$("#no_of_led_bulb_for_ten_year").val((your_early_usage/led_life_span)*10);
		var no_of_led_bulb_for_ten_year=$("#no_of_led_bulb_for_ten_year").val();
		$("#no_of_Original_Bulbs_bulb_for_ten_year").val((your_early_usage/original_bulb_life_span)*10);
		var no_of_Original_Bulbs_bulb_for_ten_year=$("#no_of_Original_Bulbs_bulb_for_ten_year").val();
		$("#no_of_bulb").val(no_of_replace_bulb);
		var no_of_bulb=$("#no_of_bulb").val();
		$("#cost_of_led_bulb_for_ten_year").val((no_of_bulb*no_of_led_bulb_for_ten_year*cost_of_led_bulb).toFixed(2));
		var cost_of_led_bulb_for_ten_year=$("#cost_of_led_bulb_for_ten_year").val();
		$("#cost_of_original_bulb_for_ten_year").val((no_of_bulb*no_of_Original_Bulbs_bulb_for_ten_year*Cost_of_Original_Bulbs).toFixed(2));
		var cost_of_original_bulb_for_ten_year=$("#cost_of_original_bulb_for_ten_year").val();
                
                //SM@K's changes 1
                $("#Initial_Cost_of_Lighting_Upgrade").val(cost_of_led_bulb * no_of_bulb);
                
                //Need to change
		var Initial_Cost_of_Lighting_Upgrade=$("#Initial_Cost_of_Lighting_Upgrade").val();				
		$("#saving_form_usage").val(total_energy_cost_save_per_year);
		var saving_form_usage=$("#saving_form_usage").val();
                
		//$("#saving_from_per_bulb_cost_per_year").val((cost_of_original_bulb_for_ten_year-cost_of_led_bulb_for_ten_year)/10);
                //SM@K's changes 2
                $("#saving_from_per_bulb_cost_per_year").val((($('#cost_of_original_bulb_for_ten_year').val() - $('#cost_of_led_bulb_for_ten_year').val())/10).toFixed(2));
                
		var saving_from_per_bulb_cost_per_year=$("#saving_from_per_bulb_cost_per_year").val();					
		$("#yearly_saving").val((parseFloat(saving_from_per_bulb_cost_per_year)+parseFloat(saving_form_usage)).toFixed(2));	
		var yearly_saving=$("#yearly_saving").val();
		$("#total_energy_cost_saving_per_year").val(yearly_saving);
		var total_energy_cost_saving_per_year=$("#total_energy_cost_saving_per_year").val();
		$("#return_on_investment").val(Initial_Cost_of_Lighting_Upgrade/total_energy_cost_saving_per_year);
		var return_on_investment=$("#return_on_investment").val((Initial_Cost_of_Lighting_Upgrade/total_energy_cost_saving_per_year).toFixed(2));
	});
        $('#of_lamps_to_replace').keyup();
});