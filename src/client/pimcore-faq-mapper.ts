export interface FAQQueryResponse {
  getPatientFAQListing: {
    edges: FAQNode[];
  };
}

export interface FAQNode {
  node: FAQ;
}

export const transformToFAQs = (response: FAQQueryResponse): FAQ[] => {
  const edges = response.getPatientFAQListing.edges;
  return edges.map((FAQNode) => {
    return {
      id: FAQNode.node.id,
      bannerImage: FAQNode.node.bannerImage,
      label: FAQNode.node.label,
      title: FAQNode.node.title,
      blurb: FAQNode.node.blurb,
      content: FAQNode.node.content,
      slug: FAQNode.node.slug,
      introduceAt: FAQNode.node.introduceAt,
      author: FAQNode.node.author,
    };
  });
};
