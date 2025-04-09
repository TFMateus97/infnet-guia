FROM node:18-alpine

# Instala o pnpm globalmente
RUN npm install -g pnpm

WORKDIR /app

# Copia os arquivos de configuração e o lockfile
COPY package*.json pnpm-lock.yaml ./

# Instala as dependências
RUN pnpm install

# Copia o restante dos arquivos do projeto
COPY . .

# Constrói a aplicação Next.js
RUN pnpm run build

# Expõe a porta da aplicação (ajuste se necessário)
EXPOSE 3000

# Inicializa a aplicação
CMD ["pnpm", "start"]