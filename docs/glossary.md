
Nome         | Descrição                                                               | Entidade |
------------ | ----------------------------------------------------------------------- | -------- |
Cliente      | Usuário que vai realizar o `Pedido`                                     | Customer |
Item         | Uma opção de Lanche/Acompanhemento/Bebida disponível para ser escolhida | Product  |
Pedido       | Aglomerado de `Itens` que um `Cliente` selecionou                       | Order    |
Mercado Pago | Sistema externo para controlar pagamento dos `Pedidos`                  | -        |
Pagamento    | Necessário para concluir um `Pedido`, realizado pelo `Mercado Pago`     | Payment  |
