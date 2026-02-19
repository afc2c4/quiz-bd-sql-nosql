export const topics = [
  {
    title: 'NoSQL vs SQL',
    questions: [
      {
        q: 'Qual afirmacao descreve melhor bancos SQL?',
        options: [
          'Usam esquema rigido e tabelas relacionais',
          'Armazenam apenas arquivos de texto',
          'Nao suportam indices',
          'Sempre sao eventualmente consistentes',
          'Nao permitem transacoes'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque SQL nao se limita a texto; usa tabelas relacionais.',
          'Errada porque SQL suporta indices para melhorar consultas.',
          'Errada porque SQL costuma oferecer consistencia forte.',
          'Errada porque SQL suporta transacoes ACID.'
        ]
      },
      {
        q: 'Quando a flexibilidade de esquema e mais importante que joins complexos, qual opcao tende a ser melhor?',
        options: [
          'NoSQL',
          'SQL',
          'Planilhas',
          'Arquivos CSV apenas',
          'Sistemas sem banco'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque SQL exige esquema mais rigido.',
          'Errada porque planilhas nao sao um banco de dados escalavel.',
          'Errada porque CSV nao oferece consultas e integridade.',
          'Errada porque a pergunta pressupoe uso de banco.'
        ]
      },
      {
        q: 'Qual item e caracteristico de bancos relacionais SQL?',
        options: [
          'Suporte a joins entre tabelas',
          'Modelo de grafos nativo',
          'Chave-valor apenas',
          'Colunas largas',
          'Documentos JSON sem esquema'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque grafos sao outro modelo (graph DB).',
          'Errada porque chave-valor e outro modelo NoSQL.',
          'Errada porque colunas largas sao outro modelo NoSQL.',
          'Errada porque documentos JSON sao tipicos de document DB.'
        ]
      },
      {
        q: 'Como bancos NoSQL costumam tratar consistencia?',
        options: [
          'Podem oferecer consistencia eventual',
          'Sempre garantem consistencia forte',
          'Nao permitem replicacao',
          'Nunca suportam particionamento',
          'Nao podem escalar horizontalmente'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque NoSQL frequentemente permite escolhas de consistencia.',
          'Errada porque replicacao e comum em NoSQL.',
          'Errada porque particionamento e comum em NoSQL.',
          'Errada porque NoSQL foi feito para escalar horizontalmente.'
        ]
      },
      {
        q: 'Qual tendencia classica de escalabilidade esta mais associada a SQL tradicional?',
        options: [
          'Escala vertical (aumentar CPU/RAM)',
          'Escala horizontal com sharding automatico',
          'Apenas memoria local sem disco',
          'Somente cache em RAM',
          'Nenhuma forma de escala'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque sharding automatico e mais comum em NoSQL.',
          'Errada porque bancos SQL usam disco e memoria.',
          'Errada porque SQL nao se limita a cache.',
          'Errada porque SQL pode escalar verticalmente e via cluster.'
        ]
      },
      {
        q: 'Qual afirmacao sobre linguagem de consulta e correta?',
        options: [
          'SQL usa uma linguagem padrao declarativa',
          'NoSQL sempre usa SQL puro',
          'SQL nao permite filtros',
          'NoSQL nao tem nenhuma API',
          'SQL nao suporta agregacao'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque NoSQL usa APIs ou linguagens proprias.',
          'Errada porque SQL suporta WHERE e filtros complexos.',
          'Errada porque NoSQL expor APIs e comum.',
          'Errada porque SQL suporta agregacoes como SUM e COUNT.'
        ]
      },
      {
        q: 'Qual e a principal diferenca de modelo de dados?',
        options: [
          'SQL e relacional; NoSQL pode ser documento, chave-valor, coluna ou grafo',
          'SQL so armazena imagens',
          'NoSQL e sempre relacional',
          'SQL nao tem tabelas',
          'NoSQL nao tem chaves'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque SQL nao se limita a imagens.',
          'Errada porque NoSQL possui varios modelos nao relacionais.',
          'Errada porque SQL organiza dados em tabelas.',
          'Errada porque NoSQL usa chaves para identificar dados.'
        ]
      },
      {
        q: 'Quando integridade referencial e essencial, qual escolha e mais comum?',
        options: [
          'SQL',
          'NoSQL chave-valor',
          'Armazenamento em arquivos soltos',
          'Cache apenas',
          'Fila de mensagens'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque chave-valor nao foca em integridade referencial.',
          'Errada porque arquivos soltos nao garantem integridade.',
          'Errada porque cache nao e banco principal.',
          'Errada porque filas nao substituem banco relacional.'
        ]
      },
      {
        q: 'Em NoSQL, evoluir o esquema costuma ser: ',
        options: [
          'Mais facil, pois o esquema e flexivel',
          'Impossivel',
          'Sempre exige parada total',
          'Mais dificil que em SQL',
          'Nao existe esquema'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque e possivel evoluir dados em NoSQL.',
          'Errada porque mudancas podem ser feitas gradualmente.',
          'Errada porque NoSQL tende a facilitar a evolucao.',
          'Errada porque ha esquema implicito, mesmo se flexivel.'
        ]
      },
      {
        q: 'Qual escolha e tipica para cargas com muitas escritas e leitura simples?',
        options: [
          'NoSQL com particionamento',
          'SQL com muitos joins',
          'Planilha',
          'Arquivos locais sem indice',
          'Somente logs em texto'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque muitos joins aumentam custo.',
          'Errada porque planilhas nao escalam.',
          'Errada porque arquivos sem indice sao lentos.',
          'Errada porque logs nao oferecem consulta adequada.'
        ]
      }
    ]
  },
  {
    title: 'Teorema CAP',
    questions: [
      {
        q: 'O que significa CAP?',
        options: [
          'Consistency, Availability, Partition tolerance',
          'Cache, Access, Performance',
          'Cluster, Atomicity, Persistence',
          'Consistency, Atomicity, Performance',
          'Concurrency, Access, Partition'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque CAP nao fala de cache.',
          'Errada porque CAP nao usa Atomicity.',
          'Errada porque Atomicity e do ACID.',
          'Errada porque termos estao errados.'
        ]
      },
      {
        q: 'Em um particionamento de rede, um sistema distribuido precisa escolher entre:',
        options: [
          'Consistencia ou disponibilidade',
          'Latencia ou throughput',
          'Memoria ou disco',
          'Cache ou indice',
          'Backup ou restore'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque CAP nao trata de latencia.',
          'Errada porque CAP nao trata de recursos fisicos.',
          'Errada porque CAP nao trata de cache.',
          'Errada porque backup nao e parte do CAP.'
        ]
      },
      {
        q: 'Um sistema CP prioriza:',
        options: [
          'Consistencia e tolerancia a particao',
          'Disponibilidade e desempenho',
          'Consistencia e baixa latencia',
          'Disponibilidade e tolerancia a particao',
          'Apenas consistencia'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque CP nao foca em desempenho.',
          'Errada porque CP nao garante baixa latencia.',
          'Errada porque AP e disponibilidade + particao.',
          'Errada porque CP inclui tolerancia a particao.'
        ]
      },
      {
        q: 'Um sistema AP prioriza:',
        options: [
          'Disponibilidade e tolerancia a particao',
          'Consistencia e durabilidade',
          'Consistencia e baixa latencia',
          'Apenas disponibilidade',
          'Cache e throughput'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque durabilidade e ACID.',
          'Errada porque AP pode sacrificar consistencia.',
          'Errada porque AP inclui tolerancia a particao.',
          'Errada porque cache nao e parte do CAP.'
        ]
      },
      {
        q: 'A combinacao CA e possivel quando:',
        options: [
          'Nao ha particao de rede',
          'Sempre ha particao',
          'Ha dezenas de data centers',
          'Somente existe cache',
          'Nao existem clientes'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque com particao nao se garante CA.',
          'Errada porque mais data centers aumenta risco de particao.',
          'Errada porque cache nao resolve CAP.',
          'Errada porque CAP assume clientes e operacao.'
        ]
      },
      {
        q: 'Por que tolerancia a particao e obrigatoria em sistemas distribuidos?',
        options: [
          'Porque falhas de rede sao inevitaveis',
          'Porque discos nunca falham',
          'Porque o banco nao tem indices',
          'Porque o sistema e monolitico',
          'Porque CAP exige 4 propriedades'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque discos podem falhar e nao e o ponto.',
          'Errada porque indices nao afetam particao.',
          'Errada porque sistemas distribuidos nao sao monoliticos.',
          'Errada porque CAP tem 3 propriedades.'
        ]
      },
      {
        q: 'Consistencia no CAP significa:',
        options: [
          'Todas as replicas veem o mesmo valor apos uma escrita',
          'O sistema nunca falha',
          'As consultas sao sempre rapidas',
          'Os dados sao sempre compactados',
          'Todos os nos respondem ao mesmo tempo'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque falhas podem ocorrer.',
          'Errada porque CAP nao garante velocidade.',
          'Errada porque compactacao nao e relacionada.',
          'Errada porque sincronismo total nao e requisito.'
        ]
      },
      {
        q: 'Disponibilidade no CAP significa:',
        options: [
          'Cada requisicao recebe uma resposta',
          'Todos os dados estao sempre corretos',
          'Nao existe latencia',
          'Nao existe replicacao',
          'Somente um no atende'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque disponibilidade nao implica consistencia total.',
          'Errada porque latencia sempre existe.',
          'Errada porque replicacao ajuda disponibilidade.',
          'Errada porque disponibilidade envolve varios nos.'
        ]
      },
      {
        q: 'CAP se aplica principalmente a:',
        options: [
          'Sistemas distribuidos',
          'Planilhas locais',
          'Aplicativos offline simples',
          'Processos batch isolados',
          'Editores de texto'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque planilhas nao sao distribuidas.',
          'Errada porque apps offline nao tem particao de rede.',
          'Errada porque batch isolado nao enfrenta CAP.',
          'Errada porque editor de texto nao e distribuido.'
        ]
      },
      {
        q: 'Durante uma particao, retornar erro em vez de dados desatualizados indica foco em:',
        options: [
          'Consistencia',
          'Disponibilidade',
          'Cache',
          'Throughput',
          'Latencia'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque disponibilidade tentaria responder sempre.',
          'Errada porque cache nao decide entre C e A.',
          'Errada porque throughput nao e parte do CAP.',
          'Errada porque latencia nao e parte do CAP.'
        ]
      }
    ]
  },
  {
    title: 'BASE e ACID',
    questions: [
      {
        q: 'O que significa ACID?',
        options: [
          'Atomicity, Consistency, Isolation, Durability',
          'Availability, Consistency, Integrity, Durability',
          'Atomicity, Cache, Isolation, Durability',
          'Access, Consistency, Isolation, Durability',
          'Atomicity, Consistency, Isolation, Distribution'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque Availability nao faz parte do ACID.',
          'Errada porque Cache nao e parte do ACID.',
          'Errada porque Access nao e parte do ACID.',
          'Errada porque Distribution nao e parte do ACID.'
        ]
      },
      {
        q: 'Atomicidade significa:',
        options: [
          'Tudo ou nada em uma transacao',
          'Transacoes sempre paralelas',
          'Dados sempre duplicados',
          'Sem necessidade de log',
          'Somente leitura'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque atomicidade nao trata paralelismo.',
          'Errada porque duplicacao nao e requisito.',
          'Errada porque logs sao comuns para garantir atomicidade.',
          'Errada porque transacoes podem ter escrita.'
        ]
      },
      {
        q: 'Isolamento garante que:',
        options: [
          'Transacoes concorrentes nao veem estados intermediarios',
          'Nenhuma transacao falha',
          'Todas as leituras sao em cache',
          'Nao existe bloqueio',
          'So existe uma transacao'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque falhas ainda podem ocorrer.',
          'Errada porque isolamento nao depende de cache.',
          'Errada porque bloqueios podem ser usados para isolamento.',
          'Errada porque isolamento permite concorrencia.'
        ]
      },
      {
        q: 'Durabilidade significa:',
        options: [
          'Dados persistem mesmo apos falha',
          'Dados sao apenas temporarios',
          'Nao existe log',
          'Sem necessidade de backup',
          'Somente memoria'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque durabilidade e persistencia.',
          'Errada porque logs ajudam a garantir durabilidade.',
          'Errada porque backup ainda e importante.',
          'Errada porque durabilidade exige persistencia em disco.'
        ]
      },
      {
        q: 'O que significa BASE?',
        options: [
          'Basically Available, Soft state, Eventual consistency',
          'Backup, Atomicity, Storage, Execution',
          'Basic Access, Structured, Engine',
          'Basically Accurate, Soft state, Easy',
          'Backup, Availability, Security, Execution'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque essa sigla nao corresponde ao BASE.',
          'Errada porque esses termos nao existem no BASE.',
          'Errada porque BASE nao significa Accurate ou Easy.',
          'Errada porque Security e Execution nao fazem parte.'
        ]
      },
      {
        q: 'Soft state em BASE indica que:',
        options: [
          'O estado pode mudar com o tempo, sem novas entradas',
          'O estado e sempre rigido',
          'Os dados nunca expiram',
          'Nao existe replicacao',
          'O banco e somente leitura'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque soft state nao e rigido.',
          'Errada porque dados podem expirar.',
          'Errada porque replicacao e comum em BASE.',
          'Errada porque BASE nao implica somente leitura.'
        ]
      },
      {
        q: 'Consistencia eventual significa:',
        options: [
          'Replicas convergem ao mesmo valor com o tempo',
          'Dados sempre consistentes imediatamente',
          'Nao existe replicacao',
          'Todas as escritas falham',
          'Somente leitura'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque consistencia imediata e forte, nao eventual.',
          'Errada porque replicacao e justamente o que converge.',
          'Errada porque escritas nao precisam falhar.',
          'Errada porque bancos BASE suportam escrita.'
        ]
      },
      {
        q: 'Qual cenario combina melhor com ACID?',
        options: [
          'Transferencias bancarias',
          'Feed de rede social com alta escala',
          'Cache de sessao',
          'Log de eventos sem relacao',
          'Armazenamento temporario'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque feeds toleram eventual consistencia.',
          'Errada porque cache nao exige ACID.',
          'Errada porque logs podem ser eventual.',
          'Errada porque temporario nao exige ACID.'
        ]
      },
      {
        q: 'Qual cenario combina melhor com BASE?',
        options: [
          'Alta disponibilidade com grande escala',
          'Transacao financeira critica',
          'Controle de estoque com integridade forte',
          'Sistema de folha de pagamento',
          'Auditoria contabil'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque financas exigem consistencia forte.',
          'Errada porque estoque exige integridade.',
          'Errada porque folha exige ACID.',
          'Errada porque auditoria exige durabilidade e consistencia.'
        ]
      },
      {
        q: 'Comparando ACID e BASE, a maior diferenca e:',
        options: [
          'ACID prioriza consistencia; BASE prioriza disponibilidade',
          'ACID nao tem transacoes; BASE tem',
          'BASE nao replica; ACID replica',
          'ACID so funciona em NoSQL',
          'BASE so funciona em SQL'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque ACID tem transacoes.',
          'Errada porque BASE costuma usar replicacao.',
          'Errada porque ACID e comum em SQL.',
          'Errada porque BASE e comum em NoSQL.'
        ]
      }
    ]
  },
  {
    title: 'Banco de documentos',
    questions: [
      {
        q: 'Qual e a unidade basica de armazenamento em banco de documentos?',
        options: [
          'Documento (JSON/BSON)',
          'Linha fixa de tabela',
          'Arquivo CSV',
          'Bloco de disco bruto',
          'Pagina de memoria'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque linhas sao de bancos relacionais.',
          'Errada porque CSV nao e unidade de document DB.',
          'Errada porque bloco bruto nao define modelo.',
          'Errada porque pagina de memoria nao e modelo de dados.'
        ]
      },
      {
        q: 'Bancos de documentos geralmente permitem:',
        options: [
          'Esquema flexivel por documento',
          'Somente esquema rigido',
          'Apenas chaves inteiras',
          'Sem indices',
          'Sem consultas por campos'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque document DBs sao flexiveis.',
          'Errada porque chaves podem ser strings.',
          'Errada porque indices sao comuns.',
          'Errada porque consultas por campos sao basicas.'
        ]
      },
      {
        q: 'Um documento e identificado normalmente por:',
        options: [
          'Uma chave unica',
          'Uma planilha',
          'Um join',
          'Uma foreign key',
          'Um arquivo externo'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque planilha nao identifica documento.',
          'Errada porque join nao e identificador.',
          'Errada porque foreign key e relacional.',
          'Errada porque arquivo externo nao e identificador.'
        ]
      },
      {
        q: 'Qual vantagem de documentos com dados aninhados?',
        options: [
          'Reduz joins, agrupando dados relacionados',
          'Obriga normalizacao total',
          'Impede consultas por campo',
          'Proibe indices',
          'Aumenta dependencias entre tabelas'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque aninhamento evita normalizacao rigida.',
          'Errada porque consultas por campo sao possiveis.',
          'Errada porque indices podem existir.',
          'Errada porque nao ha tabelas.'
        ]
      },
      {
        q: 'Consultas em document DB geralmente podem filtrar por:',
        options: [
          'Campos internos do documento',
          'Somente pelo nome da colecao',
          'Somente pela data do servidor',
          'Somente por arquivos',
          'Somente por joins'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque filtros vao alem do nome da colecao.',
          'Errada porque data do servidor nao e o unico filtro.',
          'Errada porque arquivos nao sao o modelo.',
          'Errada porque joins nao sao o foco.'
        ]
      },
      {
        q: 'Qual caso de uso e tipico para banco de documentos?',
        options: [
          'CMS e catalogos com campos variaveis',
          'Planilhas simples',
          'Calculo cientifico sem persistencia',
          'Logs somente em arquivo',
          'Tabelas financeiras altamente normalizadas'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque planilhas nao escalam.',
          'Errada porque nao ha persistencia.',
          'Errada porque logs em arquivo nao sao banco.',
          'Errada porque normalizacao forte e SQL.'
        ]
      },
      {
        q: 'Como document DB lida com relacionamentos?',
        options: [
          'Prefere embedding e referencias',
          'Sempre usa joins complexos',
          'Nao permite referencias',
          'Apenas tabelas normalizadas',
          'Nao permite dados repetidos'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins nao sao o foco.',
          'Errada porque referencias sao possiveis.',
          'Errada porque tabelas normalizadas sao SQL.',
          'Errada porque pode haver repeticao por denormalizacao.'
        ]
      },
      {
        q: 'Qual exemplo e um banco de documentos?',
        options: [
          'MongoDB',
          'PostgreSQL',
          'MySQL',
          'Neo4j',
          'Redis'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque PostgreSQL e relacional.',
          'Errada porque MySQL e relacional.',
          'Errada porque Neo4j e grafo.',
          'Errada porque Redis e chave-valor.'
        ]
      },
      {
        q: 'Atualizacoes parciais em documentos:',
        options: [
          'Sao possiveis em muitos document DB',
          'Nunca sao possiveis',
          'Exigem sempre reescrever toda a base',
          'Sao proibidas por definicao',
          'So funcionam com SQL'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque atualizacoes parciais sao comuns.',
          'Errada porque nao precisa reescrever a base.',
          'Errada porque nao ha proibicao geral.',
          'Errada porque nao dependem de SQL.'
        ]
      },
      {
        q: 'Em document DB, a colecao se aproxima de:',
        options: [
          'Tabela, mas sem esquema fixo',
          'Uma view materializada',
          'Um indice unico',
          'Uma fila',
          'Um arquivo de log'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque view nao e o conceito principal.',
          'Errada porque indice e outra estrutura.',
          'Errada porque fila e outro modelo.',
          'Errada porque log nao e colecao.'
        ]
      }
    ]
  },
  {
    title: 'Banco de chave-valor',
    questions: [
      {
        q: 'Qual e o modelo basico de um banco chave-valor?',
        options: [
          'Pares de chave unica e valor',
          'Tabelas com joins',
          'Grafos com arestas',
          'Documentos JSON aninhados',
          'Colunas largas com familias'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins sao de SQL.',
          'Errada porque grafos sao outro modelo.',
          'Errada porque documentos sao outro modelo.',
          'Errada porque colunas largas sao outro modelo.'
        ]
      },
      {
        q: 'A consulta mais comum em chave-valor e:',
        options: [
          'GET por chave',
          'JOIN entre colecoes',
          'SCAN completo com filtros',
          'SQL com varias tabelas',
          'Busca por arestas'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins nao sao do modelo.',
          'Errada porque scan completo nao e ideal.',
          'Errada porque SQL nao e usado nesse modelo.',
          'Errada porque arestas sao de grafos.'
        ]
      },
      {
        q: 'Qual limitacao comum em chave-valor?',
        options: [
          'Consultas complexas por atributos',
          'Leitura por chave',
          'Alta disponibilidade',
          'Baixa latencia',
          'Replicacao'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque leitura por chave e o ponto forte.',
          'Errada porque alta disponibilidade e comum.',
          'Errada porque baixa latencia e um objetivo comum.',
          'Errada porque replicacao e comum.'
        ]
      },
      {
        q: 'Qual uso e tipico para chave-valor?',
        options: [
          'Cache e sessao',
          'Modelagem de grafos complexos',
          'Relatorios com joins',
          'Integridade referencial forte',
          'Consultas ad hoc'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque grafos sao outro modelo.',
          'Errada porque relatorios com joins sao de SQL.',
          'Errada porque integridade referencial nao e foco.',
          'Errada porque consultas ad hoc sao limitadas.'
        ]
      },
      {
        q: 'No modelo chave-valor, o valor e geralmente:',
        options: [
          'Opaco para o banco, tratado como blob',
          'Sempre uma tabela',
          'Sempre um documento JSON validado',
          'Sempre normalizado',
          'Sempre um grafo'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque valor nao e tabela.',
          'Errada porque JSON validado nao e obrigatorio.',
          'Errada porque normalizacao nao e foco.',
          'Errada porque grafo e outro modelo.'
        ]
      },
      {
        q: 'Uma propriedade essencial das chaves e:',
        options: [
          'Unicidade',
          'Ser sempre numerica',
          'Ser sempre ordenada',
          'Ser sempre um GUID',
          'Ser sempre composta'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque chave pode ser string.',
          'Errada porque ordenacao nao e obrigatoria.',
          'Errada porque GUID nao e obrigatorio.',
          'Errada porque chave simples e comum.'
        ]
      },
      {
        q: 'Escalabilidade em chave-valor normalmente usa:',
        options: [
          'Particionamento por chave',
          'Joins distribuido',
          'Normalizacao rigida',
          'Locks globais',
          'Apenas escala vertical'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins nao sao usados.',
          'Errada porque normalizacao nao e foco.',
          'Errada porque locks globais reduzem escala.',
          'Errada porque escala horizontal e comum.'
        ]
      },
      {
        q: 'Qual banco e tipico chave-valor?',
        options: [
          'Redis',
          'Cassandra',
          'MongoDB',
          'Neo4j',
          'PostgreSQL'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque Cassandra e colunas largas.',
          'Errada porque MongoDB e documento.',
          'Errada porque Neo4j e grafo.',
          'Errada porque PostgreSQL e relacional.'
        ]
      },
      {
        q: 'Transacoes em chave-valor sao geralmente:',
        options: [
          'Limitadas ou simplificadas',
          'Sempre ACID completas',
          'Inexistentes em qualquer caso',
          'Obrigatorias para cada operacao',
          'Mais fortes que em SQL'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque ACID completo nao e garantido.',
          'Errada porque algumas oferecem transacoes basicas.',
          'Errada porque nao sao obrigatorias.',
          'Errada porque SQL costuma ter transacoes mais fortes.'
        ]
      },
      {
        q: 'Qual afirmacao e correta sobre consultas?',
        options: [
          'Consultas por valor sao limitadas',
          'Consultas por valor sao o forte',
          'Suporta joins complexos',
          'Permite SQL padrao',
          'Nao precisa de chave'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque o forte e a chave.',
          'Errada porque joins nao existem no modelo.',
          'Errada porque SQL padrao nao e suportado.',
          'Errada porque a chave e essencial.'
        ]
      }
    ]
  },
  {
    title: 'Banco de colunas largas',
    questions: [
      {
        q: 'Qual o conceito central em bancos de colunas largas?',
        options: [
          'Familias de colunas',
          'Joins entre tabelas',
          'Documentos JSON',
          'Arestas e nos',
          'Arquivos CSV'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins nao sao o foco.',
          'Errada porque documentos sao outro modelo.',
          'Errada porque grafos sao outro modelo.',
          'Errada porque CSV nao e o modelo.'
        ]
      },
      {
        q: 'Bancos de colunas largas costumam ter linhas:',
        options: [
          'Esparsas e com colunas variaveis',
          'Com todas as colunas obrigatorias',
          'Sem chave primaria',
          'Sem indices',
          'Sempre fixas'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque colunas podem ser opcionais.',
          'Errada porque ha chave primaria/particao.',
          'Errada porque indices podem existir.',
          'Errada porque o modelo e flexivel.'
        ]
      },
      {
        q: 'Qual e um exemplo de banco de colunas largas?',
        options: [
          'Cassandra',
          'MongoDB',
          'Redis',
          'Neo4j',
          'MySQL'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque MongoDB e documento.',
          'Errada porque Redis e chave-valor.',
          'Errada porque Neo4j e grafo.',
          'Errada porque MySQL e relacional.'
        ]
      },
      {
        q: 'Qual tipo de dado se beneficia do modelo de colunas largas?',
        options: [
          'Series temporais e grandes volumes de escrita',
          'Relacoes complexas entre entidades',
          'Somente dados pequenos',
          'Arquivos binarios sem indice',
          'Planilhas locais'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque relacoes complexas sao melhor em grafos.',
          'Errada porque o modelo escala para grandes volumes.',
          'Errada porque arquivos sem indice nao e o foco.',
          'Errada porque planilhas nao escalam.'
        ]
      },
      {
        q: 'Como as consultas geralmente sao feitas em Cassandra/HBase?',
        options: [
          'Por chave de particao',
          'Por joins entre tabelas',
          'Por SQL padrao com joins',
          'Por arestas de grafo',
          'Por caminho de arquivo'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins nao sao suportados.',
          'Errada porque SQL padrao nao e usado.',
          'Errada porque arestas sao de grafos.',
          'Errada porque caminho de arquivo nao e o modelo.'
        ]
      },
      {
        q: 'Denormalizacao em colunas largas e comum porque:',
        options: [
          'O modelo otimiza leituras por chave',
          'Joins sao muito eficientes',
          'O esquema e rigido como SQL',
          'Nao existe replicacao',
          'Nao existe particionamento'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins nao sao o foco.',
          'Errada porque o esquema e flexivel.',
          'Errada porque replicacao e comum.',
          'Errada porque particionamento e essencial.'
        ]
      },
      {
        q: 'O termo "wide row" significa:',
        options: [
          'Uma linha com muitas colunas possiveis',
          'Uma tabela com poucas linhas',
          'Um documento aninhado',
          'Uma aresta de grafo',
          'Um indice unico'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque nao e sobre poucas linhas.',
          'Errada porque documento nao e o modelo.',
          'Errada porque grafo nao e o modelo.',
          'Errada porque indice nao define wide row.'
        ]
      },
      {
        q: 'Qual afirmacao sobre joins em colunas largas e correta?',
        options: [
          'Joins nao sao suportados ou sao limitados',
          'Joins sao o ponto forte',
          'Sempre usa SQL padrao',
          'Joins sao obrigatorios',
          'Joins sao mais rapidos que em SQL'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque joins nao sao foco.',
          'Errada porque SQL padrao nao e a interface principal.',
          'Errada porque joins nao sao obrigatorios.',
          'Errada porque esse nao e o objetivo do modelo.'
        ]
      },
      {
        q: 'Em Cassandra, a consistencia e:',
        options: [
          'Tunable por nivel de consistencia',
          'Sempre forte por padrao',
          'Inexistente',
          'Somente eventual e fixa',
          'Igual ao CAP CA'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque Cassandra permite escolha de consistencia.',
          'Errada porque consistencia existe, mas e configuravel.',
          'Errada porque nao e fixa; e tunable.',
          'Errada porque CA nao se aplica com particao.'
        ]
      },
      {
        q: 'Qual e uma caracteristica de colunas largas?',
        options: [
          'Alta taxa de escrita distribuida',
          'Baixa escalabilidade',
          'Sem replicacao',
          'Sem particionamento',
          'Sem consistencia configuravel'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque sao feitos para escalar.',
          'Errada porque replicacao e comum.',
          'Errada porque particionamento e essencial.',
          'Errada porque a consistencia pode ser configurada.'
        ]
      }
    ]
  },
  {
    title: 'Banco de grafos',
    questions: [
      {
        q: 'Qual e o modelo basico de um banco de grafos?',
        options: [
          'Nos e arestas',
          'Tabelas e joins',
          'Chaves e valores',
          'Documentos JSON',
          'Colunas largas'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque tabelas e joins sao SQL.',
          'Errada porque chave-valor e outro modelo.',
          'Errada porque documentos sao outro modelo.',
          'Errada porque colunas largas sao outro modelo.'
        ]
      },
      {
        q: 'Qual caso de uso e mais adequado para grafos?',
        options: [
          'Recomendacoes e redes sociais',
          'Planilhas locais',
          'Logs simples em arquivo',
          'Cache de sessao',
          'Tabelas financeiras'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque planilhas nao escalam.',
          'Errada porque logs simples nao exigem grafos.',
          'Errada porque cache e chave-valor.',
          'Errada porque tabelas financeiras sao SQL.'
        ]
      },
      {
        q: 'O que e um "property graph"?',
        options: [
          'Nos e arestas com propriedades',
          'Uma tabela com colunas',
          'Um documento JSON',
          'Um indice invertido',
          'Um arquivo CSV'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque tabelas sao SQL.',
          'Errada porque documento nao e o modelo.',
          'Errada porque indice invertido nao e grafo.',
          'Errada porque CSV nao e grafo.'
        ]
      },
      {
        q: 'Qual banco e exemplo de grafo?',
        options: [
          'Neo4j',
          'PostgreSQL',
          'MongoDB',
          'Redis',
          'Cassandra'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque PostgreSQL e relacional.',
          'Errada porque MongoDB e documento.',
          'Errada porque Redis e chave-valor.',
          'Errada porque Cassandra e colunas largas.'
        ]
      },
      {
        q: 'Consultas em grafos geralmente usam:',
        options: [
          'Linguagens como Cypher ou Gremlin',
          'SQL padrao com joins',
          'Apenas GET por chave',
          'Somente regex em texto',
          'Somente arquivos CSV'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque SQL nao e a principal linguagem.',
          'Errada porque grafos nao se limitam a GET.',
          'Errada porque regex nao e consulta de grafo.',
          'Errada porque CSV nao e o modelo.'
        ]
      },
      {
        q: 'Qual vantagem de grafos sobre joins complexos?',
        options: [
          'Traversais profundas mais eficientes',
          'Menos informacao sobre relacoes',
          'Sem necessidade de indices',
          'Nao permite propriedades',
          'Nao escala horizontalmente'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque grafos representam bem relacoes.',
          'Errada porque indices ainda podem ser usados.',
          'Errada porque grafos suportam propriedades.',
          'Errada porque alguns grafos escalam horizontalmente.'
        ]
      },
      {
        q: 'Arestas em grafos podem:',
        options: [
          'Ter propriedades e direcao',
          'Nao ter informacao alguma',
          'Ser apenas numeros',
          'Existir sem nos',
          'Substituir chaves'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque arestas podem ter propriedades.',
          'Errada porque nao se limitam a numeros.',
          'Errada porque arestas conectam nos.',
          'Errada porque chaves nao sao substituidas por arestas.'
        ]
      },
      {
        q: 'Uma consulta de caminho mais curto e tipica em:',
        options: [
          'Banco de grafos',
          'Banco chave-valor',
          'Banco relacional simples',
          'Arquivo CSV',
          'Cache local'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque chave-valor nao suporta traversais.',
          'Errada porque relacional nao e eficiente para isso.',
          'Errada porque CSV nao tem semantica de grafo.',
          'Errada porque cache nao e para isso.'
        ]
      },
      {
        q: 'Sobre consistencia em grafos, e correto dizer:',
        options: [
          'Alguns grafos oferecem transacoes ACID',
          'Grafos nunca suportam transacoes',
          'Grafos sao sempre AP',
          'Grafos nao armazenam propriedades',
          'Grafos nao suportam indices'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque varios grafos tem transacoes.',
          'Errada porque depende do produto.',
          'Errada porque grafos podem armazenar propriedades.',
          'Errada porque grafos suportam indices.'
        ]
      },
      {
        q: 'Qual exemplo de uso de grafos em negocio?',
        options: [
          'Deteccao de fraude por relacoes',
          'Lista simples de tarefas',
          'Armazenar logs em texto',
          'Cache de chave-valor',
          'Planilha de gastos'
        ],
        correct: 0,
        reasons: [
          'Correta.',
          'Errada porque lista simples nao exige grafo.',
          'Errada porque logs em texto nao exigem grafo.',
          'Errada porque cache nao e grafo.',
          'Errada porque planilha nao e grafo.'
        ]
      }
    ]
  }
];
