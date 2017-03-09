var gr = new Vue({
  el: "#App",
  data: {
    newItem: '',
    newItemPrice: 0.00,
    grItems: [
      {
        name: 'Milk',
        price: 2.99,
        checked: false
      },
      {
        name: 'Formula',
        price: 16.00,
        checked: false
      },
      {
        name: 'Golden Crisp',
        price: 3.29,
        checked: false
      }
    ],
    itemsInList: [

    ]
  },
  methods: {
    addNewItem: function(){
      var newItem = this.newItem.trim();
      var newItemPrice = this.newItemPrice;
      if(newItem && newItemPrice){
        this.grItems.push({
          name: newItem,
          price: newItemPrice,
          checked: false
        });
        this.newItem = '';
        this.newItemPrice = 0.00;
      }
    },
    deleteItem: function(event){
      var grItems = this.grItems;
      grItems.forEach(function(item, i){
        if(item.name === event.originalTarget.parentNode.id){
          //var index = this.grItems.indexOf(item);
          grItems.splice(i, 1);
        }
      });
    },
    toggleItemOnList: function(event){
      var itemsInList = this.itemsInList;
      var grItems = this.grItems;
      grItems.forEach(function(item, i){
        if(item.name === event.originalTarget.parentNode.id){
          switch(item.checked){
            case false:
              gr.addItemToList({
                name: item.name,
                price: item.price
              }, itemsInList);
              break;
            case true:
              gr.removeItemFromList(i, itemsInList);
              break;
            default:
              alert('Item could not be processed. :(');
          }
        }
      });
    },
    addItemToList: function(item, list){
      list.push(item);
    },
    removeItemFromList: function(i, list){
      list.splice(i, 1);
    }
  },
  computed: {
    listTotal: function(){
      var listTotal = 0.00;
      this.itemsInList.forEach(function(item){
        listTotal += item.price;
      });
      console.log(listTotal);
      // return Math.round(listTotal);
      return listTotal;
    }
  }
});
