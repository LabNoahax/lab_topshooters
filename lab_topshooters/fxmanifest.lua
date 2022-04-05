fx_version 'cerulean'

game 'gta5'

author 'Lab'

description 'Top shooters script that counts each users kills with SQL'

client_script 'client.lua'

server_scripts {
	'@mysql-async/lib/MySQL.lua',
	'server.lua',
}

ui_page 'html/index.html'

files {
	'html/index.html',
	'html/css/*.css',
	'html/*.js',
	'html/images/*.png'
}