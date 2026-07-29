# Auditoria Lighthouse — Lumina Pro

Data: 28/07/2026  
Tema candidato: Shopify theme ID `142341308519` (`t/40`)  
Ferramenta: Lighthouse executado em Chrome headless, com medições isoladas.

## Resultado inicial

| Página | Perfil | Desempenho | Acessibilidade | SEO | Boas práticas |
| --- | --- | ---: | ---: | ---: | ---: |
| Página inicial | Mobile | 52 | 88 | 92 | 54 |
| Página inicial | Desktop | 41 | 88 | 92 | 54 |
| Coleção `/collections/lazer` | Mobile | 35 | 89 | 100 | 54 |
| Coleção `/collections/lazer` | Desktop | 57 | 85 | 100 | 54 |
| Produto auditado | Mobile | 33 | 87 | 100 | 54 |
| Produto auditado | Desktop | 34 | 87 | 100 | 54 |

As metas de 60 em desempenho e 90 em acessibilidade ainda não foram atingidas em todas as páginas.

## Correções aplicadas no tema

- Meta description de fallback para páginas sem descrição configurada.
- Uso da configuração de sufixo de título SEO.
- Área mínima de toque de 44 × 44 px para botões do cabeçalho.
- Contraste reforçado no breadcrumb e no indicador de estoque do produto.
- URL canônica confirmada em `layout/theme.liquid`.
- JSON-LD nativo confirmado em `snippets/structured-data.liquid`.
- Embeds duplicados de JSON-LD/SEO permanecem desativados em `config/settings_data.json`.

## Bloqueios externos encontrados

Os principais custos de processamento não são originados pelos arquivos do tema:

- Vitals;
- Google Tag Manager e tags de anúncios;
- Meta Pixel;
- widget Google Merchant;
- Conversion Bear;
- scripts Shopify Web Pixels;
- barra de prévia da Shopify durante a auditoria.

Também foi detectado um preço comparativo do Vitals com contraste insuficiente e iframes externos sem título acessível. Esses pontos precisam ser corrigidos na configuração ou pelo fornecedor do aplicativo.

## Ações pendentes

1. Desativar módulos não essenciais do Vitals e medir novamente.
2. Garantir que Analytics, anúncios e pixels opcionais só carreguem após consentimento aplicável.
3. Avaliar a remoção do widget Google Merchant durante uma nova medição.
4. Reexecutar as seis auditorias após sincronizar as correções.
5. Validar produto no Google Rich Results Test.
6. Concluir configuração e verificação de propriedade no Google Search Console.

Os relatórios JSON completos permanecem locais e não são versionados, pois são arquivos grandes e específicos da execução.
