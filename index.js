function listHandler() {
  $("#js-shopping-list-form").on("submit", function(event) {
    event.preventDefault();
    const addedItem = $(this)
      .find("#shopping-list-entry")
      .val();
    console.log(addedItem);
    $("ul").append(
      `<li><span class="shopping-item">${addedItem}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`
    );
  });
  $("ul").on("click", ".shopping-item-toggle", function(event) {
    var toggleElem = $(this)
      .closest("li")
      .children("span");
    toggleElem.toggleClass("shopping-item__checked");
  });
  $("ul").on("click", ".shopping-item-delete", function(event) {
    var deleteElem = $(this).closest("li");
    deleteElem.remove();
  });
}

$(listHandler);
