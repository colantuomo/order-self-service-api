- **Nome (pt-br)**: como nós referenciamos algo de negócio durante as conversas e reuniões, está diretamente ligado a área de negócio.
- **Name (en-us)**: como nós referenciamos a informação da coluna `Nome` dentro do projeto, está diretamente ligado ao código.
- **Descrição**: a definição do que este objeto em questão representa, está diretamente ligado a área de negócio.

Nome (pt-br) | Name (en-us)    | Descrição                                                               |
------------ | --------------- | ----------------------------------------------------------------------- |
Cliente      | Customer        | Usuário que vai realizar o `Pedido`                                     |
Item         | Product         | Uma opção de Lanche/Acompanhemento/Bebida disponível para ser escolhida |
Pedido       | Order           | Aglomerado de `Itens` que um `Cliente` selecionou                       |
Mercado Pago | PaymentAdapter  | Sistema externo para controlar pagamento dos `Pedidos`                  |
Pagamento    | Payment         | Necessário para concluir um `Pedido`, realizado pelo `Mercado Pago`     |
