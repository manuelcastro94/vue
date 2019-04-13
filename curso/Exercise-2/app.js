new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods:{
            alertMe : function (){
                alert('Alert!');
            },
            saveData: function(event){
                this.value = event.target.value;
                
            }

        }
    });