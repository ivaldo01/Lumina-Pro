# Lumina Pro — tema Shopify

Tema Online Store 2.0 responsivo para lojas de catálogo variado, com foco em apresentação visual, compra móvel e personalização pelo editor da Shopify.

## Versão

`1.0.0`

## Acompanhamento do projeto

Use a [checklist mestre](PROJECT-CHECKLIST.md) como controle oficial da homologação, publicação na Zeta Variedades e preparação da edição comercial.

## Recursos

- Página inicial modular com slideshow, benefícios, mosaico e vitrine premium.
- Destaques individuais intercalados na grade de produtos.
- Coleções com filtros por tags, ordenação, paginação e compra rápida.
- Página de produto com galeria, variantes dinâmicas e políticas da loja.
- Carrinho, busca preditiva, contato, lista de desejos local e página 404.
- Rodapé com newsletter, meios de pagamento, menus e preferências de privacidade.
- Customer Privacy API da Shopify para consentimento granular.
- Fontes hospedadas pela Shopify, imagens responsivas e JavaScript carregado sob demanda.
- Metadados Open Graph, URL canônica e dados estruturados nativos para produtos.

## Instalação com Shopify CLI

```powershell
shopify theme dev --store sua-loja.myshopify.com --theme-editor-sync --open
```

Para enviar como tema não publicado:

```powershell
shopify theme push --store sua-loja.myshopify.com --unpublished
```

Revise a prévia antes de publicar. Não envie `config/settings_data.json` de uma loja cliente para outra sem revisar os dados e as imagens configuradas.

## Configuração obrigatória

1. Defina logo, cores e fontes em **Configurações do tema**.
2. Selecione os menus do cabeçalho e do rodapé.
3. Substitua contatos, copyright, redes sociais e textos de demonstração.
4. Configure meios de pagamento, frete, mercados e domínio no Admin.
5. Publique as políticas de privacidade, reembolso, envio e termos de serviço.
6. Em **Configurações > Privacidade do cliente**, defina as regiões que exigem consentimento.
7. Teste um pedido completo usando o modo de teste do provedor de pagamento.

## Privacidade e LGPD

O tema registra preferências por meio da Customer Privacy API oficial. Ele não lê nem altera cookies internos da Shopify. Cookies opcionais devem ser carregados somente quando o método correspondente da API permitir.

O tema não substitui:

- inventário de dados e operadores;
- definição de base legal e finalidade;
- contrato com fornecedores;
- canal para direitos dos titulares;
- política de retenção e resposta a incidentes;
- revisão jurídica aplicável ao negócio.

Consulte [LGPD-CHECKLIST.md](LGPD-CHECKLIST.md), o registro de [governança de privacidade](LGPD-GOVERNANCE.md) e o [inventário de tratamento de dados](DATA-INVENTORY.md).

## Segurança

- Dados vindos da busca são renderizados com APIs seguras do DOM.
- URLs armazenadas pela lista de desejos são normalizadas e limitadas.
- Formulários usam endpoints e tags nativas da Shopify.
- Consentimento é registrado somente após interação do visitante.
- Scripts e fontes do tema são servidos pela CDN da Shopify.
- Checkout, autenticação, pagamentos e infraestrutura são controlados pela Shopify.

Consulte [SECURITY.md](SECURITY.md) para limitações e reporte responsável. Os procedimentos operacionais estão em [BACKUP-RECOVERY.md](BACKUP-RECOVERY.md) e [INCIDENT-RESPONSE.md](INCIDENT-RESPONSE.md).

## Metafields opcionais

- `custom.specifications`: especificações técnicas exibidas na página do produto.
- `reviews.rating`: avaliação real fornecida por integração compatível.
- `reviews.rating_count`: quantidade real de avaliações.

O tema não gera avaliações, visitantes, vendas ou urgência fictícios.

## Validação

```powershell
shopify theme check
node --check assets\product.js
node --check assets\search.js
node --check assets\privacy-consent.js
```

Antes de lançar, siga também [QA-CHECKLIST.md](QA-CHECKLIST.md).

## Suporte

- Issues: https://github.com/ivaldo01/Lumina-Pro/issues
- Documentação: https://github.com/ivaldo01/Lumina-Pro

## Licença

Defina uma licença comercial antes de distribuir ou vender o tema. Imagens de demonstração e marcas de produtos podem possuir direitos próprios e não devem ser redistribuídas sem autorização.
