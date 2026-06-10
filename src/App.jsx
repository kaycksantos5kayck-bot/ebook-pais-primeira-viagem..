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
          <li><strong>Ansiedade</strong> - Incertezas sobre a capacidade de ser pai
          
