import { NextResponse } from 'next/server';

export async function GET() {
    const username = process.env.GITHUB_USERNAME;
    const token = process.env.GITHUB_TOKEN;

    if (!token || !username) {
        return NextResponse.json({ error: 'Configuração do GitHub ausente no .env' }, { status: 500 });
    }

    // Consulta GraphQL otimizada para buscar contribuições do último ano e repositórios
    const query = `
    query {
      user(login: "${username}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
          }
        }
        repositories(privacy: PUBLIC) {
          totalCount
        }
      }
    }
  `;

    try {
        const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),

            next: { revalidate: 3600 }
        });

        const data = await response.json();

        if (data.errors) {
            throw new Error('Erro retornado pela API GraphQL do GitHub');
        }

        const commits = data.data.user.contributionsCollection.contributionCalendar.totalContributions;
        const repos = data.data.user.repositories.totalCount;

        return NextResponse.json({
            commits,
            repos
        });
    } catch (error) {
        console.error('Erro na rota da API do GitHub:', error);
        return NextResponse.json({ error: 'Falha ao buscar dados do GitHub' }, { status: 500 });
    }
}