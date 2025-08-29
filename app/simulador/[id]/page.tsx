import { Metadata } from 'next';
import { simuladores } from '../../../data/simuladores';
import SimuladorPageClient from './SimuladorPageClient';

interface SimuladorPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: SimuladorPageProps): Promise<Metadata> {
  const simulador = simuladores.find(s => s.id === params.id);
  
  if (!simulador) {
    return {
      title: 'Simulador no encontrado - Simuladores FIBI',
      description: 'El simulador que buscas no existe.',
    };
  }

  return {
    title: `${simulador.nombre} - Simuladores FIBI`,
    description: simulador.descripcion,
    openGraph: {
      title: simulador.nombre,
      description: simulador.descripcion,
      type: 'website',
    },
  };
}

export default function SimuladorPage({ params }: SimuladorPageProps) {
  return <SimuladorPageClient params={params} />;
}
