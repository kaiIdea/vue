var app = new Vue({
    el:'#app',
    data:{
        list:[
            {id:1,name:'iphone 7',count:4,price:6999.22458},
            {id:2,name:'ipad',count:8,price:2000},
            {id:3,name:'Mac',count:30,price:20000}
        ]
    },
    computed:{
        totalPrice:function () {
            var  total = 0;
            for (var i = 0; i < this.list.length; i++) {
                total+=this.list[i].price*this.list[i].count;
            }
            return total;
        }
    },
    methods:{
        handleReduce:function (index) {
            if(this.list[index].count ===1) return;
            this.list[index].count--;
        },
        handleAdd:function (index){
            this.list[index].count++;
        },
        handleRemove:function (index){
            this.list.splice(index,1);
        },
        allCheck: function (){
            this.checked = true;
        }
    }
});
