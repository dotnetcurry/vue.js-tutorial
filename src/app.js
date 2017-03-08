Vue.directive('sp-grey', {
    inserted: function (el) {
        el.style.color = 'lightgrey';
    }
});

Vue.component('sp-card', {
  template: `
    <div class="card">
        <div class="card-image">
            <img v-bind:src="card.img_src">
            <span class="card-title">{{card.title}}</span>
            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
            <p v-sp-grey>{{card.description}}</p>
        </div>
    </div>`,
    props: ['card']
});

var app = new Vue({
    el: '#app',
 
    data: {
        message: '',
        search_term: null,
        cards: [
            {
                title: 'Sunrise with palm trees',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', 
                img_src: "img/1.jpg" 
            },
            { 
                title: 'Sunrise',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                img_src: "img/2.jpg" 
            },
            { 
                title: 'Copacabana sunrise',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                img_src: "img/3.jpg" 
            },
            { 
                title: 'Surfer',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
                img_src: "img/4.png" 
            }
        ]
    },
    methods: {
        search: function () {
            this.message = 'Searching for ' + this.search_term + '...';
        }
    }
});
