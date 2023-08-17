$(function(){
  $("#form").submit(function(event){
    event.preventDefault();

    formData = $(this).serializeArray()

    let itemError = false;
    let quantityError = false;
    let unitError = false;

    $.each(formData, function(index, element){
      switch(index){
      case 0:
        itemError = validateItems(element.value);
        break;
      case 1:
        quantityError = validateQuantity(element.value);
        break;
      case 2:
        unitError = validateUnit(element.value);
        break;
      }
    })

    $(".clear-all").click(function(){
      $('.table').find('tbody').empty()
    })

    $(".clear-inputs").click(function(){
      $(".item-input").val("");
      $(".quantity-input").val("");
      $(".select-class").val("");
    })

    if (!itemError && !quantityError && !unitError) {
        addTableRows(formData[0].value, formData[1].value, formData[2].value);
    }
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

