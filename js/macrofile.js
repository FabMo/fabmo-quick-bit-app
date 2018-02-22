// Load Single Macro File
function InstallMacro (numMacro,type_mac,name,description) {
  var sbp_macro = "";
  var source_folder = type_mac + "/macro_";
  var source_data = source_folder + numMacro + ".sbp";
  jQuery.get(source_data, function(data) {
      sbp_macro += data;
    })
    .done(function() {
      source_data = source_data.replace(source_folder, '');
      source_data = source_data.replace('.sbp', '');
      var macro = {};
      macro.id = source_data;
      macro.name = name;
      macro.description = description;
      macro.content = sbp_macro;

    console.log("id: ", macro.id );
    console.log("name: ", macro.name );
//    console.log("description: ", macro.description );
//    console.log("id: ", macro.content );

      // create the macro with id macro.id
 	  fabmo.updateMacro(macro.id,{},function(err, result) {
 	  // sett the macro fields (name, description,content);
 	    fabmo.updateMacro(macro.id,{name:macro.name,content:macro.content,description:macro.description}, function(err, result) {
          fabmo.notify('info', "Macro '" + macro.id + "' saved.");
        });
      });
  });
}

// NOTE: There are subtle difference in the naming and descriptions of the same ("specific") macro across versions
//        and different macros will be loaded

// //Install ALL Handibot V2
$("#install-macroALL").click(function(evt) {
    InstallMacro(2, "macros_specific","Reset Cutter Offset Distance","Defines offset for Z-Zero location for #3, and sets Axis Zero for Z (use after changing cutter");
    InstallMacro(3, "macros_specific","Set Zero Locations","Automatically Set Axis Zero for XYZ");
    InstallMacro(6, "macros","Start Spindle","Start the spindle and pause for spin up");
    InstallMacro(7, "macros","Stop Spindle","Stop the spindle");
    InstallMacro(9, "macros","Tool Change","Use ATC or manual tool change");
    InstallMacro(77, "macros_specific","Adjust Zero Plate Height","Remeasure Height of Z-Zero Plate");
    InstallMacro(78, "macros","Manually Set Z-Zero","Set Zeroing for Z based on Current Location for use with Macro#3");
    InstallMacro(79, "macros_specific","Park","Move to Park Location");
	InstallMacro(88, "macros","Quick-Bit","Measure Cutter Using Quick-Bit Pressure Sensitive Z Zero Plate");
    InstallMacro(90, "macros","MY_Variables","Load variables (with variable information)");
    InstallMacro(91, "macros","Change Unit type","Change Units");
});

// Install Individually
$("#install-macro2").click(function(evt) {
    InstallMacro(2, "macros_specific","Reset Cutter Offset Distance","Defines offset for Z-Zero location for #3, and sets Axis Zero for Z (use after changing cutter");
});
$("#install-macro3").click(function(evt) {
    InstallMacro(3, "macros_specific","Set Zero Locations","Automatically Set Axis Zero for XYZ");
});
$("#install-macro6").click(function(evt) {
    InstallMacro(6, "macros","Start Spindle","Start the spindle and pause for spin up");
});
$("#install-macro7").click(function(evt) {
    InstallMacro(7, "macros","Stop Spindle","Stop the spindle");
});
$("#install-macro9").click(function(evt) {
    InstallMacro(9, "macros","Tool Change","Use ATC or manual tool change");
});
$("#install-macro77").click(function(evt) {
    InstallMacro(77, "macros_specific","Adjust Zero Plate Height","Remeasure Height of Z-Zero Plate");
});
$("#install-macro78").click(function(evt) {
    InstallMacro(78, "macros","Manually Set Z-Zero","Set Zeroing for Z based on Current Location for use with Macro#3");
});
$("#install-macro79").click(function(evt) {
    InstallMacro(79, "macros_specific","Park","Move to Park Location");
});
$("#install-macro88").click(function(evt) {
    InstallMacro(88, "macros","Quick-Bit","Measure Cutter Using Quick-Bit Pressure Sensitive Z Zero Plate");
});
$("#install-macro89").click(function(evt) {
    InstallMacro(89, "macros","Quick-Bit","Measure Cutter Using Quick-Bit Pressure Sensitive Z Zero Plate (probing)");
});
$("#install-macro90").click(function(evt) {
    InstallMacro(90, "macros","MY_Variables","Load variables (with variable information)");
});
$("#install-macro91").click(function(evt) {
    InstallMacro(91, "macros","Change Unit type","Change Units");
});
