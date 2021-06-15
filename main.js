const app = Vue.createApp({
    data() {        
        return {
            cuenta: 'corriente',
            cantidad: 1000,
            servicios: ["transferencias", "pagos", "giros", "cheques"],
            desactivado: false,
        }
        
    },
    methods:{
        agregarSaldo(){
            this.cantidad = this.cantidad + 100
            this.desactivado = false
        },
        restarSaldo(){
            if(this.cantidad === 0){
                this.desactivado = true
                return
            }else{
                this.cantidad = this.cantidad - 100
                return
            }
        }
    },
    updated(){
        console.log(this.cantidad)
        if(this.cantidad === 0){
            this.desactivado = true
        }
    }
})