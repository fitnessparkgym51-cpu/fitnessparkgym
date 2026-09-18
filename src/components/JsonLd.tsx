type JsonLdProps = {
  data: { "@context": "https://schema.org"; [key: string]: unknown };
};

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}