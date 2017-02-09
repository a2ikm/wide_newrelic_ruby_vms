$(function(){
  console.log("Wide NewRelic Ruby VMs is enabled.");

  var $mainColumn = $("#main_column");

  var $helpPanel = $mainColumn.find(".help_panel").parent();
  $helpPanel.remove();

  $mainColumn.find(".span-8").removeClass("span-8").addClass("span-12");
  $mainColumn.find(".span-4").removeClass("span-4").addClass("span-6");
});
