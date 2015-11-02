/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import('bower_components/respond/src/respond.js');
app.import('bower_components/excanvas/excanvas.js');

// JQuery
app.import('bower_components/jquery/src/jquery.js');
app.import('bower_components/jquery-migrate/jquery-migrate.js');
app.import('bower_components/jquery-ui/jquery-ui.js');
app.import('bower_components/jquery.uniform/jquery.uniform.js');
app.import('bower_components/jquery-validate/dist/jquery.validate.js')
app.import('bower_components/jquery.easy-pie-chart/dist/jquery.easypiechart.js');
app.import('bower_components/flot/jquery.flot.js');
app.import('bower_components/jquery.uniform/themes/default/css/uniform.default.css');
app.import('vendor/jquery.sparkline.build/dist/jquery.sparkline.js');
app.import('bower_components/jquery-switch/jquery.switch/jquery.switch.min.js');
app.import('bower_components/jquery-switch/jquery.switch/jquery.switch.css');
app.import('bower_components/slimscroll/jquery.slimscroll.min.js');
app.import('bower_components/chosen/chosen.css')
app.import('bower_components/chosen/chosen.jquery.js')
app.import('vendor/plugins/datatables/media/js/jquery.dataTables.js');
app.import('vendor/plugins/datatables/extensions/TableTools/js/dataTables.tableTools.js');
app.import('vendor/plugins/datatables/extensions/ColReorder/js/dataTables.colReorder.js');
app.import('vendor/plugins/datatables/extensions/Scroller/js/dataTables.scroller.js');
app.import('vendor/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.js');
app.import('vendor/plugins/datatables/plugins/bootstrap/dataTables.bootstrap.css');
app.import('vendor/plugins/datatables/media/css/jquery.dataTables.css');
app.import('vendor/plugins/datatables/extensions/TableTools/css/dataTables.tableTools.css');
app.import('vendor/plugins/datatables/extensions/Scroller/css/dataTables.scroller.css');
app.import('vendor/plugins/datatables/extensions/ColReorder/css/dataTables.colReorder.css');
app.import('vendor/plugins/datatables/extensions/Responsive/css/dataTables.responsive.css');
app.import('vendor/plugins/datatables/extensions/Responsive/js/dataTables.responsive.js');


// Bootstrap
app.import('bower_components/bootstrap/dist/css/bootstrap.css');
app.import('bower_components/bootstrap/dist/css/bootstrap.css.map');
app.import('bower_components/bootstrap/dist/js/bootstrap.js');
app.import('bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js');
app.import("bower_components/bootstrap/fonts/glyphicons-halflings-regular.eot", { destDir: "fonts" });
app.import("bower_components/bootstrap/fonts/glyphicons-halflings-regular.svg", { destDir: "fonts" });
app.import("bower_components/bootstrap/fonts/glyphicons-halflings-regular.ttf", { destDir: "fonts" });
app.import("bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff", { destDir: "fonts" });
app.import("bower_components/bootstrap/fonts/glyphicons-halflings-regular.woff2", { destDir: "fonts" });

// FontAwesome
app.import("bower_components/font-awesome/css/font-awesome.css");
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.svg", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.ttf", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff2", { destDir: "fonts" });
app.import("bower_components/font-awesome/fonts/FontAwesome.otf", { destDir: "fonts" });

// Simple Line Icons
app.import('bower_components/simple-line-icons/css/simple-line-icons.css');
app.import('bower_components/simple-line-icons/fonts/Simple-Line-Icons.eot', { destDir: "fonts" });
app.import('bower_components/simple-line-icons/fonts/Simple-Line-Icons.svg', { destDir: "fonts" });
app.import('bower_components/simple-line-icons/fonts/Simple-Line-Icons.ttf', { destDir: "fonts" });
app.import('bower_components/simple-line-icons/fonts/Simple-Line-Icons.woff', { destDir: "fonts" });

// NProgress
app.import('bower_components/nprogress/nprogress.js');
app.import('bower_components/nprogress/nprogress.css');

// Select2
app.import('bower_components/select2/select2.js');
app.import('bower_components/select2/select2.css');

//x-editable
app.import('bower_components/x-editable/dist/bootstrap3-editable/css/bootstrap-editable.css');
app.import('bower_components/x-editable/dist/bootstrap3-editable/js/bootstrap-editable.js');
app.import('bower_components/x-editable/dist/bootstrap3-editable/img/clear.png', { destDir: "img" });

// Momentjs
app.import('bower_components/moment/moment.js');

// lodash
app.import('bower_components/lodash/lodash.js');

// QRCode
app.import('vendor/plugins/qrcode.js');

// Custom CSS
app.import('vendor/css/components-md.css');
app.import('vendor/css/custom.css');
app.import('vendor/css/darkblue.css');
app.import('vendor/css/layout.css');
app.import('vendor/css/login.css');
app.import('vendor/css/plugins-md.css');
app.import('vendor/css/profile.css');
app.import('vendor/css/tasks.css');

// QR Scanner
app.import('bower_components/jsqrcode/src/grid.js');
app.import('bower_components/jsqrcode/src/version.js');
app.import('bower_components/jsqrcode/src/detector.js');
app.import('bower_components/jsqrcode/src/formatinf.js');
app.import('bower_components/jsqrcode/src/errorlevel.js');
app.import('bower_components/jsqrcode/src/bitmat.js');
app.import('bower_components/jsqrcode/src/datablock.js');
app.import('bower_components/jsqrcode/src/bmparser.js');
app.import('bower_components/jsqrcode/src/datamask.js');
app.import('bower_components/jsqrcode/src/rsdecoder.js');
app.import('bower_components/jsqrcode/src/gf256poly.js');
app.import('bower_components/jsqrcode/src/gf256.js');
app.import('bower_components/jsqrcode/src/decoder.js');

app.import('bower_components/jsqrcode/src/qrcode.js');
app.import('bower_components/jsqrcode/src/findpat.js');
app.import('bower_components/jsqrcode/src/alignpat.js');
app.import('bower_components/jsqrcode/src/databr.js');
app.import('vendor/plugins/scanner/webqr/llqrcode.js');
app.import('vendor/plugins/scanner/webqr/webqr.js');
app.import('bower_components/jsqrcode/src/grid.js');
app.import('vendor/plugins/scanner/webqr/scan.js')

app.import('vendor/plugins/scanner/webqr/cam.png', { destDir: "img" })
app.import('vendor/plugins/scanner/webqr/vid.png', { destDir: "img" })
app.import('vendor/plugins/scanner/webqr/audio.mp3', { destDir: "img" })
// Custom JS
app.import('vendor/js/metronic.js');
app.import('vendor/js/login.js');
app.import('vendor/js/layout.js');
app.import('vendor/js/index.js');
app.import('vendor/js/ccmh.js');
app.import('vendor/js/tasks.js');
app.import('vendor/js/table-advanced.js');


// Plugins

module.exports = app.toTree();
