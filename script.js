function ShoppingList(){
    /* ADD ITEM(S) */ 
    $("#js-shopping-list-form").on('submit', function(event){
      event.preventDefault();
      /* console.log(this); */ 
  
      let newItem = $("#shopping-list-entry").val();
      $('.shopping-list').append( `
        <li>
          <span class="shopping-item">${newItem}</span>
          <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
              <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
              <span class="button-label">delete</span>
            </button>
          </div>
        </li>
      ` );
    });
  }
  
  /* $('h1').on('click', function( event ){
    console.log( this );
    console.log( event.target );
  }) */
  
   $(ShoppingList);
  
  /* DELETE ITEM(S) */ 
  $("ul").on("click", ".shopping-item-delete", function() {
    event.preventDefault();
    $(event.target).closest("li").remove();
    });
  
  /* CHECK OFF ITEM(S) */ 
  $("ul").on("click", ".shopping-item-toggle", function() {
    event.preventDefault();
    /* use .parent() twice to go up two levels  
     .find is used to get the descendants of the element being targetted */ 
    $(this).parent().parent().find('.shopping-item').toggleClass("shopping-item__checked");
  });
  
  
  