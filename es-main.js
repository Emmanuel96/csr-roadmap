const handle_pillars  = function(){
    let row = $(this).data('row')
    let pillar = $(this).data('pillar')

    //handle no action disabling other actions 
    if($(this).hasClass(pillar+'-no-action')){
        $('.'+pillar+'-action-row-'+row).each(function(){
            this.checked = false
        });
    }else if($(this).hasClass(pillar+'-leading-action')){
        if(this.checked === true){
            $('.'+pillar+'-action-row-'+row).each(function(){
                this.checked = true
            });
            
            $('.'+pillar+'-no-action-row-'+row).each(function(){
                this.checked = false;
            })
        }
    }else if($(this).hasClass(pillar+'-action')){
        $('.'+pillar+'-no-action-row-'+row).each(function(){
            this.checked = false
        })
    }

    no_action_count = 0
    action_count = 0
    // get all the clicked no actions first 
    $('.'+pillar+'-no-action').each(function(){
        // console.log($(obj)[index].is(':checked'))
        if(this.checked === true){
            no_action_count += 1
        }
    });
    // get all the clicked actiions 
    $('.'+pillar+'-action').each(function(){
        if(this.checked === true){
            action_count += 1
        }
    });
    // uncheck the entire results first 
    $('.'+pillar+'-result').each(function(){
        this.checked = false; 
        $(this).attr('style','background-color: white; width: 25px; height: 25px;')
     });

    // represent answer in result 
    $('.'+pillar+'-result').each(function(){
       if(no_action_count > 0){
          // check element
          this.checked = true;
          // afterwards turn check to red
          $(this).attr('style','background-color: red; width: 25px; height: 25px;')
          // then decrement the count
          no_action_count -= 1
       }
       else if(action_count > 0){
        // check element
        this.checked = true;
        action_count -= 1
        $(this).attr('style','background-color: grey; width: 25px; height: 25px;')
       }
    });

    // represent answer in final result 
    $('.'+pillar+'-final-result').each(function(){
        if(no_action_count > 0){
            // check element
            this.checked = true;
            // afterwards turn check to red
            $(this).attr('style','background-color: red; width: 25px; height: 25px;')
            // then decrement the count
            no_action_count -= 1
        }
        else if(action_count > 0){
            // check element
            this.checked = true;
            action_count -= 1
            $(this).attr('style','background-color: grey; width: 25px; height: 25px;')
        }
     });
}

// apply function to all checkboxes 
$('.action').on('change', handle_pillars)