# Política de segurança

## Escopo

Este repositório contém somente o tema da vitrine. Segurança de servidores, contas, autenticação, pagamentos, checkout, APIs administrativas e infraestrutura é fornecida pela Shopify ou pelos aplicativos instalados.

## Reporte responsável

Não publique dados pessoais, credenciais ou detalhes exploráveis em uma issue pública. Entre em contato com o responsável pelo repositório e informe:

- versão do tema;
- página e navegador afetados;
- passos mínimos para reprodução;
- impacto observado;
- evidências sem dados de clientes.

## Controles implementados

- escape e renderização segura de dados dinâmicos;
- validação de URLs usadas por scripts;
- limites de armazenamento para favoritos;
- requisições de mesma origem para carrinho e busca;
- Customer Privacy API para consentimento;
- ausência de `eval`, `new Function` e `document.write`;
- dependências visuais hospedadas pela Shopify.

## Responsabilidades do lojista

- usar autenticação multifator nas contas administrativas;
- conceder o menor nível de acesso necessário a colaboradores e aplicativos;
- revisar aplicativos, pixels e scripts personalizados;
- manter domínio, DNS e e-mail protegidos;
- configurar alertas, backups e processos de resposta a incidentes;
- nunca inserir chaves secretas, tokens ou credenciais no código do tema.

## Limitações

Nenhum software é imune a todos os ataques. O tema não deve ser anunciado como “100% seguro”. Atualizações da Shopify, navegadores, aplicativos e requisitos legais podem exigir novas revisões.
