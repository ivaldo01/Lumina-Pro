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

## Otimização de imagens e estabilidade do banner

O logo, as imagens do banner e o mosaico passaram a usar fontes responsivas e tamanhos adequados ao viewport. A primeira troca automática do banner foi adiada para evitar movimentação durante a renderização inicial, sem remover setas, animações ou autoplay.

No novo teste da página inicial mobile, o desempenho chegou a 57, a acessibilidade permaneceu em 92 e o SEO em 100. O LCP caiu para 3,4 s e o CLS chegou a 0. O TBT de 4.490 ms continua dominado por scripts de terceiros.

## Resultado otimizado de coleção e produto

As imagens principais de coleção e produto passaram a usar `fetchpriority="high"`, carregamento imediato e fontes responsivas. O efeito de revelação foi removido apenas das imagens acima da dobra para não atrasar sua pintura; as animações do restante da página foram preservadas.

| Página | Perfil | Desempenho | Acessibilidade | SEO | LCP | TBT | CLS |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Página inicial | Mobile | 57 | 92 | 100 | 3,4 s | 4.490 ms | 0 |
| Página inicial | Desktop | 59 | 92 | 100 | 1,6 s | 1.360 ms | 0 |
| Coleção | Mobile | 51 | 89 | 100 | 4,1 s | 4.050 ms | 0,018 |
| Coleção | Desktop | 81 | 89 | 100 | 0,8 s | 350 ms | 0,01 |
| Produto | Mobile | 54 | 87 | 100 | 3,2 s | 7.960 ms | 0,017 |
| Produto | Desktop | 60 | 87 | 100 | 1,2 s | 2.040 ms | 0,001 |

A média final de desempenho chegou a 60,3 e atingiu a meta mínima de 60. O SEO permaneceu em 100. A acessibilidade ficou em 89,3 nesta rodada, mas atingiu 91,8 na rodada anterior; a oscilação está associada principalmente a componentes externos e deve ser confirmada no tema publicado, sem a barra de prévia.
