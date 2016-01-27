$(document).ready(function(e){
  $("footer").hide();
  var count = 0;
  var selected = false;

  $("#new-todo").on("keydown",function(e){
    var valTodo= $("#new-todo").val();
    if(e.which == 13 && valTodo !=""){
      $("section").append("<div class='todo active' class=''><input class='checked' type='checkbox'/><input class='todo-val' value='"+valTodo+"' readonly='true' /><button class='removeit'><img src='' alt='Remove this todo'/></button></div>");
      $('#todo-val').attr('readonly',true);
      $("footer").show();
      $("#new-todo").val("");
      count++;
      $(".count").remove();
      $("#count-list").append("<span class='count'>"+ count +" item left</span> ");

    }
    $(".todo-val").on("dblclick",function(){
      $(this).attr('readonly',false);
    });
      $(".todo-val").on("keypress",function(e){
        if(e.which == 13){
          $('.todo-val').attr('readonly', true);
          if($(this).val()=== ""){
            $(this).parent().remove();
          }
        }
      })
    $("#clear").on("click",function(){
      $(".completed").remove();
    });
    $("#active").on("click",function(){
      $(".active").show();
      $(".completed").hide();
    });
    $("#completed").on("click",function(){
      $(".completed").show();
      $(".active").hide();
    });
    $("#all").on("click",function(){
      $(".todo").show();
    });
    $(".removeit").on("click",function(){
      $(this).parent().remove();
    });
  });
    $(document).on("click",".checked",function(){
      $(this).parent().toggleClass("completed");
      $(this).parent().toggleClass("active");
      if($(this).is(':checked')){
        count--;
        $(".count").remove();
        $("#count-list").append("<span class='count'>"+ count +" item left</span> ");
      }
      else{
        count++;
        $(".count").remove();
        $("#count-list").append("<span class='count'>"+ count +" item left</span> ");
      }
    });
    $(document).on("click","#all-selected",function(){
      if (selected == false){
        selected = true;
        $(".checked").prop("checked",true);
        $(".count").remove();
        $("#count-list").append("<span class='count'>0 item left</span> ");
      }
      else {
        selected = false;
        $(".checked").prop("checked",false);
        $(".count").remove();
        $("#count-list").append("<span class='count'>"+count+" item left</span> ");
      }
    });
});
