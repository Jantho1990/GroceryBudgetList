var gr = new Vue({
  el: "#App",
  data: {
    newItem: '',
    newItemPrice: 0.00,
    listTotal: 0.00,
    grItems: [
      {
        name: 'Milk',
        price: 2.99
      },
      {
        name: 'Formula',
        price: 16.00
      },
      {
        name: 'Golden Crisp',
        price: 3.29
      }
    ]
  },
  methods: {
    addNewItem: function(){
      var newItem = this.newItem.trim();
      var newItemPrice = this.newItemPrice;
      console.log(newItemPrice);
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
      window.alert(event.originalTarget.parentNode.id);
      console.log(event);
      // this.grItems.forEach(function(item){
      //   if(item.name === event.target.name)
      // });
    }
  }
});
