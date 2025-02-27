export type AuthorType = {
    id: number;
    documentId: string;
    name: string;
    email: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
};

export type CategoryType = {
    id: number;
    documentId: string;
    name: string;
    slug: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
};

export type AllArticlesType = {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    submissionStatus: string;
    approvalComments: string | null;
    approvalDate: string | null;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string | null;
    author: AuthorType;
    category: CategoryType;
    cover: string | null;
};
