var items = []

document.querySelector('input[type=submit]').addEventListener('click', ()=>{
    var nomeProduto = document.querySelector('input[name=nome_produto]')
    var valorProduto = document.querySelector('input[name=valor_produto]')
    /* <div class="produto">
                <h3>Redbull</h3>
                <h3 class="produto-price"><span>$20,00</span></h3>
            </div>*/


        items.push({
            nome:nomeProduto.value,
            valor:valorProduto.value,
        })
        var listaProduto = document.querySelector('.lista-produto')
        var somaProduto = document.querySelector('.soma-produto')
        listaProduto.innerHTML=""
    
    var soma = 0;
    var cont = 0;

    items.map(function(val){
        cont+=1;
        soma+=parseFloat(val.valor)
        listaProduto.innerHTML+= `<div class="produto `+cont+`">
        <input type='button' name='remove' class='remove `+cont+`' value='X' />
        <h3>`+val.nome+`</h3>
        <h3 class="produto-price"><span>R$`+val.valor+`</span></h3>
        </div>`
        
    })
    somaProduto.innerHTML=`<h2>R$`+soma.toFixed(2)+`</h2>`  
    document.querySelector('input[name=clear]').addEventListener('click', function(){
    items=[]
    listaProduto.innerHTML=""
    soma = 0
    somaProduto.innerHTML=`<h2>R$0,00</h2>`  
})

})
