# Auditoria da edição comercial — Lumina Pro

Data: 29/07/2026  
Branch: `codex/commercial-v1`

## Objetivo

Preparar uma distribuição limpa do Lumina Pro, independente da loja Zeta
Variedades, de produtos reais e de aplicativos instalados pelo lojista.
A versão publicada da Zeta permanece preservada na branch de produção.

## Itens críticos identificados

### Configuração vinculada à loja

- `config/settings_data.json` continha logotipo, contato, copyright e texto
  institucional da Zeta.
- O mesmo arquivo continha incorporações de TinySEO, Google & YouTube,
  Webrex, UpPromote, Inbox, Judge.me, Vitals, Smart SEO, Tapita, Forms,
  SEOWILL e PageFly.
- `templates/index.json` continha imagens da biblioteca da Zeta, coleções
  com identificadores próprios e produtos reais selecionados.

### Dependências de aplicativos

- `templates/page.collabs.json` dependia de um bloco do Shopify Collabs.
- `sections/pf-4d3a91e6.liquid` e
  `templates/collection.pf-4d3a91e6.json` dependiam do PageFly e continham
  domínio e conteúdo específicos da Zeta.
- `assets/tapita-meta-data.json` era um artefato gerado pelo Tapita.

Esses componentes não fazem parte do núcleo do tema e serão excluídos da
edição comercial. Apps poderão ser instalados posteriormente pelo comprador,
sem serem requisito para o funcionamento do Lumina Pro.

### Mídia e identidade

Foram encontrados banners e imagens com identidade visual da Zeta. Eles não
devem integrar o ZIP comercial. A demonstração comercial usará identidade,
textos, imagens e contatos neutros, com licença de distribuição comprovada.

## Política de dependências

### Recursos nativos do tema

- Cabeçalho, rodapé, busca e navegação.
- Banners, benefícios, mosaico e vitrines.
- Página de produto, coleção, carrinho e páginas institucionais.
- Favoritos locais, animações e preferências de movimento reduzido.
- Privacidade e interface de consentimento do tema.

### Integrações opcionais

- Avaliações.
- Afiliados e indicações.
- Upsell e produtos comprados juntos.
- Chat, analytics, pixels e automação de marketing.
- Construtores de página e ferramentas externas de SEO.

Uma integração opcional nunca deve impedir a instalação, a edição ou a compra
quando o aplicativo correspondente não estiver presente.

## Critérios para concluir a limpeza

- Nenhuma ocorrência de `Zeta`, domínio, e-mail ou identificador da loja.
- Nenhum bloco `shopify://apps/...` ativo na configuração distribuída.
- Nenhum produto, coleção ou imagem `shopify://shop_images/...` específico.
- Instalação limpa em uma loja de teste sem aplicativos adicionais.
- `shopify theme check` sem erros.
- ZIP contendo somente diretórios e arquivos aceitos pela Shopify.

