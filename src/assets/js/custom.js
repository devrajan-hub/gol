import $ from'jquery';
import {CanvasJS} from  '../js/canvasjs.min.js';

$(document).ready(function () {
    var currentGfgStep, nextGfgStep, previousGfgStep;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
  
    setProgressBar(current);
  
    $(".next-step").click(function () {
  
        currentGfgStep = $(this).parent().parent();
        nextGfgStep = $(this).parent().parent().next();
  
        $("#progressbar li").eq($("fieldset")
            .index(nextGfgStep)).addClass("active");
  
        nextGfgStep.show();
        currentGfgStep.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;
  
                currentGfgStep.css({
                    'display': 'none',
                    'position': 'relative'
                });
                nextGfgStep.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });
  
    $(".previous-step").click(function () {
  
        currentGfgStep = $(this).parent();
        previousGfgStep = $(this).parent().prev();
  
        $("#progressbar li").eq($("fieldset")
            .index(currentGfgStep)).removeClass("active");
  
        previousGfgStep.show();
  
        currentGfgStep.animate({ opacity: 0 }, {
            step: function (now) {
                opacity = 1 - now;
  
                currentGfgStep.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previousGfgStep.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });
  
    function setProgressBar(currentStep) {
        var percent = parseFloat(100 / steps) * current;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }
  
    $(".submit").click(function () {
        return false;
    });
    $('.toggle-view').click(function(){
        $('.toggle-view').removeClass('activeblock');
        var toggletext = $(this).text();
        console.log('toggletext',toggletext);
        $(this).addClass('activeblock');
        if(toggletext == 'Color'){
            $('.getcolor-code').show();
            $('.background-image').hide();
        }else if(toggletext == 'Image'){
            $('.background-image').show();    
            $('.getcolor-code').hide();    
        }else{}
    });
    $('.upload-doc').click(function(){
        console.log('dsfdsvgdsvdfs');
        $('.upload_sound').get(0).click();	
    });
    $('.logoupload').click(function(){
        console.log('dsfdsvgdsvdfsdf');
        $('.upload_logo').get(0).click();	
    });
    $('.uploadbgimage').click(function(){
        console.log('dsfdsvgdsvdfsdf');
        $('#upload_bgimg').get(0).click();	
    });
    $('.add-data-capture').click(function(){
        $('#data-capture-list').append('<div class="formcheck"><label class="checkbox-container" for="newques">Postal code<input type="checkbox" id="newques" value="option1" /><span class="checkmark"></span></label><input type="text" id="newdata" value="" /><span class="addcapture">Add</span></div>');
    });
       
});