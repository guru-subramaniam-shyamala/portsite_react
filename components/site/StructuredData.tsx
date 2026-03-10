type StructuredDataProps = {
  data: Record<string, unknown>;
};

export const StructuredData = ({ data }: StructuredDataProps) => (
  <script
    type="application/ld+json"
    // JSON-LD must be emitted as text content for search engines.
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);
