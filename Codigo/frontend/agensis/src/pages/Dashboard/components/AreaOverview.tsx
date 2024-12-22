import { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Alert,
  AlertTitle,
  AlertDescription,
} from '@/components/ui/alert';

import { useNavigate } from 'react-router-dom';
interface AreaoverviewProps {
  loading: boolean;
}

interface ItemProjeto {
  id: string;
  nome: string;
  status: 'Novo' | 'Em Análise' | 'Aguardando Cliente' | 'Aprovado' | 'Recusado' | 'Em Progresso' | 'Concluído' | 'Cancelado';
  responsavel?: string;
  valor?: number;
  prazo?: string;
  data_finalizacao?: string;
}

export default function Areaoverview({ loading }: AreaoverviewProps) {
  const [items, setItems] = useState<ItemProjeto[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const token = sessionStorage.getItem('authorization');

        const response = await fetch(`http://localhost:3002/api/itemProjeto`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': token || '',
          },
        });

        if (!response.ok) throw new Error(`Erro: ${response.statusText}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Erro ao buscar itens do projeto:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <div className="mb-2 mr-2">
      {loading ? (
        <Skeleton className="h-10 w-[125px]" />
      ) : (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Tarefas do dia
        </h2>
      )}
      <div className="flex mt-2 space-y-3 flex-col">
        {items.slice(0, 3).map((item) => (
          <a className='cursor-pointer' onClick={() => navigate('/myitem', { state: { id: item.id } })}>
            <Alert key={item.id} className="bg-muted">
              <AlertTitle className="font-medium">
                {item.nome} - <span className="text-xs">{item.status}</span>
              </AlertTitle>
              <AlertDescription className="text-sm">
                {item.responsavel && <p>Responsável: {item.responsavel}</p>}
                {item.valor && <p>Valor: R$ {item.valor}</p>}
                {item.prazo && <p>Prazo: {item.prazo}</p>}
                {item.data_finalizacao && <p>Finalizado em: {item.data_finalizacao}</p>}
              </AlertDescription>
            </Alert>
            </a>
        ))}
          </div>
    </div>
      );
}
