export interface ArticleQueryResponse {
  getArticleListing: {
    edges: ArticleNode[];
  };
}

export interface ArticleNode {
  node: Article;
}

export const transformToArticles = (
  response: ArticleQueryResponse
): Article[] => {
  const edges = response.getArticleListing.edges;
  return edges.map((articleNode) => {
    return {
      id: articleNode.node.id,
      bannerImage: articleNode.node.bannerImage,
      label: articleNode.node.label,
      title: articleNode.node.title,
      blurb: articleNode.node.blurb,
      content: articleNode.node.content,
      slug: articleNode.node.slug,
      published: articleNode.node.published,
      reviewByDate: articleNode.node.reviewByDate,
      owner: articleNode.node.owner,
      introduceAt: articleNode.node.introduceAt,
    };
  });
};
