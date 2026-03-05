let mix = require('laravel-mix')
let path = require('path')
let NovaExtension = require('laravel-nova-devtool')

mix.extend('nova', new NovaExtension())

mix
  .setPublicPath('dist')
  .js('resources/js/dynamic-action-fields.js', 'js')
  .vue({ version: 3 })
//   .css('resources/css/asset.css', 'css')
  .alias({
    '@': path.join(__dirname, 'resources/js/'),
  })
  .nova('tunezilla/dynamic-action-fields')
  .version()
