# Chá da Helena

Landing page de convite para o chá de fraldas da Helena, feita com Next.js e pronta para deploy na Vercel.

## Desenvolvimento

```bash
npm install
npm run dev
```

## Deploy na Vercel

O projeto usa Next.js com App Router e está pronto para importação na Vercel:

1. Importe o repositório no painel da Vercel.
2. Mantenha o diretório raiz do projeto como diretório raiz da aplicação.
3. Confirme que o framework detectado é **Next.js**.
4. Deixe o comando de build e o diretório de saída nos valores padrão da Vercel. O build também pode ser executado com `npm run build`.

A Vercel detecta o Next.js pelo `package.json` e pelo diretório `app/`; não é necessário configurar `vercel.json` nem usar exportação estática.

## Confirmação de presença

O formulário exige nome, telefone, uma fralda com tamanho e um mimo. A mensagem com essas escolhas é preparada no WhatsApp para envio ao contato informado. A pessoa precisa tocar em enviar no WhatsApp para concluir a confirmação.

## Presentes

As opções de fralda são Pampers Premium Care, Huggies Supreme Care, Pampers Confort Sec, Pampers Pants, MamyPoko Fralda-Calça, Pom Pom Protek e Babysec Ultra, nos tamanhos M, G e XG. A lista de mimos inclui itens de higiene e banho e roupinhas. As fotos são ilustrativas; a disponibilidade pode variar conforme a loja.