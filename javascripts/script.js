$(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    item = $(".item-input").val();
    quantity = $(".quantity-input").val();
    unit = $(".select-class").val();

    let itemError = validateItems(item);
    let quantityError = validateQuantity(quantity);
    let unitError = validateUnit(unit);

    if (!itemError && !quantityError && !unitError) {
      addTableRows(item, quantity, unit);
    }

    $(".clear-all").click(function(){
      $('.table').find('tbody').empty()
    })

    $(".clear-inputs").click(function(){
      $(".item-input").val("");
      $(".quantity-input").val("");
      $(".select-class").val("");
    })
  })

  function validateItems(item){
    if (item.trim() == ""){
      $(".item-text").text("Please enter an item");
      return true;
    }else{
      $(".item-text").text("");
      return false;
    }
  }

  function validateQuantity(quantity){
    if (quantity == ""){
      $(".quantity-text").text("Please enter a quantity");
      return true;
    }else{
      $(".quantity-text").text("");
      return false;
    }
  }

  function validateUnit(unit){
    if (unit == "unit" || unit == null){
      $(".unit-text").text("Please enter a unit");
      return true;
    }else{
      $(".unit-text").text("");
      return false;
    }
  }

  function addTableRows(item, quantity, unit){
    $('.table').children('tbody').append(`<tr>
                                            <td scope="col">${item}</td>
                                            <td scope="col">${quantity}</td>
                                            <td scope="col">${unit}</td>
                                            <td scope="col"><button type="button" class="btn btn-danger clear-button">Clear</button></td>
                                          </tr>`);
  }

  $(".table").on("click", ".clear-button", function(){
    var confirmed = confirm("Do you want to remove this item?")

    if (confirmed){
      $(this).closest("tr").remove(); // Here closest refers to the closest parent element. In this case 'tr' is the closest parent to that particular 'td'
    }
  });
})

