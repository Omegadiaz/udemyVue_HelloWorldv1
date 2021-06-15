app.component('footer-banco',{
    props: ['cantidad'],
     template: /*html*/`
        <div class="bg-dark text-white py-2">
            <h3>{{ texto }}</h3><span>Saldo disponible {{cantidad}}</span>
        </div>
    `,
    data(){
        return {
            texto : "Footer banco"
        }
    }
    
})