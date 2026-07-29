# Auditoria de scripts externos

Data: 28/07/2026  
Tema candidato: Shopify theme ID `142341308519`

## Alterações concluídas

- Embed do detector de links quebrados do TinySEO desativado.
- Widget visual do canal Google & YouTube desativado.
- Configuração sincronizada com o tema candidato na Shopify.
- `shopify theme check`: 61 arquivos, nenhum erro.

Essas alterações preservam Vitals, Webrex, UpPromote, Judge.me e o chat da Shopify.

## Medição de controle

Lighthouse da página inicial em celular, depois da limpeza:

| Métrica | Resultado |
| --- | ---: |
| Desempenho | 47 |
| Acessibilidade | 92 |
| SEO | 100 |
| LCP | 5,1 s |
| TBT | 3.650 ms |
| CLS | 0,019 |

O teste anterior da mesma página havia registrado desempenho 19, TBT 10.100 ms e CLS 0,377. A melhora confirma que a redução ajudou, embora a variação entre execuções continue alta.

## Carregamentos externos restantes

| Origem observada | Situação | Próxima ação |
| --- | --- | --- |
| Vitals | Três módulos mantidos intencionalmente | Preservar e reavaliar no teste final |
| UpPromote | Programa de afiliados configurado | Preservar |
| Meta Pixel | Carregado por Eventos de clientes/Web Pixels | Confirmar finalidade, consentimento e ausência de duplicidade no Admin |
| Google tags `GT-5R4NGSBH`, `GT-K4VFHV47` e `AW-732782288` | Carregadas por integrações/pixels externos | Identificar o proprietário de cada tag e remover duplicatas |
| Shopify Web Pixels | Infraestrutura de pixels da Shopify | Confirmar categorias de privacidade e bloqueio antes do consentimento |
| Conversion Bear (`trust.conversionbear.com`) | Script de selo de confiança ainda presente | Desativar ou remover o app/script se o selo não estiver em uso |
| Google Merchant analytics | Ainda aparece na rede | Revisar o canal Google & YouTube e sua configuração de medição |
| Barra de prévia da Shopify | Exclusiva do tema em preview | Repetir teste final com o tema publicado |

## Caminho no Admin

1. Shopify Admin → **Configurações → Eventos de clientes**.
2. Abrir cada pixel e registrar nome, proprietário, status e finalidade.
3. Confirmar se Meta e Google aparecem somente uma vez.
4. Manter marketing e análise condicionados ao consentimento aplicável.
5. Em **Apps**, localizar Conversion Bear ou o aplicativo responsável por `trust.conversionbear.com`; desativar o selo se não estiver sendo usado.
6. Repetir Lighthouse no tema publicado, sem a barra de prévia.

Não se deve remover um pixel responsável por campanhas ativas sem antes confirmar atribuição, conversões e consentimento.

## Estado após revisão dos pixels

- AB Google Analytics, Instant AI Page Builder e SendWILL foram removidos dos Eventos de clientes.
- Colaborações e Preços inteligentes foram preservados porque fazem parte da operação.
- Facebook & Instagram, Google & YouTube, Judge.me, TikTok e UpPromote foram preservados.
- Google & YouTube permanece com tratamento de dados `Otimizado` pela
  Customer Privacy API; o funcionamento com cookies opcionais recusados foi
  testado e aprovado.
- Após otimizar as imagens e estabilizar a primeira troca do banner, a página inicial mobile alcançou desempenho 57, acessibilidade 92 e SEO 100.
- Após otimizar coleção e produto, a média de desempenho das seis auditorias chegou a 60,3 e atingiu a meta do projeto.
