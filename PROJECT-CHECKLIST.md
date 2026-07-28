# Checklist mestre — Lumina Pro

Última atualização: 28/07/2026  
Branch de trabalho: `feature/product-page-pro`  
Versão atual: `1.0.0` (candidata à homologação)

Esta é a lista oficial de acompanhamento do projeto. Um item só deve ser marcado quando houver validação prática ou evidência suficiente.

## 1. Código, backup e versionamento

- [x] Repositório Git configurado.
- [x] Código publicado em `ivaldo01/Lumina-Pro`.
- [x] Branch `feature/product-page-pro` publicada e sincronizada.
- [x] Changelog inicial da versão 1.0.0 criado.
- [x] Documentação de segurança, LGPD e QA criada.
- [ ] Revisar todos os arquivos que deverão entrar na versão final.
- [ ] Mesclar a branch aprovada na branch principal.
- [ ] Criar a tag Git `v1.0.0`.
- [ ] Criar release `v1.0.0` no GitHub.
- [ ] Gerar e guardar o ZIP final da versão homologada.

## 2. Estrutura e recursos do tema

- [x] Página inicial premium.
- [x] Banner com imagens separadas para desktop e celular.
- [x] Benefícios premium responsivos.
- [x] Mosaico de categorias responsivo.
- [x] Vitrine de produtos premium.
- [x] Destaques individuais intercalados entre fileiras.
- [x] Página de produto responsiva.
- [x] Página de coleção responsiva.
- [x] Carrinho premium responsivo.
- [x] Busca segura e sugestões de produtos.
- [x] Lista de favoritos com validação local.
- [x] Blog e página individual de artigo.
- [x] Página de contato.
- [x] Página 404.
- [x] Página de senha.
- [x] Página de cartão-presente.
- [x] Rodapé premium com dados dinâmicos da Shopify.
- [x] Newsletter usando formulário nativo da Shopify.
- [x] Consentimento e preferências de privacidade.
- [x] Seção de Liquid personalizado.

## 3. Configuração da loja Zeta Variedades

- [x] Blog selecionável no cabeçalho.
- [x] Blog `noticias` selecionado na configuração atual.
- [x] Menus do rodapé selecionados.
- [x] Conteúdo “Quem Somos” incluído.
- [x] Rodapé configurado para usar nome, descrição, contato e endereço da Shopify.
- [ ] Confirmar telefone oficial no Admin da Shopify.
- [ ] Confirmar e-mail remetente e e-mail de atendimento.
- [ ] Confirmar endereço comercial que poderá ser exibido publicamente.
- [ ] Preencher links oficiais de Instagram, Facebook, TikTok, YouTube e WhatsApp.
- [ ] Conferir todos os menus do cabeçalho e do rodapé.
- [ ] Publicar e revisar os posts do blog.
- [ ] Revisar textos, ortografia e chamadas de todas as seções.
- [ ] Remover todos os endereços, telefones e textos demonstrativos restantes.
- [ ] Conferir moeda, idioma e mercados atendidos.

## 4. Catálogo e conteúdo

- [ ] Revisar títulos de todos os produtos.
- [ ] Revisar descrições e especificações.
- [ ] Revisar fornecedores exibidos nos cards.
- [ ] Revisar preços, preços comparativos e descontos.
- [ ] Revisar variantes e combinações indisponíveis.
- [ ] Revisar estoque e política de continuar vendendo sem estoque.
- [ ] Revisar qualidade, proporção e enquadramento das imagens.
- [ ] Adicionar texto alternativo às imagens importantes.
- [ ] Testar produto disponível, esgotado, com desconto e sem desconto.
- [ ] Testar produto com uma imagem e com várias imagens.
- [ ] Testar produto com uma variante e com várias variantes.
- [ ] Testar coleção vazia, pequena e paginada.
- [ ] Confirmar que não há avaliações ou alegações fictícias.

## 5. Fluxo de compra

- [x] Navegação do carrinho para o checkout confirmada.
- [x] Modo de teste do cartão Appmax ativado.
- [ ] Adicionar produto ao carrinho pela página do produto.
- [ ] Adicionar produto pelas vitrines e coleções.
- [ ] Alterar a quantidade no carrinho.
- [ ] Remover um item do carrinho.
- [ ] Testar cupom válido, inválido e expirado.
- [ ] Testar cálculo de frete para diferentes CEPs.
- [ ] Testar item sem frete disponível.
- [ ] Testar PIX.
- [ ] Testar cartão aprovado.
- [ ] Testar cartão recusado.
- [ ] Testar parcelamento exibido pelo provedor.
- [ ] Realizar pedido completo usando modo de teste.
- [ ] Confirmar página de agradecimento.
- [ ] Confirmar criação do pedido no Admin.
- [ ] Confirmar baixa ou atualização de estoque.
- [ ] Confirmar cancelamento e reembolso de teste.

## 6. Contas de clientes

- [x] Link de conta direcionando para as novas contas da Shopify.
- [x] Tela unificada de entrar/criar conta confirmada.
- [ ] Criar uma conta usando um e-mail de teste.
- [ ] Confirmar recebimento e uso do código de seis dígitos.
- [ ] Confirmar histórico de pedidos.
- [ ] Confirmar edição de perfil e endereços.
- [ ] Confirmar saída da conta.
- [ ] Definir se a conta será opcional ou obrigatória no checkout.

## 7. E-mails e atendimento

- [ ] Verificar domínio do remetente.
- [ ] Personalizar os modelos de notificação da Shopify.
- [ ] Testar confirmação de pedido.
- [ ] Testar confirmação de pagamento.
- [ ] Testar pedido enviado e código de rastreamento.
- [ ] Testar cancelamento e reembolso.
- [ ] Testar formulário de contato.
- [ ] Testar inscrição na newsletter.
- [ ] Confirmar funcionamento do chat e canais de suporte.

## 8. Segurança e privacidade

- [x] Busca sem inserção direta de HTML recebido da rede.
- [x] Favoritos com normalização, limites e validação de URLs.
- [x] Formulários nativos da Shopify.
- [x] Avaliações exibidas somente quando existem dados reais.
- [x] Scripts carregados apenas nas páginas necessárias.
- [x] Fontes hospedadas pela Shopify.
- [x] Banner ligado à Shopify Customer Privacy API.
- [x] Opções de aceitar, rejeitar e personalizar consentimento.
- [x] Revogação disponível pelo rodapé.
- [x] Política de reporte de vulnerabilidades documentada.
- [ ] Revisar todos os aplicativos instalados e suas permissões.
- [ ] Remover aplicativos, pixels e scripts sem uso.
- [ ] Ativar autenticação em dois fatores para proprietário e equipe.
- [ ] Revisar contas de equipe e acessos de colaboradores.
- [ ] Confirmar que nenhum segredo ou token está no repositório.
- [ ] Configurar domínio, HTTPS e DNS definitivos.
- [ ] Definir rotina de backup e recuperação.
- [ ] Definir plano de resposta a incidentes.

## 9. LGPD e documentos legais

- [ ] Identificar controlador, operadores e canal de privacidade.
- [ ] Mapear dados coletados pela Shopify, aplicativos, pixels e logística.
- [ ] Documentar finalidade, base legal, retenção e compartilhamento.
- [ ] Publicar Política de Privacidade revisada.
- [ ] Publicar Política de Cookies revisada.
- [ ] Publicar Termos de Serviço.
- [ ] Publicar Política de Trocas, Devoluções e Reembolso.
- [ ] Publicar Política de Frete e Entrega.
- [ ] Configurar as regiões de consentimento no Admin.
- [ ] Testar aceitar, rejeitar e personalizar cookies.
- [ ] Confirmar funcionamento da loja com cookies opcionais recusados.
- [ ] Definir processo para solicitações dos titulares.
- [ ] Fazer revisão jurídica antes da publicação comercial.

## 10. Acessibilidade e responsividade

- [x] Principais páginas adaptadas para celular.
- [x] Controles importantes com rótulos acessíveis.
- [x] Abas do produto com atributos ARIA.
- [ ] Testar largura de 320 px.
- [ ] Testar largura de 375 px.
- [ ] Testar largura de 430 px.
- [ ] Testar tablet.
- [ ] Testar notebook e monitor grande.
- [ ] Testar navegação apenas por teclado.
- [ ] Testar zoom de 200%.
- [ ] Testar foco visível.
- [ ] Testar leitor de tela.
- [ ] Testar preferência por movimento reduzido.
- [ ] Confirmar contraste de textos e botões.

## 11. Navegadores e dispositivos reais

- [ ] Chrome no Windows.
- [ ] Edge no Windows.
- [ ] Firefox.
- [ ] Safari no iPhone.
- [ ] Safari no Mac.
- [ ] Chrome no Android.
- [ ] Samsung Internet.
- [ ] Testar conexão móvel lenta.
- [ ] Confirmar que menus, modais e campos não ficam cortados.

## 12. Desempenho e SEO

- [x] Dados estruturados nativos para produtos.
- [x] Imagens responsivas e carregamento tardio nas listagens.
- [x] Dependências externas de fontes removidas.
- [x] `shopify theme check` com zero ocorrências.
- [x] Todos os JavaScripts validados sintaticamente.
- [ ] Executar Lighthouse na página inicial — celular e desktop.
- [ ] Executar Lighthouse no produto — celular e desktop.
- [ ] Executar Lighthouse na coleção — celular e desktop.
- [ ] Alcançar média mínima de 60 em desempenho.
- [ ] Alcançar média mínima de 90 em acessibilidade.
- [ ] Revisar títulos e descrições SEO.
- [ ] Revisar URLs canônicas.
- [ ] Validar dados estruturados no Google Rich Results Test.
- [ ] Verificar sitemap e indexação.
- [ ] Configurar Google Search Console.
- [ ] Configurar ferramenta de análise somente após consentimento aplicável.

## 13. Homologação e publicação na Zeta

- [ ] Duplicar o tema atual publicado como backup.
- [ ] Renomear claramente o tema candidato à produção.
- [ ] Conferir configurações do tema no editor.
- [ ] Executar toda a homologação em tema não publicado.
- [ ] Corrigir problemas encontrados.
- [ ] Repetir os testes críticos após as correções.
- [ ] Aprovar visual, conteúdo, compra e documentos legais.
- [ ] Definir janela de publicação.
- [ ] Publicar o tema na loja.
- [ ] Fazer teste rápido imediatamente após a publicação.
- [ ] Monitorar erros, pedidos e atendimento nas primeiras 48 horas.

## 14. Preparação da versão comercial

- [ ] Criar uma branch separada para a edição comercial.
- [ ] Remover marca, textos, contatos e produtos da Zeta Variedades.
- [ ] Criar identidade demonstrativa neutra e licenciada.
- [ ] Remover configurações e identificadores específicos da loja.
- [ ] Criar dados iniciais seguros, neutros e fáceis de substituir.
- [ ] Definir quais recursos pertencem ao tema e quais exigem aplicativo.
- [ ] Avaliar uma edição sem favoritos para submissão à Theme Store.
- [ ] Garantir licença comercial de imagens, ícones e demais ativos.
- [ ] Definir navegadores e versões suportados.
- [ ] Criar manual de instalação.
- [ ] Criar manual de personalização.
- [ ] Criar guia de atualização entre versões.
- [ ] Criar FAQ e solução de problemas.
- [ ] Criar canal e política de suporte.
- [ ] Definir período de atualizações incluídas.

## 15. Comercialização

- [ ] Escolher venda direta, marketplace ou Shopify Theme Store.
- [ ] Verificar requisitos atuais do canal escolhido.
- [ ] Definir licença de uso por loja e proibição de redistribuição.
- [ ] Definir preço e condições comerciais.
- [ ] Definir política de reembolso.
- [ ] Criar contrato ou termos da licença.
- [ ] Emitir documentos fiscais conforme orientação contábil.
- [ ] Criar site ou página de vendas.
- [ ] Criar loja de demonstração pública.
- [ ] Produzir capturas de tela e vídeo de demonstração.
- [ ] Preparar descrição, recursos, requisitos e limitações.
- [ ] Preparar ZIP comercial limpo.
- [ ] Instalar o ZIP em uma loja de teste vazia.
- [ ] Executar novamente QA, acessibilidade, desempenho e segurança.
- [ ] Publicar a versão comercial `v1.0.0`.
- [ ] Definir processo para suporte, bugs e novas versões.

## Próxima ação

- [ ] Iniciar a homologação pelo **fluxo completo de compra em modo de teste**, registrando o resultado de cada item da seção 5.
