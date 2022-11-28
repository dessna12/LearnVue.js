new Vue({

    el: "#app",
    data: {
        title: 'bienvenue !',
        strongTag: '<strong> IMPORTANT </strong>',
        counter:0,
        tagname:"",
        isBlue:true,
        isUnderline:true,
        names: ["Jonh","Jack","Alex"]
    },
    computed: {
        wordComputed: function(){
            return this.counter >0? "POsitif" : "Negatif"
        },
        myClass: function(){
            return{
                blue: this.isBlue,
                underline: this.isUnderline
            }
        }
    },
    methods: {
        reverseTitle: function() {
            this.title = this.title.split('').reverse().join('')
        },
        increase: function() {
            this.counter++
        },
        hover: function(event){
            this.tagname=event.target.tagName
        },
        decrease : function() {
            this.counter--
        },
        wordmethod: function(){
            return this.counter > 0 ? "positif" : "negatif"
        }


    }




}
)