import React, { useState } from 'react';
import { ChevronRight, BookOpen, Check, Menu, X, Search } from 'lucide-react';

const eBookContent = {
  titulo: 'Guia Completo para Mães e Pais de Primeira Viagem',
  subtitulo: 'Tudo o que você precisa saber da descoberta da gravidez até os primeiros anos do bebê',
  
  capitulos: [
    {
      id: 1,
      numero: 1,
      titulo: 'Descobrindo a Gravidez',
      conteudo: `
        <h3>Os Primeiros Sinais</h3>
        <ul class="sinais">
          <li>Atraso menstrual</li>
          <li>Sensibilidade nos seios</li>
          <li>Enjoos</li>
          <li>Cansaço excessivo</li>
          <li>Mudanças de humor</li>
        </ul>
        
        <h3>Confirmando a Gravidez</h3>
        
        <h4>Teste de Farmácia</h4>
        <div class="vantagens">
          <strong>Vantagens:</strong>
          <ul>
            <li>✓ Rápido</li>
            <li>✓ Fácil acesso</li>
            <li>✓ Baixo custo</li>
          </ul>
        </div>
        
        <h4>Exame de Sangue (Beta HCG)</h4>
        <div class="vantagens">
          <strong>Vantagens:</strong>
          <ul>
            <li>✓ Mais preciso</li>
            <li>✓ Detecta precocemente</li>
          </ul>
        </div>
      `,
      checklist: [
        'Fazer teste de gravidez',
        'Marcar consulta médica',
        'Iniciar acompanhamento pré-natal',
        'Informar o parceiro',
        'Começar hábitos saudáveis'
      ],
      exemplo: 'Mariana descobriu a gravidez com apenas 5 semanas após um atraso menstrual. Ao iniciar o pré-natal cedo, conseguiu acompanhar todo o desenvolvimento do bebê com segurança.'
    },
    {
      id: 2,
      numero: 2,
      titulo: 'Preparação Emocional dos Pais',
      conteudo: `
        <p>A gravidez provoca mudanças físicas e emocionais significativas. É importante reconhecer e validar esses sentimentos.</p>
        
        <h3>Sentimentos Comuns</h3>
        <ul>
          <li><strong>Alegria</strong> - A expectativa do novo membro da família</li>
          <li><strong>Medo</strong> - Preocupações sobre o desconhecido</li>
          <li><strong>Ansiedade</strong> - Incertezas sobre a capacidade de ser pai/mãe</li>
          <li><strong>Insegurança</strong> - Dúvidas sobre estar preparado</li>
        </ul>
        
        <h3>Dicas Práticas</h3>
        <div class="dicas">
          <ul>
            <li>Conversar abertamente com o parceiro</li>
            <li>Participar de grupos de apoio</li>
            <li>Evitar excesso de informações alarmantes</li>
            <li>Buscar apoio profissional se necessário</li>
          </ul>
        </div>
      `,
      checklist: [
        'Conversar com o parceiro sobre sentimentos',
        'Procurar grupos de apoio na comunidade',
        'Assistir a aulas de preparação para o parto',
        'Realizar exercícios de meditação/relaxamento',
        'Buscar apoio profissional se necessário'
      ]
    },
    {
      id: 3,
      numero: 3,
      titulo: 'Cuidados Durante a Gestação',
      conteudo: `
        <h3>O Que Fazer ✓</h3>
        <ul class="fazer">
          <li>✓ Consultas regulares com o obstetra</li>
          <li>✓ Dormir bem (7-9 horas)</li>
          <li>✓ Hidratação adequada (2-3 litros diários)</li>
          <li>✓ Atividade física autorizada pelo médico</li>
          <li>✓ Alimentação equilibrada e nutritiva</li>
        </ul>
        
        <h3>O Que Evitar ✗</h3>
        <ul class="evitar">
          <li>✗ Cigarro</li>
          <li>✗ Bebidas alcoólicas</li>
          <li>✗ Automedicação</li>
          <li>✗ Excesso de cafeína (limite a 200mg/dia)</li>
          <li>✗ Alimentos não pasteurizados ou crus</li>
        </ul>
      `,
      checklist: [
        'Agendar consulta pré-natal mensal',
        'Iniciar suplementação de ácido fólico',
        'Informar-se sobre exercícios seguros na gravidez',
        'Eliminar hábitos prejudiciais',
        'Manter-se hidratada'
      ]
    },
    {
      id: 4,
      numero: 4,
      titulo: 'Alimentação da Gestante',
      conteudo: `
        <h3>Nutrientes Essenciais</h3>
        <table class="tabela-nutricao">
          <tr>
            <th>Nutriente</th>
            <th>Função Principal</th>
            <th>Fontes</th>
          </tr>
          <tr>
            <td><strong>Ferro</strong></td>
            <td>Previne anemia</td>
            <td>Carnes vermelhas, feijão, espinafre</td>
          </tr>
          <tr>
            <td><strong>Cálcio</strong></td>
            <td>Formação óssea do bebê</td>
            <td>Leite, queijo, iogurte, brócolis</td>
          </tr>
          <tr>
            <td><strong>Ácido Fólico</strong></td>
            <td>Desenvolvimento neurológico</td>
            <td>Folhas verdes, cereais integrais</td>
          </tr>
          <tr>
            <td><strong>Proteínas</strong></td>
            <td>Crescimento fetal</td>
            <td>Carnes, ovos, leguminosas</td>
          </tr>
          <tr>
            <td><strong>Ômega 3</strong></td>
            <td>Desenvolvimento cerebral</td>
            <td>Peixes, sementes, óleos vegetais</td>
          </tr>
        </table>
        
        <h3>Cardápio Exemplo</h3>
        <div class="cardapio">
          <p><strong>Café da manhã:</strong> Leite, pão integral, fruta fresca</p>
          <p><strong>Lanche:</strong> Iogurte natural com granola</p>
          <p><strong>Almoço:</strong> Arroz, feijão, carne magra, salada variada</p>
          <p><strong>Lanche:</strong> Fruta ou sanduíche natural</p>
          <p><strong>Jantar:</strong> Sopa nutritiva ou peixe com legumes</p>
        </div>
      `,
      checklist: [
        'Aumentar ingestão de ácido fólico',
        'Consumir ferro regularmente',
        'Beber pelo menos 2 litros de água',
        'Fazer 5-6 refeições pequenas por dia',
        'Consultar nutricionista se possível'
      ]
    },
    {
      id: 5,
      numero: 5,
      titulo: 'Exames Importantes',
      conteudo: `
        <h3>Primeiro Trimestre (0-12 semanas)</h3>
        <ul>
          <li><strong>Beta HCG:</strong> Confirma a gravidez</li>
          <li><strong>Ultrassom Inicial:</strong> Confirma viabilidade</li>
          <li><strong>Testes Laboratoriais:</strong> Tipo sanguíneo, sorologia</li>
        </ul>
        
        <h3>Segundo Trimestre (13-27 semanas)</h3>
        <ul>
          <li><strong>Ultrassom Morfológico:</strong> Avalia anomalias congênitas</li>
          <li><strong>Teste de Tolerância à Glicose:</strong> Detecta diabetes gestacional</li>
          <li><strong>Sorologia:</strong> Repetição de testes se necessário</li>
        </ul>
        
        <h3>Terceiro Trimestre (28-40 semanas)</h3>
        <ul>
          <li><strong>Avaliação de Crescimento Fetal:</strong> Via ultrassom</li>
          <li><strong>Monitoramento:</strong> Batimentos cardíacos do bebê</li>
          <li><strong>Avaliação de Posição:</strong> Cefálica ou pélvica</li>
        </ul>
      `,
      checklist: [
        'Realizar ultrassom do primeiro trimestre',
        'Fazer exames de sangue indicados',
        'Agendar ultrassom morfológico',
        'Teste de tolerância à glicose',
        'Últimas avaliações antes do parto'
      ]
    },
    {
      id: 6,
      numero: 6,
      titulo: 'Montando o Enxoval sem Gastar Muito',
      conteudo: `
        <h3>Itens Realmente Necessários</h3>
        
        <h4>Roupas</h4>
        <ul>
          <li>8 bodies de manga curta</li>
          <li>8 macacões</li>
          <li>6 pares de meias</li>
          <li>Casacos/blusas para clima frio</li>
          <li>Saída de maternidade</li>
        </ul>
        
        <h4>Higiene e Banho</h4>
        <ul>
          <li>Fraldas (quantidade grande)</li>
          <li>Lenços umedecidos hipoalergênicos</li>
          <li>Toalhas de banho (3-4)</li>
          <li>Sabonete e shampoo específicos</li>
          <li>Termômetro digital</li>
        </ul>
        
        <h3>Como Economizar 💰</h3>
        <div class="economizar">
          <ul>
            <li>✓ Comprar aos poucos, acompanhando promoções</li>
            <li>✓ Aproveitar descontos em períodos sazonais</li>
            <li>✓ Ganhar presentes em chá de bebê</li>
            <li>✓ Comprar usados em bom estado</li>
            <li>✓ Compartilhar com outras mães</li>
            <li>✓ Focar no básico primeiro</li>
          </ul>
        </div>
      `,
      checklist: [
        'Fazer lista de itens essenciais',
        'Pesquisar preços em diferentes lojas',
        'Aproveitar promoções e descontos',
        'Organizar chá de bebê',
        'Comprar itens com antecedência'
      ]
    },
    {
      id: 7,
      numero: 7,
      titulo: 'Preparando o Quarto do Bebê',
      conteudo: `
        <h3>Itens Principais</h3>
        <ul>
          <li><strong>Berço certificado</strong> - Seguro e confortável</li>
          <li><strong>Cômoda</strong> - Para armazenar roupas</li>
          <li><strong>Poltrona de amamentação</strong> - Conforto da mãe</li>
          <li><strong>Luminária suave</strong> - Para noites</li>
          <li><strong>Cortinas blackout</strong> - Regulam luz e temperatura</li>
        </ul>
        
        <h3>Segurança Essencial</h3>
        <ul>
          <li>Protetores de tomada</li>
          <li>Móveis fixados na parede</li>
          <li>Nada solto dentro do berço (lençol, almofada)</li>
          <li>Piso antiderrapante</li>
          <li>Temperatura adequada (18-20°C)</li>
          <li>Sem correntes ou objetos que ofereçam risco</li>
        </ul>
      `,
      checklist: [
        'Escolher e comprar berço certificado',
        'Instalar protetores de tomada',
        'Fixar móveis na parede',
        'Aplicar cortinas blackout',
        'Testar temperatura do quarto'
      ]
    },
    {
      id: 8,
      numero: 8,
      titulo: 'O Que Levar para a Maternidade',
      conteudo: `
        <h3>Mala da Mãe</h3>
        <div class="checklist-box">
          <ul>
            <li>☐ Documentos (RG, CPF, cartão de plano de saúde)</li>
            <li>☐ Roupas confortáveis e fáceis de tirar</li>
            <li>☐ Produtos de higiene pessoal</li>
            <li>☐ Chinelo antiderrapante</li>
            <li>☐ Sutiã de amamentação (2-3)</li>
            <li>☐ Camisetas largas (2-3)</li>
            <li>☐ Roupa confortável para ir embora</li>
          </ul>
        </div>
        
        <h3>Mala do Bebê</h3>
        <div class="checklist-box">
          <ul>
            <li>☐ Macacões (6-8)</li>
            <li>☐ Bodies (6-8)</li>
            <li>☐ Meias (8 pares)</li>
            <li>☐ Fraldas (a maternidade geralmente fornece)</li>
            <li>☐ Mantas (2-3)</li>
            <li>☐ Saída de maternidade (2 tamanhos)</li>
            <li>☐ Gorrinhos e mitenes</li>
          </ul>
        </div>
      `,
      checklist: [
        'Preparar mala da mãe',
        'Separar roupas do bebê',
        'Reunir documentos',
        'Deixar malas prontas a partir da 36ª semana',
        'Informar parceiro sobre localização das malas'
      ]
    },
    {
      id: 9,
      numero: 9,
      titulo: 'Parto Normal e Cesárea',
      conteudo: `
        <h3>Comparação Entre Tipos de Parto</h3>
        
        <table class="tabela-parto">
          <tr>
            <th>Aspecto</th>
            <th>Parto Normal</th>
            <th>Cesárea</th>
          </tr>
          <tr>
            <td>Recuperação</td>
            <td>Mais rápida</td>
            <td>Mais lenta</td>
          </tr>
          <tr>
            <td>Risco cirúrgico</td>
            <td>Menor</td>
            <td>Procedimento cirúrgico</td>
          </tr>
          <tr>
            <td>Tempo internação</td>
            <td>Menor (12-24h)</td>
            <td>Maior (2-3 dias)</td>
          </tr>
          <tr>
            <td>Aderências</td>
            <td>Ausentes</td>
            <td>Possíveis</td>
          </tr>
          <tr>
            <td>Próximas gestações</td>
            <td>Sem restrições</td>
            <td>VBAC possível</td>
          </tr>
        </table>
        
        <p><strong>Importante:</strong> A escolha do tipo de parto deve ser discutida com seu obstetra, considering sua saúde e particularidades.</p>
      `,
      checklist: [
        'Discutir opções de parto com obstetra',
        'Assistir aula de preparação para o parto',
        'Definir plano de parto',
        'Preparar-se fisicamente',
        'Resolver dúvidas sobre recuperação'
      ]
    },
    {
      id: 10,
      numero: 10,
      titulo: 'Primeiros Dias com o Recém-Nascido',
      conteudo: `
        <p>Os primeiros dias são desafiadores, mas estabelecer uma rotina básica ajuda muito.</p>
        
        <h3>Rotina Básica do Bebê</h3>
        <ul>
          <li><strong>Alimentação:</strong> A cada 2-3 horas (8-10 vezes/dia)</li>
          <li><strong>Troca de fraldas:</strong> Antes e depois de cada alimentação</li>
          <li><strong>Sono:</strong> Esperado entre alimentações (até 16-17 horas/dia)</li>
          <li><strong>Banho:</strong> Uma vez por dia (temperatura 37°C)</li>
          <li><strong>Higiene do cordão umbilical:</strong> Álcool 70% 3x/dia</li>
        </ul>
        
        <h3>Sinais Importantes</h3>
        <div class="atencao">
          <p><strong>Procure ajuda médica se:</strong></p>
          <ul>
            <li>Febre acima de 38°C</li>
            <li>Recusa de alimentação</li>
            <li>Amarelecimento da pele excessivo</li>
            <li>Respiração rápida ou dificuldade</li>
            <li>Sangramento no cordão</li>
          </ul>
        </div>
      `,
      checklist: [
        'Aprender posição correta de amamentação',
        'Treinar troca de fraldas',
        'Preparar ambiente seguro para dormir',
        'Organizar checklist de sinais de alerta',
        'Identificar contatos de emergência'
      ]
    },
    {
      id: 11,
      numero: 11,
      titulo: 'Amamentação',
      conteudo: `
        <h3>Benefícios para o Bebê</h3>
        <ul>
          <li>✓ Proteção imunológica completa</li>
          <li>✓ Melhor desenvolvimento cerebral</li>
          <li>✓ Reduz risco de alergias</li>
          <li>✓ Fortalece vínculo com a mãe</li>
          <li>✓ Nutrição completa e personalizada</li>
        </ul>
        
        <h3>Benefícios para a Mãe</h3>
        <ul>
          <li>✓ Recuperação pós-parto mais rápida</li>
          <li>✓ Reduz risco de câncer de mama</li>
          <li>✓ Fortalecimento do vínculo emocional</li>
          <li>✓ Economia financeira significativa</li>
        </ul>
        
        <h3>Dicas Práticas</h3>
        <ul>
          <li>Procure posição confortável (sentada ou deitada)</li>
          <li>Barriguinha do bebê encostada na sua</li>
          <li>Livre-se de roupas apertadas</li>
          <li>Use almofada de amamentação se necessário</li>
          <li>Procure consultoria de lactação se tiver dificuldades</li>
        </ul>
      `,
      checklist: [
        'Aprender técnica correta de amamentação',
        'Conhecer sinais de pega correta',
        'Ter número de lactante disponível',
        'Usar protetor de mamilo se necessário',
        'Aprender ordenha manual se preciso'
      ]
    },
    {
      id: 12,
      numero: 12,
      titulo: 'Sono do Bebê',
      conteudo: `
        <h3>Quantidades Recomendadas de Sono</h3>
        
        <table class="tabela-sono">
          <tr>
            <th>Idade</th>
            <th>Total de Sono Diário</th>
            <th>Obs.</th>
          </tr>
          <tr>
            <td>0-3 meses</td>
            <td>14 a 17 horas</td>
            <td>Sono fragmentado</td>
          </tr>
          <tr>
            <td>4-11 meses</td>
            <td>12 a 15 horas</td>
            <td>Começam ciclos mais regulares</td>
          </tr>
          <tr>
            <td>1-2 anos</td>
            <td>11 a 14 horas</td>
            <td>Rotina mais estabelecida</td>
          </tr>
        </table>
        
        <h3>Higiene do Sono</h3>
        <ul>
          <li>Ambiente escuro e silencioso</li>
          <li>Temperatura adequada (18-20°C)</li>
          <li>Berço seguro e firme</li>
          <li>Rotina consistente antes de dormir</li>
          <li>Ruído branco pode ajudar</li>
        </ul>
      `,
      checklist: [
        'Estabelecer rotina de sono',
        'Preparar ambiente adequado',
        'Reconhecer sinais de cansaço',
        'Evitar superestimulação antes de dormir',
        'Documentar padrão de sono'
      ]
    },
    {
      id: 13,
      numero: 13,
      titulo: 'Troca de Fraldas e Higiene',
      conteudo: `
        <h3>Passo a Passo da Troca de Fraldas</h3>
        
        <div class="passo-a-passo">
          <ol>
            <li><strong>Reunir materiais:</strong> Fralda limpa, lenços, pomada</li>
            <li><strong>Deitar o bebê:</strong> Em superfície segura e limpa</li>
            <li><strong>Remover fralda suja:</strong> Com cuidado</li>
            <li><strong>Limpar corretamente:</strong> De frente para trás (meninas)</li>
            <li><strong>Secar bem:</strong> Evita assaduras</li>
            <li><strong>Aplicar pomada:</strong> Se necessário, nas dobras</li>
            <li><strong>Colocar nova fralda:</strong> Ajustada e confortável</li>
            <li><strong>Descartar corretamente:</strong> Fralda suja</li>
          </ol>
        </div>
        
        <h3>Higiene Diária</h3>
        <ul>
          <li>Banho morno diário (5-10 minutos)</li>
          <li>Lavar rosto e mãos regularmente</li>
          <li>Limpar ouvidos com cotonete macio</li>
          <li>Limpar narinas se necessário</li>
          <li>Secar bem todas as dobrinhas</li>
        </ul>
      `,
      checklist: [
        'Manter fraldas acessíveis',
        'Ter lenços e pomada à mão',
        'Aprender técnica correta de limpeza',
        'Usar água morna no banho',
        'Secar cuidadosamente todas as áreas'
      ]
    },
    {
      id: 14,
      numero: 14,
      titulo: 'Vacinas e Consultas Pediátricas',
      conteudo: `
        <h3>Vacinas Essenciais</h3>
        <ul>
          <li><strong>BCG:</strong> Ao nascer (tuberculose)</li>
          <li><strong>Hepatite B:</strong> Ao nascer e reforços</li>
          <li><strong>Pentavalente:</strong> 2, 4, 6 meses (5 doenças)</li>
          <li><strong>Rotavírus:</strong> 2 e 4 meses</li>
          <li><strong>Pneumocócica:</strong> 2, 4, 6 meses</li>
          <li><strong>Meningocócica:</strong> Diversas doses conforme calendário</li>
          <li><strong>Poliomielite:</strong> 2, 4, 6 meses</li>
        </ul>
        
        <h3>Cronograma de Consultas</h3>
        <ul>
          <li>1ª semana: Avaliação geral</li>
          <li>1 mês: Acompanhamento</li>
          <li>3 meses: Verificação de desenvolvimento</li>
          <li>6 meses: Avaliação completa</li>
          <li>Mensalmente até 12 meses</li>
          <li>A cada 2-3 meses do 1º ao 2º ano</li>
        </ul>
      `,
      checklist: [
        'Conhecer calendário de vacinação',
        'Agendar consultas pediátricas regulares',
        'Manter cartão de vacinação atualizado',
        'Pesquisar pediatra de confiança',
        'Tirar dúvidas sobre desenvolvimento'
      ]
    },
    {
      id: 15,
      numero: 15,
      titulo: 'Desenvolvimento do Bebê Mês a Mês',
      conteudo: `
        <h3>Marcos do Desenvolvimento</h3>
        
        <table class="tabela-desenvolvimento">
          <tr>
            <th>Período</th>
            <th>Marcos Esperados</th>
          </tr>
          <tr>
            <td><strong>1º mês</strong></td>
            <td>Fixação de olhar, reconhecimento de vozes, reflexos presentes</td>
          </tr>
          <tr>
            <td><strong>3º mês</strong></td>
            <td>Sorrisos frequentes, movimento de cabeça, vocalização</td>
          </tr>
          <tr>
            <td><strong>6º mês</strong></td>
            <td>Sentar com apoio, alcançar 
