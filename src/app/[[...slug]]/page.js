export async function generateStaticParams() {
  return [{}, { slug: ["a"] }, { slug: ["b"] }];
}

export default function Page({ params }) {
  const { slug = ["home"] } = params;
  return <div>Page: {slug[0]}</div>;
}
