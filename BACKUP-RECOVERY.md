# Plano de backup e recuperação — Lumina Pro

Este procedimento protege o código do tema e os dados operacionais da loja. Arquivos com dados de clientes, pedidos ou informações financeiras nunca devem ser enviados ao GitHub.

## O que deve ser protegido

| Item | Método | Frequência mínima |
| --- | --- | --- |
| Código do tema | Commit e push no GitHub | Antes e depois de cada alteração aprovada |
| Tema configurado na Shopify | Duplicar o tema publicado | Antes de publicação, atualização ou mudança importante |
| Pacote do tema | Baixar o arquivo ZIP | A cada versão homologada e mensalmente |
| Produtos e estoque | Exportar CSV | Mensalmente e antes de alterações em massa |
| Clientes | Exportar CSV para armazenamento privado | Mensalmente |
| Pedidos e transações | Exportar CSV para armazenamento privado | Mensalmente |
| Configurações de aplicativos | Exportação própria do app ou capturas documentadas | Após cada mudança importante |
| Domínio, DNS, pagamentos e frete | Capturas e registro das configurações | Após cada mudança |

## Como criar o backup

1. Faça commit e push de todas as alterações aprovadas.
2. No Admin da Shopify, acesse **Loja virtual > Temas**.
3. No tema publicado, abra `...` e selecione **Duplicar**.
4. Renomeie a cópia para `BACKUP AAAA-MM-DD — antes de [mudança]`.
5. No mesmo menu, selecione **Baixar arquivo do tema** e guarde o ZIP.
6. Em **Produtos**, **Clientes** e **Pedidos**, use **Exportar** e guarde os CSVs.
7. Registre as configurações críticas dos apps, pagamentos, frete, domínio e DNS.
8. Guarde tudo em uma pasta privada e criptografada, com acesso limitado.

Sugestão de estrutura:

```text
Lumina-Pro-Backups/
  2026-07/
    tema-lumina-pro-v1.0.0.zip
    produtos-2026-07-28.csv
    clientes-2026-07-28.csv
    pedidos-2026-07-28.csv
    configuracoes-apps/
```

Mantenha pelo menos os três backups mensais mais recentes e todos os pacotes associados a versões publicadas. Nunca armazene CSVs de clientes ou pedidos em repositório público.

## Teste de recuperação

Execute este teste a cada três meses e antes de uma publicação comercial:

1. Identifique um commit ou ZIP conhecido como estável.
2. Crie um tema **não publicado** a partir dessa versão.
3. Confira logo, menus, imagens, seções, traduções e configurações.
4. Execute `shopify theme check`.
5. Teste página inicial, coleção, produto, carrinho, conta e checkout em modo de teste.
6. Confirme versão mobile e desktop.
7. Registre a data, versão usada, resultado e responsável.
8. Exclua o tema de teste somente depois de documentar o resultado.

## Recuperação em produção

1. Interrompa novas alterações e preserve evidências do problema.
2. Duplique o tema com defeito antes de substituí-lo.
3. Se houver uma cópia estável na Shopify, revise a prévia e publique-a.
4. Caso contrário, envie o ZIP ou o commit estável como tema não publicado.
5. Faça os testes críticos antes de publicar.
6. Restaure dados por CSV apenas quando necessário e depois de conferir o impacto. Não faça importações cegas, pois elas podem substituir informações existentes.
7. Monitore pedidos, pagamentos, integrações e atendimento após a recuperação.

## Registro dos testes

| Data | Versão | Tipo de backup | Recuperação testada | Resultado | Responsável |
| --- | --- | --- | --- | --- | --- |
| A preencher | A preencher | Git/tema/CSV | Sim/Não | Aprovado/Reprovado | A preencher |

