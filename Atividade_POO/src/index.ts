import Presidente from './Presidente.js'
import Governador from './Governador.js'
import DeputadoEstadual from './DeputadoEstadual.js'
import DeputadoFederal from './DeputadoFederal.js'
import Senador from './Senador.js'

let presidente = new  Presidente(
    'Luiz Inácio Lula da Silva',
    'PT',
    'Federal',
    'Executivo',
    'Palácio do Planalto',
    'Praça dos três poderes, Brasília - DF',
    463666.19,
    [
        'Bolsa Família', 'Reforma Tributária'
    ],
    38
)

presidente.ImprimeInfo()

let governador1 = new Governador(
    'Raquel Texeira Lyra Lucena',
    'PSD',
    'Estadual',
    'Executivo',
    'Palácio do Campo das Princesas',
    'Praça da república, Recife - PE',
    60000.8,
    [
        'Segurança Pública', 'Infraestrutura Viária'
    ],
    30,
    'Pernambuco'
)

let governador2 = new Governador(
    'Tarcísio de Freitas',
    'Republicanos',
    'Estadual',
    'Executivo',
    'Palácio dos Bandeirantes ( Gabinete do Governador)',
    'Avenida Morumbi, 4500, Morumbi - SP',
    36301.53,
    [
        'Túnel Imerso Guarujá', 'Tabela SUS Paulista'
    ],
    25,
    'São Paulo'
)

governador1.ImprimeInfo()
governador2.ImprimeInfo()

let deputadoestadual1 = new DeputadoEstadual(
    'Joel da Harpa',
    'PL',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa',
    'Edíficio Governador Miguel Arraes de Alencar, Rua da União, Boa Vista - PE',
    29469.99,
    [
        'Segurança e Proteção', 'Transporte e Mobilidade'
    ],
    'Pernambuco',
    [
        'Comissão de Segurança Pública', 'Comissão de Defesa Social'
    ]
)

let deputadoestadual2 = new DeputadoEstadual(
    'Álvaro Porto',
    'PSDB',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa de Pernambuco',
    'Palácio Joaquim Nabuco, Rua da Aurora, 631, Recife - PE',
    29469.99,
    [
        'Sinalização de produtos originários da agricultura familiar', 'Incentivo às micro e pequenas empresas'
    ],
    'Pernambuco',
    [
        'Comissão de Constituição, Legislação e Justiça', 'Comissão de Agricultura, Pecuária e Desenvolvimento Rural'
    ]
)

let deputadoestadual3 = new DeputadoEstadual(
    'Adalto Santos',
    'PP',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa de Pernambuco',
    'Palácio Joaquim Nabuco, Rua da Aurora, 631, Recife - PE',
    29469.99,
    [
        'Penalidades para fornecimento de cigarros eletrônicos a crianças e adolescentes', 'Medidas relacionadas à saúde pública'
    ],
    'Pernambuco',
    [
        'Comissão de Saúde e Assistência Social', 'Comissão de Constituição, Legislação e Justiça'
    ]
)

let deputadoestadual4 = new DeputadoEstadual(
    'André do Prado',
    'PL',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa do Estado de São Paulo',
    'Palácio 9 de Julho, Avenida Pedro Álvares Cabral, 201, São Paulo - SP',
    29469.99,
    [
        'Projeto de Lei nº 523/2023', 'Propostas relacionadas à educação, infraestrutura e saúde'
    ],
    'São Paulo',
    [
        'Comissão de Constituição, Justiça e Redação', 'Comissão de Saúde'
    ]
)

let deputadoestadual5 = new DeputadoEstadual(

    'Alex Madureira',
    'PL',
    'Estadual',
    'Legislativo',
    'Assembleia Legislativa do Estado de São Paulo',
    'Palácio 9 de Julho, Avenida Pedro Álvares Cabral, 201, São Paulo - SP',
    29469.99,
    [
        'PL 77/2026 - Política Estadual de Acesso ao Teste Genético BRCA1 e BRCA2', 'PL 196/2026 - Declaração de utilidade pública da Associação Cristã Servir', 'PL 224/2026 - Estações de recarga para veículos elétricos'
    ],
    'São Paulo',
    [
        'Comissão de Administração Pública e Relações do Trabalho', 'Comissão de Constituição, Justiça e Redação', 'Comissão de Finanças, Orçamento e Planejamento'
    ]

)

deputadoestadual1.ImprimeInfo()
deputadoestadual2.ImprimeInfo()
deputadoestadual3.ImprimeInfo()
deputadoestadual4.ImprimeInfo()
deputadoestadual5.ImprimeInfo()

let deputadofederal1 = new DeputadoFederal(
    'Felipe Carreras',
    'PSB',
    'Federal',
    'Legislativo',
    'Câmara dos Deputados',
    ' Palácio do Congresso Nacional',
    46366.19,
    [
        'Educação Alimentar', 'Nutricional nas escolas'
    ],
    'PSB'
)

let deputadofederal2 = new DeputadoFederal(
"Augusto Coutinho",
"Republicanos",
"Federal",
"Legislativo",
"Câmara dos Deputados",
"Praça dos Três Poderes, Brasília - DF",
46366.19,
[
    "Direito Digital",
    "Regulamentação dos Trabalhadores por Aplicativo",
    "Sistema Portuário Brasileiro"
],
"Republicanos")

let deputadofederal3 = new DeputadoFederal(

    "Carlos Veras",
    "PT",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    [
        "Propostas sobre agricultura familiar",
        "Propostas sobre trabalhadores rurais",
        "Propostas sobre saúde e assistência social"
    ],
    "PSB"
)  
let deputadofederal4 = new DeputadoFederal(
    "Adriana Ventura",
    "NOVO",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    [
        "Educação",
        "Inteligência Artificial",
        "Saúde"
    ],
    "NOVO"
)

let deputadofederal5 = new DeputadoFederal(
    "Alexandre Leite",
    "UNIÃO",
    "Federal",
    "Legislativo",
    "Câmara dos Deputados",
    "Praça dos Três Poderes, Brasília - DF",
    46366.19,
    [
        "Segurança Pública",
        "Infraestrutura",
        "Desenvolvimento Econômico"
    ],
    "UNIÃO"
)     
deputadofederal1.ImprimeInfo()
deputadofederal2.ImprimeInfo()
deputadofederal3.ImprimeInfo()
deputadofederal4.ImprimeInfo()
deputadofederal5.ImprimeInfo()

let senador1 = new Senador(
    'Humberto Costa',
    'PT',
    'Federal',
    'Legislativo',
    'Senado Federal',
    'Praça dos Três Poderes, Brasília - DF',
    46366.19,
    [
        'Projetos de saúde pública', 'Projetos relacionados ao Sistema Único de Saúde', 'Projetos de direitos sociais'
    ],
    'Pernambuco',
    '2018'
)

let senador2 = new Senador(
    'Teresa Leitão',
    'PT',
    'Federal',
    'Legislativo',
    'Senado Federal',
    'Praça dos Três Poderes, Brasília - DF',
    46366.19,
    [
        'Projetos relacionados à educação', 'Projetos de valorização dos profissionais da educação', 'Projetos de direitos sociais'
    ],
    'Pernambuco',
    '2022'
)

let senador3 = new Senador(
    'Astronauta Marcos Pontes',
    'PL',
    'Federal',
    'Legislativo',
    'Senado Federal',
    'Praça dos Três Poderes, Brasília - DF',
    46366.19,
    [
        'PL 2051/2026', 'PL 2794/2026', 'PL 5186/2026'
    ],
    'São Paulo',
    '2022'
)

senador1.ImprimeInfo()
senador2.ImprimeInfo()
senador3.ImprimeInfo()