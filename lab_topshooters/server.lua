ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterCommand('topshooters',function(source)
    local xPlayer = ESX.GetPlayerFromId(source)
    MySQL.Async.fetchAll('SELECT name, kills FROM users ORDER BY kills DESC',{}, function(result)
        TriggerClientEvent('lab_topshooters:showTop10', source, result)
    end)
end)

RegisterServerEvent('esx:onPlayerDeath')
AddEventHandler('esx:onPlayerDeath', function(data)
    data.victim = source
    local killer = data.killerServerId
    local victim = data.victim

    if killer == nil then return end

    local xPlayer = ESX.GetPlayerFromId(killer)
    local xTarget = ESX.GetPlayerFromId(victim)
    local identifier = xPlayer.identifier
    
    if xPlayer and xPlayer.getGroup() == 'user' then 
        MySQL.Sync.execute('UPDATE `users` SET `kills` = `kills` + @kills WHERE `identifier` = @identifier', {['@identifier'] = identifier, ['@kills'] = 1})
    end
end)