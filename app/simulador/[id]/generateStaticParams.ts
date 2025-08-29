import { simuladores } from '../../../data/simuladores';

export async function generateStaticParams() {
  return simuladores.map((simulador) => ({
    id: simulador.id,
  }));
}
