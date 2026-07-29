# Auditoria Lighthouse — Lumina Pro

Data: 28/07/2026  
Tema candidato: Shopify theme ID `142341308519` (`t/40`)  
Ferramenta: Lighthouse executado em Chrome headless, com medições isoladas.

## Resultado inicial

| Página | Perfil | Desempenho | Acessibilidade | SEO |
| --- | --- | ---: | ---: | ---: |
| Página inicial | Mobile | 52 | 88 | 92 |
| Página inicial | Desktop | 41 | 88 | 92 |
| Coleção `/collections/lazer` | Mobile | 35 | 89 | 100 |
| Coleção `/collections/lazer` | Desktop | 57 | 85 | 100 |
| Produto auditado | Mobile | 33 | 87 | 100 |
| Produto auditado | Desktop | 34 | 87 | 100 |

## Reteste após redução dos módulos do Vitals

Foram mantidos somente: adicionar ao carrinho pegajoso, produtos relacionados e aviso de volta ao estoque.

| Página | Perfil | Desempenho | Acessibilidade | SEO | LCP | TBT | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Página inicial | Mobile | 19 | 92 | 100 | 5,5 s | 10.100 ms | 0,377 |
| Página inicial | Desktop | 59 | 92 | 100 | 1,6 s | 1.360 ms | 0 |
| Coleção `/collections/lazer` | Mobile | 31 | 92 | 100 | 9,9 s | 2.900 ms | 0,019 |
| Coleção `/collections/lazer` | Desktop | 46 | 89 | 100 | 3,4 s | 1.170 ms | 0,004 |
| Produto auditado | Mobile | 34 | 93 | 100 | 14,1 s | 8.950 ms | 0,018 |
| Produto auditado | Desktop | 56 | 93 | 100 | 2,5 s | 610 ms | 0,002 |

A média de acessibilidade passou de 87,3 para 91,8 e atingiu a meta mínima de 90. O SEO atingiu 100 em todas as páginas. A média de desempenho ficou em 40,8 e ainda não atingiu a meta de 60.

Os resultados de desempenho variaram bastante entre execuções, sobretudo no perfil mobile. Isso indica interferência de scripts externos, rede, conteúdo dinâmico e da barra de prévia da Shopify. A medição deve ser repetida no tema publicado, sem a barra de prévia, antes da aprovação comercial.

## Correções aplicadas no tema

- Meta description de fallback para páginas sem descrição configurada.
- Uso da configuração de sufixo de título SEO.
- Área mínima de toque de 44 × 44 px para botões do cabeçalho.
- Contraste reforçado no breadcrumb e no indicador de estoque do produto.
- URL canônica confirmada em `layout/theme.liquid`.
- JSON-LD nativo confirmado em `snippets/structured-data.liquid`.
- Embeds duplicados de JSON-LD/SEO permanecem desativados em `config/settings_data.json`.
- Módulos redundantes e pesados do Vitals desativados.

## Bloqueios externos encontrados

Os principais custos de processamento restantes não são originados somente pelos arquivos do tema:

- Google Tag Manager e tags de anúncios;
- Meta Pixel;
- widget Google Merchant;
- Conversion Bear;
- scripts Shopify Web Pixels;
- módulos remanescentes do Vitals;
- barra de prévia da Shopify durante a auditoria.

Também foram detectados iframes externos sem título acessível. Esses pontos precisam ser corrigidos na configuração ou pelo fornecedor do aplicativo.

## Ações pendentes

1. Garantir que Analytics, anúncios e pixels opcionais só carreguem após consentimento aplicável.
2. Avaliar a remoção do widget Google Merchant durante uma nova medição.
3. Repetir as seis auditorias no tema publicado, sem barra de prévia.
4. Validar produto no Google Rich Results Test.
5. Concluir configuração e verificação de propriedade no Google Search Console.

Os relatórios JSON completos permanecem locais e não são versionados, pois são arquivos grandes e específicos da execução.

## Medição de controle após limpeza externa

O embed do detector de links quebrados do TinySEO e o widget visual do Google & YouTube foram desativados. Na página inicial mobile, a medição de controle registrou desempenho 47, acessibilidade 92 e SEO 100, com TBT de 3.650 ms. O diagnóstico detalhado está em `EXTERNAL-SCRIPTS-AUDIT.md`.
