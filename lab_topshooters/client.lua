ESX = nil

CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) 
			ESX = obj 
		end)
		Wait(0)
	end
end)


RegisterNetEvent('lab_topshooters:showTop10')
AddEventHandler('lab_topshooters:showTop10', function(scoreboard)
	SendNUIMessage({
		score = true,
		scoreboard = scoreboard
	})
    	SetNuiFocus(true,true)		
end)


RegisterNUICallback('onCloseMenu', function()
	SetNuiFocus(false,false)
end)