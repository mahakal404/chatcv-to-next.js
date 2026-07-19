import BuilderClient from './BuilderClient';

export function generateStaticParams() {
  return [{ slug: [] }];
}

export default function BuilderRoute() {
  return <BuilderClient />;
}
